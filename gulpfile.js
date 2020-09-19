const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

function transpilar(cb){
    gulp.src('./src/main.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public/assets/js'));

    cb();
}

function converteParaSass(cb){
    gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'))

    cb();
}

function assistirMudancas(){
    gulp.watch('./src/assets/scss/**/*.scss',converteParaSass);
    gulp.watch('./src/main.js',transpilar);
}

exports.default = assistirMudancas;

