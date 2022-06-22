var audio = document.getElementById('audio');
var video = document.getElementById('video');
var enter = document.getElementById('enter');

enter.addEventListener("click", function () {
    enter.style.opacity = 0.1;
    enter.remove();
    video.muted = true;
    video.loop = true;
    video.play();
    audio.volume = 0.4;
    audio.loop = true;
    audio.play();
});