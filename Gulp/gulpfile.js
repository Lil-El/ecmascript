const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const removeStrict = require("remove-use-strict-from-js");
const { src, dest } = gulp;

function defaultTask(cb) {
  src("home.js")
    .pipe(babel())
    .pipe(removeStrict())
    // .pipe(
    //   uglify({
    //     mangle: true, //类型：Boolean 默认：true 是否修改变量名
    //     compress: true, //类型：Boolean 默认：true 是否完全压缩
    //   })
    // )
    .pipe(dest("dist"));
  cb();
}

exports.default = defaultTask;

// gulp.task("babel", function () {
//   return gulp.src("home.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });
