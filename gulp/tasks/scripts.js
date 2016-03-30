var browserify = require('browserify'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify'),
	watchify = require('watchify');

var index = watchify(browserify({
	entries: [path.src + '/assets/scripts/index.coffee'],
	extensions: ['.coffee'],
	paths: [path.src + '/assets/scripts/'],
	debug: !isProduction
}));

var bundleIndex = function () {
	return index.bundle()
		.on('error', onError)
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(gulpif(isProduction, uglify()))
		.pipe(gulp.dest(path.dest + '/assets/js'))
		// .pipe(livereload());
};

index.on('update', bundleIndex);

gulp.task('scripts', function() {
	gulp.src([path.src + '/assets/scripts/vendor/*.*'])
		.pipe(gulp.dest(path.dest + '/assets/js/vendor/'));

	return bundleIndex();
});