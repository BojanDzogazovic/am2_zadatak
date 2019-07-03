//vars
let burger = document.querySelector(".hamburger");
let links = document.querySelector(".links");
let linksNode = document.querySelectorAll(".link");
let linksArr = Array.prototype.slice.call(linksNode);
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let partners = document.querySelector(".partners");
/* let inputNodes = document.querySelectorAll(".forminput");
let inputFieldsArr = Array.prototype.slice.call(inputNodes);
let placeholdersNodes = document.querySelectorAll(".placeholdertitle");
let placeholdersArr = Array.prototype.slice.call(placeholdersNodes); */
let nameInput = document.querySelector(".nameinput");
let mailInput = document.querySelector(".mailinput");
let messageInput = document.querySelector(".messageinput");
let plname = document.getElementById("plname");
let plemail = document.getElementById("plemail");
let plmessage = document.getElementById("plmessage");



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
nameInput.addEventListener("focus", ()=>{
    plname.style.marginBottom = "-25px";
});
mailInput.addEventListener("focus", ()=>{
    plemail.style.marginBottom = "-25px";
    console.log(123);
});
messageInput.addEventListener("focus", ()=>{
    plmessage.style.marginBottom = "0px";
});


nameInput.addEventListener("focusout", ()=>{
    plname.style.marginBottom = "-45px";
});
mailInput.addEventListener("focusout", ()=>{
    plemail.style.marginBottom = "-45px";
});
messageInput.addEventListener("focusout", ()=>{
    plmessage.style.marginBottom = "-25px";
});


/* inputFieldsArr.forEach(field => {
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
}); */





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
