'use strict'

var babelify = require('babelify')
var browserify = require('browserify')
var buffer = require('vinyl-buffer')
var connect = require('gulp-connect')
var gulp = require('gulp')
var open = require('gulp-open')
var source = require('vinyl-source-stream')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('build-scripts', () => {
  var bundler = browserify('./src/scripts/app.js', { debug: true }).transform(babelify.configure({
    presets: [
      'es2015',
      'react'
    ]
  }))

  bundler.bundle()
    .on('error', function (err) {
      console.error(err)
      this.emit('end')
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./bin'))
  connect.reload()
})

gulp.task('watch-scripts', () => gulp.watch('./src/**/*', ['build-scripts']))

gulp.task('build-markup', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./bin'))
    .pipe(connect.reload())
})

gulp.task('watch-markup', () => gulp.watch('./src/*.html', ['buildMarkup']))

gulp.task('web-server', () => {
  connect.server({
    devBaseUrl: 'http://localhost',
    port: 8080,
    root: './bin'
  })
})

gulp.task('open-app', () => {
  gulp.src('./bin/index.html')
    .pipe(open({ uri: 'http://localhost:8080' }))
})

gulp.task('build', ['build-scripts', 'build-markup'])
gulp.task('watch', ['watch-scripts', 'watch-markup'])
gulp.task('serve', ['web-server', 'open-app'])

gulp.task('default', ['build', 'watch', 'serve'])
