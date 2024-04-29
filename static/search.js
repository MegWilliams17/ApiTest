document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the photo name from the form input
    var photoName = document.getElementById('search-input').value;

    // Fetch images based on the input photo name from Unsplash API
    fetch('/search/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': '{{ csrf_token }}',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ photo: photoName })
    })
    .then(response => response.json())
    .then(data => {
        // Clear previous search results
        document.getElementById('search-results').innerHTML = '';

        // Display search results
        data.unsplash_images.forEach(function(imageUrl) {
            var img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Unsplash Image';
            document.getElementById('search-results').appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


//document.getElementById('search-form').addEventListener('submit', function(event) {
  //  event.preventDefault(); // Prevent default form submission
   // var formData = new FormData(this); // Get form data
   // fetch(this.action, { // Send POST request to server
    //    method: 'POST',
    //    body: formData,
      ///  headers: {
     //       'X-CSRFToken': '{{ csrf_token }}' // Include CSRF token in request headers
   //     }
 //   })
 //   .then(response => response.text()) // Parse response as text
  //  .then(data => {
        //document.getElementById('search-results').innerHTML = data; // Update search results container with response
 //   })
   // .catch(error => console.error('Error:', error)); // Log any errors
//});