const gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    shell = require('gulp-shell'),
    zip = require('gulp-zip'),
    gap = require('gulp-append-prepend'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    merge = require('merge-stream');

const package = require('./package.json');
const AEVersion = '2018';

function getAeScriptsPath()
{
    if (process.platform == 'win32') {
        return `C:\\Program Files\\Adobe\\Adobe After Effects ${AEVersion}\\Support Files\\Scripts`;
    } else {
        return `/Applications/Adobe After Effects CC ${AEVersion}/Scripts`;
    }
}

const paths = {
    testLib: './test/lib',
    aeScriptsDir: getAeScriptsPath()
};

gulp.task('build:aexjsx', () => {
    const tsProject = ts.createProject('lib/tsconfig.json');

    const AMD_CONCAT_CODE = `})(aex || (aex = {}));\nvar aex;\n(function (aex) {`;

    return tsProject.src()
        .pipe(tsProject())
        .pipe(gap.prependText('// KraftyFX Inc. - AEX Library'))
        .pipe(replace(AMD_CONCAT_CODE, '// --------'))
        .pipe(gulp.dest(paths.testLib));
});

gulp.task('build:testjsx', () => {
    const tsProject = ts.createProject('test/tsconfig.json');

    return tsProject.src()
        .pipe(tsProject())
        .pipe(gap.prependText('// KraftyFX Inc. - Test Script'))
        .pipe(gulp.dest(paths.aeScriptsDir));
});

gulp.task('deploy:all', gulp.series(['build:aexjsx', 'build:testjsx'], () => {
    return gulp.src([
        './test/lib/*.jsx'
    ])
    .pipe(gulp.dest(paths.aeScriptsDir + '/lib'));
}));

gulp.task('watch', gulp.series(['deploy:all'], () => {
    gulp.watch([
        './lib/**/*.ts',
        './test/*.tsx'
    ], gulp.series(['deploy:all']));
}));
