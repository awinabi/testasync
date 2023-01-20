const axios = require("axios");

async function fetchMovies() {
  const response = await axios.get('http://localhost:3000/');
  // waits until the request completes...
  console.log(response);
}

fetchMovies();
