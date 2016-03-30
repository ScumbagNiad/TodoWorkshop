var stylus = require('gulp-stylus'),
	jeet = require('jeet'),
	nib = require('nib'),
	rupture = require('rupture'),
	autoprefixer = require('autoprefixer-stylus');

gulp.task('styles', function () {
  return gulp.src(path.src + '/assets/styles/*.styl')
	.pipe(stylus({
		compress: true,
		'include css':  true,
		use: [nib(), jeet(), rupture({implicit: false})],
		sourcemap: {
			inline: !isProduction
		}
	}))
	.on('error', onError)
    .pipe(gulp.dest(path.dest + '/assets/css/'))
    .pipe(browserSync.stream());
});