var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./public/assets/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('watch:less', ['less'], function() {
   gulp.watch('./public/less/**/*.less', ['less']); 
});