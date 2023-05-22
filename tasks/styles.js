import postcss from 'gulp-postcss';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import group_media from 'gulp-group-css-media-queries';
import gulpif from 'gulp-if';
import sassGlob from 'gulp-sass-glob';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import sassLint from 'gulp-sass-lint';
import gulpStylelint from 'gulp-stylelint';
import config from './config';

var sass = require('gulp-sass')(require('sass'));

export const styles = (cb) => {
    gulp.src('app/styles/*.scss')
        .pipe(plumber())
        .pipe(group_media())
        .pipe(gulpif(config.isDev, sourcemaps.init()))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulpif(config.isProd, cleanCSS({
            level: 2,
        })))
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulpif(config.isDev, sourcemaps.write('.')))
        .pipe(gulp.dest(`${config.dist}/assets/styles`));

    cb();
};

const styleFilesLint = [
    'app/blocks/**/*.scss',
    'app/styles/**/*.scss',
];

export const stylesLinter = () => (
    gulp.src(styleFilesLint)
        .pipe(plumber())
        .pipe(sassLint())
        .pipe(gulpStylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: false,
                },
            ],
        }))
);
