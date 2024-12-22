const fetch = require('node-fetch')

exports.spotifySearch = async(query) => {
  const response = await fetch("https://widipe.com/search?query=" + query);
  let data = await response.json();
  return {
    result: data.data
  };
}

