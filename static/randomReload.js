
   

// Function to fetch random fact from the server
function fetchRandomFact() {
  fetch('/get_random_fact/') // Fetch random fact from the endpoint
    .then(response => response.json())
    .then(data => {
      document.getElementById('randomFact').textContent = data.fact; // Update the random fact content
    })
    .catch(error => console.error('Error:', error));
}





  // Function to fetch random user name from the server
  function fetchRandomUser() {
    fetch('/get_random_user/') // Fetch random user name from the endpoint
      .then(response => response.json())
      .then(data => {
        document.getElementById('randomUser').textContent = data[0].name; // Update the random user name content
      })
      .catch(error => console.error('Error:', error));
  }





// Function to fetch random dog image from the server
function fetchRandomDogImage() {
  fetch('/get_random_dog/') // Fetch random dog image from the endpoint
    .then(response => response.json())
    .then(data => {
      document.getElementById('randomDogImage').src = data.dog; // Update the dog image source
    })
    .catch(error => console.error('Error:', error));
}

// Function to fetch random activity from the server
function fetchRandomActivity() {
  fetch('/get_random_activity/') // Fetch random activity from the endpoint
    .then(response => response.json())
    .then(data => {
      document.getElementById('randomActivity').textContent = data.activity; // Update the random activity content
    })
    .catch(error => console.error('Error:', error));
}

// Function to fetch random cat image from the server
function fetchRandomCatImage() {
  fetch('/get_random_cat/') // Fetch random cat image from the endpoint
    .then(response => response.json())
    .then(data => {
      document.getElementById('randomCatImage').src = data.cat; // Update the cat image source
    })
    .catch(error => console.error('Error:', error));
}

// Add event listeners for reload buttons
document.getElementById('reloadFactButton').addEventListener('click', fetchRandomFact);
document.getElementById('reloadUserButton').addEventListener('click', fetchRandomUser);
document.getElementById('reloadDogButton').addEventListener('click', fetchRandomDogImage);
document.getElementById('reloadActivityButton').addEventListener('click', fetchRandomActivity);
document.getElementById('reloadCatButton').addEventListener('click', fetchRandomCatImage);

// Fetch random data when the page loads
window.addEventListener('load', () => {
  fetchRandomFact();
  fetchRandomUser();
  fetchRandomDogImage();
  fetchRandomActivity();
  fetchRandomCatImage();
});













