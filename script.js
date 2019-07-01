//vars
let burger = document.querySelector(".hamburger");
let links = document.querySelector(".links");
let linksNode = document.querySelectorAll(".link");
let linksArr = Array.prototype.slice.call(linksNode);
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let partners = document.querySelector(".partners");
let inputNodes = document.querySelectorAll(".forminput");
let inputFieldsArr = Array.prototype.slice.call(inputNodes);
let placeholdersNodes = document.querySelectorAll(".placeholdertitle");
let placeholdersArr = Array.prototype.slice.call(placeholdersNodes);


//function
function closeSideNav(){
    line1.style.transform = "rotate(0deg)";
    line2.style.display = "block";
    line3.style.transform = "rotate(0deg)";
    line3.style.marginTop = "0px";
    links.classList.remove("side-nav-active");
    linksArr.forEach(link => {
        link.style.animation = "";
    });
}

//events
burger.addEventListener("click", () => {
    if(links.classList.contains("side-nav-active")){
        closeSideNav();
    } else {
        line1.style.transform = "rotate(-45deg)";
        line2.style.display = "none";
        line3.style.transform = "rotate(45deg)";
        line3.style.marginTop = "-8px";
        links.classList.add("side-nav-active"); 
        let delay = 0.2;
        linksArr.forEach(link => {
            link.style.animation = `linksFade 0.5s ease-in-out forwards ${delay}s`;
            delay += 0.2;
            console.log(link);
        });
    }
});

window.onscroll = function(e){
    if(links.classList.contains("side-nav-active")){
        closeSideNav();
    }  
}


//form input effect
inputFieldsArr.forEach(field => {
    field.addEventListener("focus", ()=>{
        placeholdersArr.forEach(placeholder => {
            placeholder.style.marginBottom = "-25px";
        });
    });

    field.addEventListener("focusout", ()=>{
        placeholdersArr.forEach(placeholder => {
            placeholder.style.marginBottom = "-45px";
        });
    });
});


//slick
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows:false,
    centerMode: true,
    centerPadding: "50px",
    mobileFirst: true,
    cssEase: 'linear'
  });


//partners
partners.addEventListener("mouseover", (e)=>{
    if(e.target.classList.contains("microsoft")){
        e.target.src = "img/microsofthover.png";
        e.target.className = "microsofthover";
    }
    if(e.target.classList.contains("envato")){
        e.target.src = "img/envatohover.png";
        e.target.className = "envatohover";
    }
    if(e.target.classList.contains("dribbble")){
        e.target.src = "img/dribbblehover.png";
        e.target.className = "dribbblehover";
    }
    if(e.target.classList.contains("spotify")){
        e.target.src = "img/spotifyhover.png";
        e.target.className = "spotifyhover";
    }
    if(e.target.classList.contains("google")){
        e.target.src = "img/googlehover.png";
        e.target.className = "googlehover";
    }

});

partners.addEventListener("mouseout", (e)=>{
    if(e.target.classList.contains("microsofthover")){
        e.target.src = "img/microsoft.png";
        e.target.className = "microsoft";
    }
    if(e.target.classList.contains("envatohover")){
        e.target.src = "img/envato.png";
        e.target.className = "envato";
    }
    if(e.target.classList.contains("dribbblehover")){
        e.target.src = "img/dribbble.png";
        e.target.className = "dribbble";
    }
    if(e.target.classList.contains("spotifyhover")){
        e.target.src = "img/spotify.png";
        e.target.className = "spotify";
    }
    if(e.target.classList.contains("googlehover")){
        e.target.src = "img/google.png";
        e.target.className = "google";
    }
});