import { apiKey } from "./config.js";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
  const movieName = document.getElementById("movieInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!movieName) {
    resultDiv.innerHTML = "<p>Please enter a movie name 🎬</p>";
    return;
  }

  const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      resultDiv.innerHTML = "<p>Movie not found ❌</p>";
      return;
    }

    const poster =
      data.Poster !== "N/A"
        ? data.Poster
        : "https://via.placeholder.com/200x300?text=No+Image";

    resultDiv.innerHTML = `
      <h2>${data.Title}</h2>
      <p><strong>Year:</strong> ${data.Year}</p>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <img src="${poster}" alt="Poster of ${data.Title}" width="200">
    `;
  } catch (error) {
    resultDiv.innerHTML = "<p>Error loading data ⚠️</p>";
    console.log(error);
  }
});
