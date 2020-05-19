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
    let text = fs.readFileSync('./src/icon-new.css', 'utf8');
    for(let k in REG){
        let res = text.match(REG[k]);
        result[k] = res.map(item=>{
            return item.substr(1, item.length - 2);
        })
        res.forEach(item =>{
            result[k].push()
        })
    }
    fs.writeFileSync('./src/name.json', JSON.stringify(result, null, 4));
}
main()