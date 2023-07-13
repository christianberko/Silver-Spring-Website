//Create an array of images 
var imageArray = ["images/guitar_perf.jpg","images/afi_night.jpg","images/ice_rink.jpg", "images/trees_dtsp.jpg", "images/regal.jpg"];

//Save total size of array to variable arraySize
var arraySize = imageArray.length;

//Set wait time between slides in milliseconds 
setInterval(slideSHOW, 3000);

var x = 1; //Used to count up to arraySize

//Function runit play slideshow when called 
function slideSHOW() {
    //Set image to next picture in image array
    document.getElementById('dtspPHOTO').src = imageArray[x];

    //Increase count by 1
    x++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (x === arraySize) {
        x = 0;
    }
}

var gardenArray =["images/garden.jpg", "gardenEntryway.jpg"]
var gardenSize = gardenArray.length;
var y = 1;

setInterval(Switch, 2000);

function Switch(){
    document.getElementById('BrooksideGardens').src = gardenArray[y];

    //Increase count by 1
    y++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (y === gardenSize) {
        y = 0;
    }
}

function validateForm(){
    "use strict";
    var isvalid=true;
        console.log("Christian Berko");
       if(document.getElementById("visitor").value == ''){
            document.getElementById("visitor").style.borderColor="red";
            document.getElementById("visitor").style.backgroundColor = 'pink';
            isvalid=false;
            }
       else
           {
            document.getElementById("visitor").style = null;
           }
    
     console.log("Is name ok? "+isvalid);
     return (isvalid);
    }