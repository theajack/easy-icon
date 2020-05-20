(function (window) {
    function main(){
        var naviIndex = 0;
        var list = document.querySelector('.navi-w').children;
        for(var i=0;i<list.length;i++){
            (function(index){
                list[index].onclick = function(){
                    var id = this.getAttribute('navi-target');
                    var naviHeight = document.getElementById('navi').offsetHeight;
                    var top = document.getElementById(id).offsetTop - naviHeight - 55; // 55 是mini icon show的高度
                    document.body.scrollTop = top;
                    document.documentElement.scrollTop = top;
                    list[naviIndex].className = 'navi-item';
                    this.className = 'navi-item active';
                    naviIndex = index;
                }
            })(i)
        }
    }


    document.addEventListener('DOMContentLoaded', function () {
        main();
    }, false)
})()