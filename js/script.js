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
