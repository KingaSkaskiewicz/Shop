// gulpfile.js
var gulp = require("gulp");
var concat = require('gulp-concat');
var sass = require("gulp-sass");

function style() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src("wwwroot/content/src/sass/*.scss")

            // Use sass with the files found, and log any errors
            .pipe(sass())
            .on("error", sass.logError)

            // What is the destination for the compiled file?
            .pipe(gulp.dest("wwwroot/content/dist/css"))
    );
}

function watch() {
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch('wwwroot/content/src/sass/*.scss', style)
}

function createBundles() {
    return (
        gulp
            .src([
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/angular/angular.min.js',
                'node_modules/angular-route/angular-route.min.js'  
            ])
            .pipe(concat('bundle.min.js'))
            .pipe(gulp.dest("wwwroot/content/dist/js"))
    );
}


// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
// Don't forget to expose the task!
exports.watch = watch;
exports.createBundles = createBundles;