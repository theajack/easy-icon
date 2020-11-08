var fs = require('fs')

function main(file, name){
    let css = fs.readFileSync(file, 'utf8');
    let arr = css.match(new RegExp(`\\.${name}-.*:`, 'g')).map(item=>item.substring(1, item.length-1));
    fs.writeFileSync(`./assets/class-data.json`, JSON.stringify(arr), 'utf8');
}

main('./src/css/easy-icon-l.css', 'el');