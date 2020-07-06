let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
gulp.task('scss', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer({
                overrideBrowserslist: ['last 10 versions'],
                cascade: false
            }

        ))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
})