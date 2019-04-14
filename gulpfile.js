var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var sassGlob = require("gulp-sass-glob");

gulp.task("sass", function() {
  return gulp
    .src("app/scss/**/*.scss") // Gets all files ending with .scss in app/scss
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});
