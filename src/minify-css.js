var gulp = require('gulp')
var fs = require('fs')
var version = require('../package.json').version;
var pkg = require('../npm/package.json')
// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')

function main(){
    updateVersion();

    gulp.src(['README.md', 'README.cn.md', 'LICENSE'])
        .pipe(gulp.dest('npm'))

    gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'))
        .on('end', ()=>{
            writeInToNpm();
        })
}

function writeInToNpm(){
    ['-a','-all','-f','-l','-t',''].forEach((name)=>{
        let text = fs.readFileSync(`./dist/easy-icon${name}.css`, 'utf8');
        fs.writeFileSync(`./npm/lib/easy-icon${name}.css.js`, `module.exports = "${replace(text)}"`, 'utf8');
        fs.writeFileSync(`./npm/css/easy-icon${name}.css`, text, 'utf8');

        let texto = fs.readFileSync(`./dist/easy-icon${name}.o.css`, 'utf8');
        fs.writeFileSync(`./npm/offline/lib/easy-icon${name}.css.js`, `module.exports = "${replace(texto)}"`, 'utf8');
        fs.writeFileSync(`./npm/offline/css/easy-icon${name}.css`, texto, 'utf8');
    })
}

function replace(css){
    return css.replace(/'\\/g, "'\\\\");
}

function updateVersion(){
    pkg.version = version;
    fs.writeFile('./npm/package.json', JSON.stringify(pkg, null, 4), 'utf8', (err) => {
        if (err) throw err;
    });
}

main();