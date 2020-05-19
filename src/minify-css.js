var gulp = require('gulp')

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')

function main(){
    gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'))
}

main();