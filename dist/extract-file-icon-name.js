var fs = require('fs');

let REG = {
    iconfont: /\.icon-(.*):/g,
    file: /\.(.*?)-icon:/g,
    fa: /\.fa-(.*):/g,
    element: /\.el-icon-(.*):/g,
}

let result = {

}

function main(){
    let names = [];
    let text = fs.readFileSync('./dist/easy-icon-f.css', 'utf8');
    let arr = text.match(/\.(.*?):/g);
    let buildName = (item)=>{
        return 'ef-'+item.substring(1, item.length-6);
    }
    arr.forEach((item)=>{
        let name = buildName(item)
        if(names.indexOf(name) === -1){
            names.push(name);
        }
    })
    text = text.replace(/\.(.*?):/g, item=>{
        return `.${buildName(item)}:`
    })
    fs.writeFileSync('./dist/easy-icon-f-new.css', text);
    fs.writeFileSync('./dist/name.json', JSON.stringify(names, null, 4));
}
main()