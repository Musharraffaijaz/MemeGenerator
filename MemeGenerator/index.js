const meme = document.getElementById('meme');
const title = document.getElementById('title');
let btn = document.getElementById('btn');

//API link/URL
const URL = 'https://meme-api.com/gimme/';

//Array of subreddits
const subReddits = ['catmemes', 'wholesomemes', 'dogmemes', 'me_irl'];

const getMeme = () => {

    //Declaring a Random subReddit to concatenate with the URL
    let randomSubReddit = subReddits[Math.floor(Math.random() * subReddits.length)];

    //Fethching data from api
    fetch(URL + randomSubReddit).then((data) => data.json()).then((item) => {
        console.log(item);

        //Declaring a variable which indicates a new image generated
        let memeImg = new Image();

        //using the onload method, and when the meme generates it run the code to change the title and src of the image tag
        memeImg.onload = () => {
            meme.src = item.url;
            title.innerHTML = item.title
        }
        title.innerHTML = item.title
        meme.src = item.url;
    })

}
btn.addEventListener('click', getMeme);
window.addEventListener('load', getMeme)
