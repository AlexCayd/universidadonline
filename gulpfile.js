const { src, dest, series, watch, parallel } = require('gulp')
const sass = require('gulp-sass') (require('sass'))
const autoprefixer = require('gulp-autoprefixer');

//Función que compila SASS
function compilarSASS() {
    return src("scss/app.scss")
        .pipe( sass())
        .pipe(dest("build/css"))
}

function watchArchivos() {
    watch("scss/*.scss", compilarSASS)
    watch("index.html")
}

exports.compilarSASS = compilarSASS;
exports.watchArchivos = parallel(watchArchivos);