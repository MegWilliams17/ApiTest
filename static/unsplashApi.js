// Unsplash Images API request

    api_key = 'your_api_key_here'  # Replace 'your_api_key_here' with your actual Unsplash API key
const images = document.querySelectorAll('.image');

fetch(`https://api.unsplash.com/photos/random?query=beach&count=10&client_id=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    data.forEach((photo, index) => {
      images[index].src = photo.urls.regular;
    });
  });

//getImages Function
function getImages() {
   fetch(`https://api.unsplash.com/photos/random?query=food&count=10&client_id=${apiKey}`)
     .then(response => response.json())
     .then(data => {
       data.forEach((photo, index) => {
         images[index].src = photo.urls.regular;
      });
    });
 }


// Set interval to fetch images every 10 seconds after DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
    getImages(); // Fetch images immediately
    setInterval(getImages, 10000); // Fetch images every 10 seconds
});

// Call the getImages function when the page loads
        window.addEventListener('load', () => {
            getImages();
        });

