

let facebook=document.getElementById("facebook");

let instagram=document.getElementById("instagram");

let youtube = document.getElementById("youtube");

youtube.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/watch?v=B-OBVsaV7A0";
});

instagram.addEventListener('click',function(){
    window.location.href="https://www.instagram.com/?hl=en"
})

facebook.addEventListener('click',function(){
    window.location.href="https://www.facebook.com/"
})

let play=document.getElementById("play");
let ios=document.getElementById("ios");

play.addEventListener('click',function(){
    window.location.href="https://play.google.com/store/games?device=windows"
})

ios.addEventListener('click',function(){
    window.location.href="https://www.apple.com/in/app-store/"
})