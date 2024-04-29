const fonts = [
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  // Add more font families as needed
];

const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

const fontLink = document.getElementById('font-link');
fontLink.href = `https://fonts.googleapis.com/css?family=${randomFont}`;
