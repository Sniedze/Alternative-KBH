
let audio =document.querySelector("#my_audio");

audio.play();







function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}





var vid = document.getElementById("bgvid");


if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
}





function vidFade() {
  vid.classList.add("stopfade");
}
vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
// to capture IE10
vidFade();
});

$('.speaker').click(function(e) {
  e.preventDefault();

	$(this).toggleClass('mute');
});

