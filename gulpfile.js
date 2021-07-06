

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

gulp.task('minifyHtml', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyHtmlTwo', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'));
});

gulp.task('minifyCss', () => {
    return gulp.src('src/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
})

gulp.task('imageMin', async () =>{
    gulp.src('src/assets/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/image'))
})

gulp.task('default', gulp.series(['minifyHtml','minifyCss','imageMin','minifyHtmlTwo']));