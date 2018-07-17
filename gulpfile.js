// const gulp = require('gulp'); Основной
// const watch = require('gulp-watch'); Смотреть изменения. Может не работать - использовать gulp.watch
// const browserSync = require('browser-sync'); LiveLoad
// const reload = browserSync.reload; LiveLoad_Reload
// const cssMin = require('gulp-clean-css'); Css minify
// const autoPrefixer = require('gulp-autoprefixer');
// const autoprefixer = require('autoprefixer'); plugin for postCss
// const postcss = require('gulp-postcss');
// const csscomb = require('gulp-csscomb'); Сортировщик свойств
// const csscomblint = require('gulp-csscomb-lint');
// const jsMin = require('gulp-uglify'); Js minify
// const imageMin = require('gulp-imagemin'); imgOptimiz
// const pngquant = require('imagemin-pngquant'); imgOptimiz
// const rimraf = require('rimraf'); rm -r
// const include = require("gulp-include"); full-control-Concatenate
// const fileinclude = require('gulp-file-include'); Сцепление через префикс @@include
// const concat = require('gulp-concat'); сцепление файлов в один
// const importCss = require('gulp-import-css'); Сцепляет все css в один через @import. Работает не только для css
// const sass = require('gulp-sass'); SASS компилятор
// const sourcemaps = require('gulp-sourcemaps');
// const rigger = require('gulp-rigger'); Соединение через //= file НЕ РАБОТАЕТ В CSS
// const rename = require('gulp-rename'); Переименовать файл
// const runSequence = require('run-sequence'); последов. запуск тасков (синх!)


'use strict';

const gulp = require('gulp');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

const sass = require('gulp-sass');
const cssMin = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csscomb = require('gulp-csscomb');

const include = require("gulp-include");
const babel = require('gulp-babel');
const jsMin = require('gulp-uglify-es').default;

const imageMin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const svgSprite = require('gulp-svg-sprite');

const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');


// Основыне пути
const path = {
  public: {
    html: 'public/',
    font: 'public/assets/font/',
    img: 'public/assets/img/',
    css: 'public/assets/css/',
    js: 'public/assets/js/'
  },
  src: {
    html: 'src/*.html',
    font: 'src/font/*.*',
    img: 'src/img/*.*',

    commonBlocks: 'src/common.blocks/',
    scssAll: 'src/common.blocks/*.scss',
    scssMain: 'src/css/style.scss',
    cssMain: 'src/css/_style/',

    normoliz: 'node_modules/normalize.css/normalize.css',

    jsAll: 'src/common.blocks/*.js',
    jsMain: 'src/js/main.js',

    svgIcons: 'src/sprite/svgSprite_icons/*.svg'
  },
  clean: './public'
};


// Конфигурация сервера для LiveLoad
const config = {
  server: {
    baseDir: './public'
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "Frontend_DevilDante"
};


// Конфигурация svg sprite генератора
const svgSpriteConfig = {
  mode: {
    css: {
      dest: "./",
      layout: "diagonal",
      bust: false,
      sprite: "sprite.svg",
      render: {
        css: true // Activate CSS output (with default options)
      }
    }
  }
};


// HTML
gulp.task('html:public', function () {
  return gulp.src(path.src.html) // Выберем файлы по нужному пути
    .pipe(gulp.dest(path.public.html)) // Выплюнем их в папку public
    .pipe(reload({stream: true})); // И перезагрузим наш сервер для обновлений
});

// FONTS
gulp.task('font:publuc', function () {
  return gulp.src(path.src.font)
  .pipe(gulp.dest(path.public.font));
});


// SCSS
gulp.task('normoliz:public', function () {
  return gulp.src(path.src.normoliz)
    .pipe(cssMin())
    .pipe(gulp.dest(path.public.css));
});

gulp.task('csscomb', function () {
  return gulp.src(path.src.scssAll) // Найдем все файлы css
    .pipe(csscomb()) // "Причешим"
    .pipe(gulp.dest(path.src.commonBlocks));
});

gulp.task('css:public', ['csscomb'], function () {
  return gulp.src(path.src.scssMain) // Выберем наш основной scss
    .pipe(sourcemaps.init())
    .pipe(sass()) // Компилируем
    .pipe(postcss([ autoprefixer({
      browsers:['ie >= 11', 'last 8 version']
      }) ])) // Добавить префиксы
    .pipe(cssMin()) // Минификация
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.public.css))
    .pipe(reload({stream: true}));
});

gulp.task('css:buildStyle', ['csscomb'], function () {
  return gulp.src(path.src.scssMain) //Выберем наш css
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csscomb())
    .pipe(gulp.dest(path.src.cssMain)) // Предпросмотр
    .pipe(reload({stream: true}));
});


// JS
gulp.task('js:public', function () {
  return gulp.src(path.src.jsMain) //Найдем наш main файл
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(babel({
      presets: ['env']
      }))
    .pipe(jsMin()) //Сожмем наш js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.public.js)) //Выплюнем готовый файл в public
    .pipe(reload({stream: true})); //И перезагрузим сервер
});


// IMAGE
gulp.task('image:public', function () {
  return gulp.src(path.src.img) //Выберем наши картинки
      .pipe(imageMin({ //Сожмем их
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()],
          interlaced: true
      }))
      .pipe(gulp.dest(path.public.img)) //И бросим в public/assets
      .pipe(reload({stream: true}));
});


//  SVG SPRITE GENERATOR
gulp.task('svgSpriteCreate', function () {
  return gulp.src(path.src.svgIcons)
  .pipe(svgSprite(svgSpriteConfig))
  .pipe(gulp.dest('src/sprite'));
});

gulp.task('svgSprite', ['svgSpriteCreate'], function () {
  return gulp.src('src/sprite/sprite.svg')
  .pipe(gulp.dest('src/img'));
});


//  Helpful tasks
gulp.task('clean', function (cb) {
  return rimraf(path.clean, cb);
});

gulp.task('webserver', function () {
  return browserSync(config);
});

gulp.task('watch', function(){
  gulp.watch(path.src.html, ['html:public']);
  gulp.watch(path.src.scssAll, ['css:public']);
  gulp.watch(path.src.jsAll, ['js:public']);
  gulp.watch(path.src.img, ['image:public']);
});

gulp.task('public', [
  'html:public',
  'normoliz:public',
  'css:public',
  'js:public',
  'image:public'
  ]);

gulp.task('public--full', function(callback) {
  runSequence('clean', 'public', callback);
});

gulp.task('start--work', function(callback) {
  runSequence('public', 'webserver', 'watch', callback);
});
