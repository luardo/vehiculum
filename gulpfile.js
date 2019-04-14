var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var sassGlob = require("gulp-sass-glob");

gulp.task("watch", function() {
  gulp.watch("app/scss/**/*.scss", ["sass"]);
});

gulp.task("sass", function() {
  return gulp
    .src("app/scss/**/*.scss") // Gets all files ending with .scss in app/scss
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["sass", "watch"]);
