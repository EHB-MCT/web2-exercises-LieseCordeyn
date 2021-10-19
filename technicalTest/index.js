"use strict"

let htmlString = ""

window.onload = function () {
    let genre = "horror";

    fetch(`https://openlibrary.org/subjects/${genre}.json`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.works)

            data.works.forEach(book => {
                htmlString += `<div> <p> ${book.title} </p></div>`

            });

            document.getElementById("content").innerHTML = htmlString;
        })
}