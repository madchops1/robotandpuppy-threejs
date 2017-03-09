var gulp            = require('gulp');
var args            = require('yargs').argv;
var del             = require('del');
var $               = require('gulp-load-plugins')({lazy: true});
var karmaServer     = require('karma').Server;
var proxy           = require('http-proxy-middleware'),
    htmlhint        = require("gulp-htmlhint"),
    zip             = require('gulp-vinyl-zip').zip,
    htmlmin         = require('htmlmin'),
    path            = require('path');
var apiProxy;
var browserSync     = require('browser-sync').create();
var concat          = require('gulp-concat');
var sourcemaps      = require('gulp-sourcemaps');
var gsi             = require('gulp-scripts-index');
var htmlreplace     = require('gulp-html-replace');
var runSequence     = require('run-sequence');
var templateCache   = require('gulp-angular-templatecache');
var version         = 'x.x.x';
var replace         = require('gulp-replace');
var jsmin           = require('gulp-jsmin');
var minify          = require('gulp-minify');

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('sass', function () {
    var sassOptions = {
        outputStyle: 'nested' // nested, expanded, compact, compressed
    };

    return gulp
        .src('./styles/sass/*.scss')
        .pipe($.plumber({errorHandler: swallowError}))
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write())
        //.pipe(gulp.dest(config.tmp + '/styles'));
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './',
        open: 'external',
        host: 'rp.localhost',
        port: 3004,
        ui: {
            port: 3005
        }
    });
    gulp.watch("./styles/sass/*.scss", ['sass']);
    gulp.watch("./styles/sass/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}
