// console.log('%c HI', 'color: firebrick')
// you want the code to fire once the html is loaded so you have to wrap in an event listener
document.addEventListener("DOMContentLoaded", function() {

fetch ('https://dog.ceo/api/breeds/image/random/4')
.then((resp) => resp.json()) 
.then((jsonDataInResponse) => dogImages(jsonDataInResponse) )
// the above returns an array  with an index length of 4 that has urls to the images
//below are the DOM content enders


// we need to loop through this array and add each image to the correct location in the DOM
function dogImages(jsonDataInResponse) {
    // console.log(jsonDataInResponse)
const dogContainer = document.getElementById("dog-image-container")
// console.log(dogContainer)
jsonDataInResponse.message.forEach(function(imageUrl) {
    const img = document.createElement("img")
    img.src = imageUrl
    dogContainer.appendChild(img)
        })
    }

    //Challenge 2
fetch("https://dog.ceo/api/breeds/list/all")
.then((resp) => resp.json())
.then((data) => console.log(data))
})