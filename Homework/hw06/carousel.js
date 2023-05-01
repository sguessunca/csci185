const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];

const image = document.getElementById('current-image');



let idx = 0;
let position = "idx";
let text = 'Photo ${position}/10.';



/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image');
    image.src = photos[idx];
    document.querySelector(".caption").innerHTML = text;
    }   



/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/



function forward() {
    console.log('forward');
    if (idx >= photos.length -1) {
        idx = 0;  
        showImage();
    }
    ++idx;
   showImage();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    console.log('back'); 
    if (idx <= 0) {
        idx = 9;  
        showImage();
    }
    --idx;
   showImage();
}


