async function getMovie() {
  const movieName = document.getElementById("movieInput").value;
  const resultDiv = document.getElementById("result");

  const apiKey = "175826cf"; // შენი API key
  const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      resultDiv.innerHTML = "<p>Movie not found ❌</p>";
      return;
    }

    resultDiv.innerHTML = `
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <img src="${data.Poster}" alt="Poster of ${data.Title}" width="200">
      `;
  } catch (error) {
    resultDiv.innerHTML = "<p>Error loading data ⚠️</p>";
    console.log(error);
  }
}
