var css = require('./easy-icon.css.js');

console.info('Easy-icon: 图标使用查询请访问[https://www.theajack.com/easy-icon]');

function main(){
    if(typeof window==='undefined'){
        console.error('easy-icon 只能在浏览器环境中使用');
    }else{
        var style = window.document.getElementById('easyIconStyle');
        if(!style){
            style = window.document.createElement('style');
            style.setAttribute('id','easyIconStyle');
            style.type = 'text/css';
            window.document.head.appendChild(style)
            style.innerHTML = css;
        }
    }
    return {};
}

var EasyIcon = main();

module.exports = EasyIcon;