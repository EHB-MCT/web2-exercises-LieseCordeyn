"use strict";

let dataMovie = "";
let runTime = 0;

window.onload = function () {

    document.getElementById("searchform").addEventListener('submit', e => {
        e.preventDefault();
        let title = document.getElementById('inputTitle').value;
        fetchMovie(title);
    })
}

async function fetchMovie(title) {
/* fetch in fetch https://www.omdbapi.com/?t=${title}&apikey=a6cb6652
               htmlString += `     <div class="card mb-3" style="max-width: 540px;" >
                <div class="row no-gutters">
        <div class="col-md-4">
          <img src=${x.Poster} class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title: ${x.Title}</h5>
            <p class="card-text">Year: ${x.Year}</p>
            <p class="card-text">Director: ${x.Director}</p>
            <p class="card-text" id="runtime">Runtime: ${x.Runtime}</p>
            <p class="card-text">Plot: ${x.Plot}</p>
            <button class="btn btn-primary mb-2" id="add" value="${x.Runtime}">add movie to timer</button>
          </div>
        </div>
        </div>
        </div>

        Everytime you press key of toetsenbord get value out of searchbar
        limit to 10 movies
        `*/
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=a6cb6652`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.Search)
            dataMovie = data.Search;
            let htmlString = ""
            let content = document.getElementById("data");
            dataMovie.forEach(x => {
                
            });

            content.innerHTML = htmlString;

        })
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise;
    console.log(result)
    addTimer();

}

function addTimer() {
    document.getElementById("add").addEventListener("click", e => {
        e.preventDefault();
        let num = parseInt(document.getElementById("add").value);
        runTime += num
        document.getElementById("timer").innerHTML = `<p> Total movietime = ${runTime}min`
    })
}