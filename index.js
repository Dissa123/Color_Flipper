const colors = ["green", "red" , "rgba(133,122,200)","#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',()=>{
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // chnage background color 
    document.body.style.backgroundColor = colors[randomNumber];

    // display the clors arrays color codes one by one
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}