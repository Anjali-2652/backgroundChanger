const teal = document.querySelector('.box1')
const aqua = document.querySelector('.box2')
const brown = document.querySelector('.box3')
const crimson = document.querySelector('.box4')



teal.addEventListener('click',function(){
    document.body.style.backgroundColor = "teal";
})
aqua.addEventListener('click',function(){
    document.body.style.backgroundColor = "aqua";
})
brown.addEventListener('click',function(){
    document.body.style.backgroundColor = "rgb(199,125,125)";
})
crimson.addEventListener('click',function(){
    document.body.style.backgroundColor = "crimson";
})