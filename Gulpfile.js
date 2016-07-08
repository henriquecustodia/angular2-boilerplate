'use strict';

let gulp = require('gulp');
let browserify = require('browserify');
let tsify = require('tsify');
let source = require('vinyl-source-stream');
let server = require('gulp-server-livereload');

gulp.task('default', () => {
    return browserify('./app/boot.ts')
        .plugin(tsify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dest/'));
});

gulp.task('serve', () => {

});