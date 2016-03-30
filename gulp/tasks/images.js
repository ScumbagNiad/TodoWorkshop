var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

/* Not using cache */
gulp.task('images', function() {
    return gulp.src(path.src + '/assets/images/**/*')
        // .pipe(imagemin({
        // 	optimizationLevel: 3,
        // 	progressive: true,
        // 	interlaced: true
        // }))
        .pipe(gulp.dest(path.dest + '/assets/images'))
});