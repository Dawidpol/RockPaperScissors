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
        .pipe(concat('rockPaperScissors.css'))
        .pipe(sass())
        .pipe(rename('rockPaperScissors.css'))
        .pipe(gulp.dest(''));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    var destination = '';

    return gulp.src('Scripts/**/*.js')
        .pipe(concat('rockPaperScissors.js'))
        .pipe(gulp.dest(destination))
        .pipe(rename('rockPaperScissors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destination));
});

// Default Task
gulp.task('default', ['sass', 'scripts']);
