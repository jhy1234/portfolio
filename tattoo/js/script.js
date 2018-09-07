var navBut = document.getElementById("navIcon"),
    navMobile = document.getElementById("navMobile"),
    caption = document.getElementById("caption"),
    subscribeOverlay = document.getElementById("subscribeOverlay"),
    subscribeForm = document.getElementById("subscribeForm"),
    subscribeBut = document.getElementById("subscribe"),
    sendBut = document.getElementById("send");

const mq = window.matchMedia("(max-width: 600px)");

navBut.addEventListener("click", function(){
    if(navMobile.style.display != "flex"){
        navMobile.style.display = "flex";
    } else {
        navMobile.style.display = "none";
    }
});

window.onload = function(){
    navMobile.style.display = "none";
}

window.onresize = function(){
    if(!mq.matches){
        navMobile.style.display = "none";
    }
}

subscribeBut.addEventListener("click", function(){
    if(subscribeForm.style.display != "block"){
        subscribeOverlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        subscribeOverlay.style.display = "flex";
        subscribeForm.style.display = "block";
    } else {
        subscribeOverlay.style.backgroundColor = "rgba(0,0,0,0)";
        subscribeOverlay.style.display = "none";
        subscribeForm.style.display = "none";
    }

});

//fake send function, effect only
sendBut.addEventListener("click", function(){
    subscribeOverlay.style.backgroundColor = "rgba(0,0,0,0)";
    subscribeOverlay.style.display = "none";
    subscribeForm.style.display = "none";
});