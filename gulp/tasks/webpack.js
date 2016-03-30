var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

// The development server (the recommended option for development)
// gulp.task('default', ['webpack-dev-server']);
// gulp.task('default', ['webpack:build']);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh


// gulp.task('default', ['webpack:build'], function() {
//     gulp.watch(['app/**/*'], ['webpack:build']);
// });

// Production build
// gulp.task('build', ['webpack:build']);

gulp.task('webpack', function(callback) {
    webpack(Object.create(config), function(err, stats) {
        if (err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));
        // .on('change', );
        console.log('here')
        browserSync.reload();
        callback();
    });
});
