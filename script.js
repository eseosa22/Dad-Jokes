const jokeEl = document.getElementById("joke")
const jokebtn = document.getElementById('jokebtn')


jokebtn.addEventListener('click', generateJoke)

generateJoke()


// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
            headers: {
                'Accept': 'application/json'
            }
        }

   const response = await fetch('https://icanhazdadjoke.com', config)
    
   const data = await response.json()

   jokeEl.innerHTML = data.joke
}

// USING .THEN()
// function generateJoke() {
//     const config = {
//             headers: {
//                 'Accept': 'application/json'
//             }
//         }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }