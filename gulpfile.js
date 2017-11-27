// Declare global scope variables.
const gulp = require('gulp')      // load the gulp library
const sass = require('gulp-sass') // load the gulp-sass compiler library
const sassPath = './scss/**/*.scss' // the folder(s) with our Sass source files
const postcss = require('gulp-postcss') // load the postcss library
const autoprefixer = require('autoprefixer') // load the autoprefixer plugin
const cssnano = require('cssnano') // load the cssnano plugin

// Define a new task called 'sass' that we can call to compile Sass to CSS
gulp.task('sass', function () {
  // Create a plugins variable with the names and configuration parameters
  // of the PostCSS plugins that we want to use.
  const plugins = [
    autoprefixer({ browsers: ['last 2 version'] }),
    cssnano()
  ]
  // Now lets tell gulp what to do ...
  return gulp
    .src(sassPath)            // where to find the Sass source files (use our variable)
    .pipe(sass())             // forward those files to the compiler
    .pipe(gulp.dest('./css')) // where to output the interim compiled css
    .pipe(postcss(plugins))   // apply the PostCSS plugins
    .pipe(gulp.dest('./css/min')) // where to output the final minimized CSS files
})

// Define a new default task (so we can just call 'gulp' on the command line)
// to automatically compile when we save changes to our Sass files
gulp.task('default', function () {
  gulp.watch(
    sassPath, // which files to watch for changes (use our variable)
    ['sass']) // an array of tasks to run when changes are detected.
})

// JavaScript Document //
window.onload = buildOverlay;


function buildOverlay() {


// created a div to use as an overlay
    overlay = document.createElement("div");
// Added an id of overlay
    overlay.setAttribute("id","overlay");


// created a div to use as the x button
    equis = document.createElement("div");
// Added an id of x
    equis.setAttribute("id","equis");

// created a img
    leimage = document.createElement("img");

    getThumbnails();

    equis.innerHTML = "<p id=closebutton>X</p>"
}


function getThumbnails() {

    // added an event listener
    gallery.addEventListener("click", function(e) {

    // if an image is clicked on
    if (e.target.nodeName == "IMG"){
    // get source of image
    let imgsrc = e.target.getAttribute("src");


    // replaced thumbnail with large
    changedsrc = imgsrc.replace("thumbnail", "large");

    addOverlay();

    }
});

}

function addOverlay(){


    // added overlay to body

    document.body.appendChild(overlay);

    // Give my image the new changedsrc

    leimage.setAttribute("src", changedsrc);

    // added leimage to overlay

    overlay.appendChild(leimage);


    // added x to overlay
    overlay.appendChild(equis);

   Close();
}



function Close(){

    // created keydown action to close image

    document.addEventListener("keydown", function(e){
        if (e.which == 27){

         overlay.remove("visible");
            }
                           });

    // created closebutton action

     overlay.addEventListener("click", function(e) {
        if (e.target.id == 'closebutton') {

            overlay.remove("visible");

        }
    });


    getThumbnails();
}

