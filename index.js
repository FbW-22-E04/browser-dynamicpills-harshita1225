const movie = document.querySelectorAll("li");
const movieList = document.querySelector("aside");
//const posterList = document.querySelectorAll("article");
//const posterArray = posterList.children;
const movieArray = movieList.children;
const h3 = document.querySelectorAll("h3");
console.log(h3.pa);

movieList.addEventListener("click", function (e) {
  movie.forEach((val) => val.classList.remove("selected"));
  if (e.target.tagName === "LI") {
    e.target.classList.add("selected");
    //console.log(e.target.textContent);
    h3.forEach((value) => {
      value.parentElement.classList.remove("active");
      if (value.textContent === e.target.textContent) {
        value.parentElement.classList.add("active");
      }
    });
  }
});

//console.log(posterArray[0].innerText, movieArray[0].innerText);
