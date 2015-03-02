var gulp = require('gulp');
var less = require('gulp-less');
var notify = require('gulp-notify');


gulp.task('less', function() {
    gulp.src('./public/assets/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./public/assets/css/'))
        .pipe(notify('Less complied'));
});

gulp.task('watch:less', ['less'], function() {
   gulp.watch('./public/less/**/*.less', ['less']); 
});