(function (window) {
    function copyInputValue(id) {
        return copy(document.getElementById(id).value);
    }
    window.copyInputValue = copyInputValue;
    var fullMode = false;
    function toggleMode(obj){
        fullMode = !fullMode;
        id('iconList').className = fullMode?'fullMode':'';
        obj.children[0].className = fullMode?'ei-bars':'ei-th';
    }
    window.toggleMode = toggleMode;
    function copy(text) {
        var input = document.getElementById("jCopyInput");
        if (!input) {
            input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", "jCopyInput");
            document.body.appendChild(input);
        }
        input.value = text;
        input.select();
        if (document.execCommand("Copy")) {
            toast('已复制')
            return true
        } else {
            alert("Copy is not supported in your browser");
            return false
        }
    }
    var timer = null;
    function toast(text, time) {
        clearTimeout(timer);
        var _toast = id('toastEle');
        _toast.innerHTML = text;
        _toast.style.display = 'block';
        timer = setTimeout(function () {
            _toast.style.display = 'none';
        }, time || 2000)

    }

    function id(i) {
        return document.getElementById(i);
    }

    function main() {
        id('iconList').onclick = function (e) {
            var ele = e.target;
            if (ele.tagName === 'UL') {
                return;
            }
            if (ele.tagName === 'I' || ele.tagName === 'SPAN') {
                ele = ele.parentNode;
            }
            let className = ele.children[0].className
            location.hash = '#?name='+className
            renderIcon(className)
        }
        let timer = null;
        id('searchInput').oninput = function(){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                var value = this.value;
                var list = id('iconList').getElementsByTagName('li');
                var has = false;
                for(var i=0;i<list.length;i++){
                    if(list[i].children[0].className.substring(3).indexOf(value)!==-1){
                        list[i].style.display = 'inline';
                        has = true;
                    }else{
                        list[i].style.display = 'none';
                    }
                }
                id('no-icon').style.display = has?'none':'block';
                id('iconList').style.display = has?'block':'none';
            },500)
        }
    }
    function getUrlParam() {
        var search = '';
        if (location.search != '') {
            search = location.search.substring(1)
        } else if (location.hash.indexOf('?')!==-1) {
            search = location.hash.substring(location.hash.indexOf("?") + 1);
        }
        if (search == '') {
            return null
        } else {
            var d = decodeURI(search).split("&");
            var a = {};
            for (var c = 0; c < d.length; c++) {
                var b = d[c].split("=");
                a[b[0]] = b[1]
            }
            return a
        }
    };
    function renderIcon(name) {
        id('icons').innerHTML = '<i class="' + name + '"></i>\
        <i class="'+ name + ' icon-middle"></i>\
        <i class="'+ name + ' icon-large"></i>\
        <i class="'+ name + ' icon-slarge"></i>'
        id('fullHtmlInput').value = '<i class="' + name + '"></i>'
    }
    document.addEventListener('DOMContentLoaded', function () {
        main();
        var param = getUrlParam();
        if(param && param.name){
            renderIcon(param.name);
        }else{
            renderIcon('ei-resize');
        }
    }, false)
    let scrolltimer = null;
    window.onscroll = function(){
        if(scrolltimer === null){
            scrolltimer = setTimeout(function(){
                document.body.className = (getScrollTop() > 150)?'mini':''
                clearTimeout(scrolltimer)
                scrolltimer = null
            },300)
        }
    }
    function getScrollTop(){
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    }
})(window)
