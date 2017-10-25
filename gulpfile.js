var gulp = require("gulp");
var less = require("gulp-less");
var prefix = require("gulp-autoprefixer");
var minify = require("gulp-clean-css");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var gulpSequence = require("gulp-sequence");

// Compile main.less file and add vendor prefixes
gulp.task("less", function() {
    return gulp.src("src/less/main.less")
        .pipe(plumber()) //error catching
        .pipe(less())
        .pipe(prefix({
            browsers: ["> 1%", "chrome >= 20", "firefox >= 3", "ie >= 9", "opera >= 9"]
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest("dist/css/"));
});

// Minify main.css file and rename it to main.min.css
gulp.task("rename", function() {
    return gulp.src("dist/css/main.css")
        .pipe(minify())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest("dist/css/"));
});

// Run tasks in sequence
gulp.task("sequence", function(cb) {
    gulpSequence("less", "rename", cb);
});


// Watch task
gulp.task("default", ["sequence"], function() {
    gulp.watch("src/less/**/*.less", ["sequence"])
});