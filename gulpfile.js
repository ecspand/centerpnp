var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var paths = [
    "src/*.ts",
    "Eigenen Tab Typen erstellen und einbinden/*.ts"
]

gulp.task("default", function () {
    return gulp.src(paths, { base: '.' })
        .pipe(tsProject())
        .js.pipe(gulp.dest('.'));
});