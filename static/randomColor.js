// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Apply random color to each heading
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('randomFactHeading').style.color = getRandomColor();
  document.getElementById('randomUserHeading').style.color = getRandomColor();
  document.getElementById('randomImageHeading').style.color = getRandomColor();
  document.getElementById('randomBoredFactsHeading').style.color = getRandomColor();
  document.getElementById('randomCatImageHeading').style.color = getRandomColor();

document.getElementById('unsplash-gallery').style.color = getRandomColor();


// Apply random color to the background of the cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.style.backgroundColor = getRandomColor();
});
});
