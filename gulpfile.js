var livereload = require('gulp-livereload'),
	clean = require('rimraf'),
	gulp = require('gulp');


var config = {
	assets_path:'./assets',
	build_path: './build'
}

//caminho dos  arquivos bower
config.bower_path = config.assets_path + '/../bower_components';



/*==========================================================================*/


/*
 * JS
 */

//caminho dos js
config.build_path_js = config.build_path + '/js';

//caminho dos js de terceiros
config.build_vendor_path_js = config.build_path_js + '/vendor';
config.vendor_path_js = [
	config.bower_path + '/jquery/dist/jquery.min.js',
	config.bower_path + '/bootstrap/dist/js/bootstrap.min.js',
	config.bower_path + '/angular/angular.min.js',
	config.bower_path + '/angular/angular.js',
	config.bower_path + '/angular-route/angular-route.min.js',
	config.bower_path + '/angular-resource/angular-resource.min.js',
	config.bower_path + '/angular-animate/angular-animate.min.js',
	config.bower_path + '/angular-messages/angular-messages.min.js',
	config.bower_path + '/angular-bootstrap/ui-bootstrap.min.js',
	config.bower_path + '/angular-strap/dist/modules/navbar.min.js'
];


/*==========================================================================*/


/*
 * CSS
 */

//caminho dos css
config.build_path_css = config.build_path + '/css';

//caminho dos css de terceiros
config.build_vendor_path_css = config.build_path_css + '/vendor';
config.vendor_path_css = [
	config.bower_path + '/bootstrap/dist/css/bootstrap.min.css'
];

/*==========================================================================*/


/*
 * HTML
 */

//caminho dos css
config.build_path_html = config.build_path + '/views';


/*==========================================================================*/

gulp.task('teste', function() {
	console.log("esta funcionando");
});

//copia css
gulp.task('copy-styles', function() {
	gulp.src([
		config.assets_path + '/css/**/*.css'
	])
		.pipe(gulp.dest(config.build_path_css))
		.pipe(livereload());

	gulp.src(config.vendor_path_css)
		.pipe(gulp.dest(config.build_vendor_path_css))
		.pipe(livereload());	

});


//copia js
gulp.task('copy-scripts', function() {
	gulp.src([
		config.assets_path + '/js/**/*.js'
	])
		.pipe(gulp.dest(config.build_path_js))
		.pipe(livereload());

	gulp.src(config.vendor_path_js)
		.pipe(gulp.dest(config.build_vendor_path_js))
		.pipe(livereload());

});

//copia html
gulp.task('copy-html', function() {
	gulp.src([
		config.assets_path + '/js/views/**/*.html'
	])
		.pipe(gulp.dest(config.build_path_html))
		.pipe(livereload());

});


gulp.task('clean-build-folder', function() {
	clean.sync(config.build_path);
});

//assiste as mudanças nos arquivos
gulp.task('watch-dev',['clean-build-folder'], function() {
	livereload.listen();
	gulp.start('copy-styles', 'copy-scripts', 'copy-html');
	gulp.watch(config.assets_path + '/**', ['copy-styles', 'copy-scripts','copy-html']);
});
