const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cp = require('child_process');
const browserSync = require('browser-sync');

const isWin = process.platform === 'win32';

// Build the Jekyll Site
function jekyllBuild(done) {
    const cmd = isWin ? 'jekyll.bat' : 'bundle';
    const args = isWin ? ['build'] : ['exec', 'jekyll', 'build'];
    const env = Object.assign({}, process.env, {
        PATH: ['/usr/local/opt/ruby/bin', '/usr/local/lib/ruby/gems/4.0.0/bin', process.env.PATH].join(':')
    });
    return cp.spawn(cmd, args, { stdio: 'inherit', env })
        .on('close', done);
}

// Rebuild Jekyll and page reload
const jekyllRebuild = gulp.series(jekyllBuild, (done) => {
    browserSync.reload();
    done();
});

// Compile Sass
function compileSass() {
    return gulp.src('assets/css/scss/main.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(prefix({
            overrideBrowserslist: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
            cascade: true
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({ stream: true }));
}

// Compress images
function compressImg() {
    return gulp.src('assets/img/**/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/img'))
        .pipe(browserSync.reload({ stream: true }));
}

// Wait for jekyll-build, then launch the Server
const serve = gulp.series(compileSass, compressImg, jekyllBuild, (done) => {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
    done();
});

// Watch scss, html, img files
function watchFiles() {
    gulp.watch('assets/css/scss/**/*.scss', compileSass);
    gulp.watch('assets/img/**/*', compressImg);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_pages/*.html', '_posts/*'], jekyllRebuild);
}

// Build task (no browser-sync, for CI/CD)
const build = gulp.series(compileSass, jekyllBuild);

// Default task
const dev = gulp.parallel(serve, watchFiles);

// Export tasks
exports.jekyllBuild = jekyllBuild;
exports.sass = compileSass;
exports.img = compressImg;
exports.build = build;
exports.default = dev;
