var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');


// minify new images
gulp.task('imagemin', function(){
	var imgSrc = './img/**/*',
		imgDst = './images';

	gulp.src(imgSrc)
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
});


gulp.task('sass', function(){
return gulp.src('./scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['browserSync', 'imagemin' ,'sass'], function(){
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./img/**/*', ['imagemin']);
	gulp.watch('index.html', browserSync.reload);
});

gulp.task('default', ['watch']);