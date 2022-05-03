const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

const build = () => {
	return src("./shaiye/**/*.scss")
		.pipe(sass())
		.pipe(purgecss({ content: ["./*.html"] }))
		.pipe(dest("css"));
};

const watchFiles = () => {
	watch(["./shaiye/**/*.scss", "./*.html"], build);
};

exports.default = series(build, watchFiles);
