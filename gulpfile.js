var gulp = require("gulp");
var gls  = require("gulp-live-server");

var paths = {
    root: "./",
}

gulp.task('debug',  function () {
    // Add templates.js at the end of app.js
    var server = gls.static(paths.root, 80);
    server.start();

    gulp.watch(
        [
            "./app/**/*.html",
            "./app/**/*.css",
            "./app/**/*.js",
            "./index.html"
        ],
        function (file) {
            server.notify(file);
        });
});