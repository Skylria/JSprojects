const btn_decrease = document.getElementById("decrease");
const btn_increase = document.getElementById("increase");
const btn_reset = document.getElementById("reset");
const counter = document.querySelector(".counter");
let number = 0;

btn_decrease.addEventListener('click', function(){
    number-=1
    counter.textContent = number;
    if (number < 0){
        counter.style.color = 'red';
    }
})

btn_increase.addEventListener('click', function(){
    number+=1
    counter.textContent = number;
    if (number > 0){
        counter.style.color = 'green';
    }
})

btn_reset.addEventListener('click', function(){
    number = 0
    counter.textContent = number;
})