const movieId = 550;
const asal = `https://api.themoviedb.org/3/movie/${movieId}`;

// const movieBox = document.querySelector("#movie");

const getMovie = async (url) => {
  try {
    const axi = await axios.get(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2RlY2MxMzcyYmZkY2RkMDE1Zjc5MWJkZmEyMjgxMyIsIm5iZiI6MTc2NDI4OTMyOC43ODcwMDAyLCJzdWIiOiI2OTI4ZWIzMDIzYmFhYWQ2OTMyNDkzOTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jftWzMvexI5iwE4EPBXPQVMKXpoDHueegc60cb_5OJU",
      },
    });
    console.log(axi);

    const movie = axi.data;
    // console.log(movie);

    const img = document.createElement("img");

    const imagePath = "https://image.tmdb.org/t/p/w200";

    const data = movie.poster_path;

    img.src = imagePath + data;

    img.style.width = "400px";
    img.style.margin = "auto";

    const main = document.querySelector("main");

    const p = document.createElement("p");

    const genre = movie.genres.map((item) => {
      return item.name;
    });

    p.textContent = "Genre " + genre.join(", ");

    const h1 = document.createElement("h1");

    const title = movie.title;

    h1.textContent = title;

    const pRate = document.createElement("p");
    const rate = movie.vote_average;

    pRate.textContent = "Ratting " + rate;

    main.append(img, title, p, pRate);
    // console.log(genre);
  } catch (error) {
    console.log(error);
  }
};

getMovie(asal);

// <img src="${movie.poster_path}" />

// movieBox.innerHTML = `
// <h2>${movie.title}</h2>
// <img src="https://api.themoviedb.org/3/movie/${movie.poster_path}/images" />
// <p><b>Release:</b> ${movie.release_date}</p>
// <p><b>Rating:</b> ${movie.vote_average}</p>
// <p>${movie.overview}</p>
// `;
