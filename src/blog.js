let btn1 = document.getElementById("btn1");
let text1 = document.getElementById("slg1");
let btn2=document.getElementById("btn2");
let text2 = document.getElementById("slg2");
let btn3=document.getElementById("btn3");
let text3 = document.getElementById("slg3");
let btn4=document.getElementById("btn4");
let text4 = document.getElementById("slg4");
let btn5=document.getElementById("btn5");
let text5 = document.getElementById("slg5");
let btn6=document.getElementById("btn6");
let text6 = document.getElementById("slg6");
let btn7=document.getElementById("btn7");
let text7 = document.getElementById("slg7");
let btnn=document.getElementById("btnn");
 let input=document.getElementById("input");
let feed=document.getElementById("feed")
btn1.addEventListener('click', function(e) {
    text1.classList.toggle("hidden");
});
btn2.addEventListener('click', function(e) {
    text2.classList.toggle("hidden");
});
btn3.addEventListener('click', function(e) {
    text3.classList.toggle("hidden");
});
btn4.addEventListener('click', function(e) {
    text4.classList.toggle("hidden");
});
btn5.addEventListener('click', function(e) {
    text5.classList.toggle("hidden");
});
btn6.addEventListener('click', function(e) {
    text6.classList.toggle("hidden");
});
btn7.addEventListener('click', function(e) {
    text7.classList.toggle("hidden");
});
btnn.addEventListener('click',function(){
    input.classList.add("hidden")
})
btnn.addEventListener('click',function(){
    feed.classList.remove("hidden")

})