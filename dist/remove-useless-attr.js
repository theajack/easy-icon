var fs = require('fs');


function main(){
    let names = [];
    let text = fs.readFileSync('./dist/easy-icon-f-new.css', 'utf8');
    text = text.replace(/{((.|\r\n)*?)}/g, item=>{
        let arr = item.substring(1, item.length-1).split('\n');
        console.log(arr)
        return '{\r\n'+arr.filter(item=>{
            return item.indexOf('font-family') !== -1 || item.indexOf('content') !== -1
        }).join('')+'}'
    })
    fs.writeFileSync('./dist/easy-icon-f-new2.css', text);
}
main()

