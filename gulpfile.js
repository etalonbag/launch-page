var gulp = require('gulp');
var less = require('gulp-less');
var notify = require('gulp-notify');
var concat = require('gulp-concat');

gulp.task('less', function() {
    gulp.src('./public/assets/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./public/assets/css/'))
        .pipe(notify('Less complied'));
});

gulp.task('watch', ['less'], function() {
   gulp.watch('./public/**/*.less', ['less']);
});

gulp.task('js', function() {
    gulp.src([
        './public/components/jquery/dist/jquery.min.js',
        './public/components/social-likes/social-likes.min.js',
    ]).pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/assets/'));
});

gulp.task('default', ['less']);