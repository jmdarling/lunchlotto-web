const gulp = require('gulp')
const babel = require('gulp-babel')

const path = {
  scripts: 'src/scripts/**/*',
  destination: 'dist'
}

gulp.task('scripts', () => {
  return gulp.src(path.scripts, { base: './src' })
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  return gulp.watch(path.scripts, ['scripts'])
})
