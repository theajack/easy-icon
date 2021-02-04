
module.exports = function(ID, css){
    console.info('Easy-icon: 图标使用查询请访问[https://theajack.gitee.io/easy-icon/]');
    if(typeof window==='undefined'){
        console.error('easy-icon js引入只能在浏览器环境中使用');
    }else{
        var style = window.document.getElementById(ID);
        if(!style){
            style = window.document.createElement('style');
            style.setAttribute('id',ID);
            style.type = 'text/css';
            style.innerHTML = css;
            window.document.head.appendChild(style)
        }
    }
    return {};
}