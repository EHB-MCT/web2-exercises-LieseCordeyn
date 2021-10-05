"use strict"

import Team from './Team.js';

let list = [];
let pokemons = [];

const pokemon = {
    initfield() {
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(resp => resp.json())
            .then(data => {
                list = data.results;

                list.forEach(poke => {
                    fetch(poke.url)
                        .then(resp => resp.json())
                        .then(pokeObject => {
                            pokemons.push(pokeObject);
                        })
                });
            })

        window.onload = function () {
            setTimeout(pokemon.buildList, 3000);
        }
    },
    buildList() {
        let main = document.getElementById("pokemons");
        let htmlString = ""
        pokemons.sort(function (a, b) {
            return a.id - b.id;
        })
        pokemons.forEach((poke => {
            htmlString += `        <div class="pokemon">
            <img src="${poke.sprites.front_default}" alt="pokemon"
                width="180px">
            <p>#${poke.id}</p>
            <h1>${poke.name}</h1>
            <div class="abilities">`

            for (let i = 0; i < poke.types.length; i++) {
                htmlString += `<h2 id="${poke.types[i].type.name}">${poke.types[i].type.name}</h2>`
            }



            htmlString += `
            </div>
            <button>add to team</button>
        </div>`

        }))

        main.innerHTML = htmlString;
        let myPoke = [pokemons[1].name, pokemons[132].name]
        let team = new Team("Pokemooon", "Liese Cordeyn", myPoke)
        team.describe();
    }


};

pokemon.initfield();