//List of necessary gulp plugins
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat");

/*
SASS task
Task for compiling SASS into CSS
Task for adding vendor prefixes to necessary CSS attributes
*/
gulp.task('sass', function(){
    gulp.src('assets/scss/main.scss')
	.pipe(sass({
		outputStyle: 'compressed',
		errLogToConsole: false,
		onError: function(error) {
			notify({
				title: "SASS ERROR",
				message: "line " + error.line + " in " + error.file.replace(/^.*[\\\/]/, '') + "\n" + error.message
			}).write(error);
		}
	}))
	.pipe(autoprefixer({ browsers: ['last 3 versions'] }))
	.pipe(gulp.dest('assets/css/'));
});

gulp.task('css', function () {
    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/animate.css/animate.css',
        'bower_components/angularjs-slider/dist/rzslider.css',
        'assets/css/main.css'
    ])
    .pipe(concat('app.css'))
	.pipe(gulp.dest('assets/css/'));

});

gulp.task('js', function () {
    gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/ngstorage/ngStorage.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angularjs-slider/dist/rzslider.js',
        'bower_components/jquery-animateNumber/jquery.animateNumber.js',
        'app/app.config.js',
        'app/app.states.js',
        'app/directives/*.js',
        'app/services/*.js',
        'app/controllers/home.controller.js',
        'app/controllers/male.controller.js',
        'app/controllers/female.controller.js',
        'app/controllers/result.controller.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets/js/'))
});

// Task that builds css
gulp.task('buildCss', ['sass', 'css', 'sass', 'css']);


/*
Watch task
Watching for changes in files
*/
gulp.task('watch', function(){
    gulp.watch('**/*.scss', ['buildCss']);
    gulp.watch('**/*.js', ['js']);
});

/*
Default task
Calls tasks which should be executed by default
*/
gulp.task('default', ['sass', 'css', 'js']);
