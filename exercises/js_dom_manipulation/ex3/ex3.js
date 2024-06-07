// https://github.com/public-apis/public-apis? 
// Alternative APIs

console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("#enter")

const input = document.querySelector("#input")

const img = document.querySelector("#img")

button.addEventListener("click", () => {
    console.log(input.value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            img.src = data.sprites.front_default;
        })
})

