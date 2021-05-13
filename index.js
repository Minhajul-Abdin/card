const jokes = document.getElementById('jokes')
const nextbtn = document.getElementById('btn')

const joke = () => {

    const setheader = {
        headers:{
            Accept :"application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setheader)
    .then((res) => res.json() )
    .then((data) => {
        jokes.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
    })
}

nextbtn.addEventListener('click', joke)

joke()