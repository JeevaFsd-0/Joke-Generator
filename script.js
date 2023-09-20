const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

function generateJoke (){
    const config = {
        headers:{
            Accept:"application/json",
        },
    };

    fetch ("https://icanhazdadjoke.com/",config)
    .then((res)=> {
        return res.json();
    })
    .then((data)=>{
        jokeEl.innerHTML =data.joke;
    })
    .catch ((err)=>{
        console.log(err);
    });
} 
    
generateJoke ();

jokeBtn.addEventListener("click",generateJoke);