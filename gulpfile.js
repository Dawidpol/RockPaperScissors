var gulp = require('gulp');

gulp.task('default', function () {
    console.log('Hello Gulp!')
});

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('StyleSheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('rockPaperScissors.css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('Scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('rockPaperScissors.js'))
        .pipe(rename('rockPaperScissors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('rockPaperScissors.js'));
});

// Default Task
gulp.task('default', ['sass', 'scripts']);
