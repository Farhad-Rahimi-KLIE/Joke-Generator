const jokecontainer = document.getElementById('joke');
const button = document.getElementById('btn');
const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

const getjoke = async ()=>{
    await fetch(url).then((response)=>{
        jokecontainer.classList.remove('fade')
        return response.json();
    }).then((data)=>{
        jokecontainer.textContent = `${data.joke}`;
        jokecontainer.classList.add('fade');
    })
}
button.addEventListener('click',getjoke);
getjoke();