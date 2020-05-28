const heater1Button = document.getElementById("heater1-button");
const heater2Button = document.getElementById("heater2-button");
const heater3Button = document.getElementById("heater3-button");
const heater4Button = document.getElementById("heater4-button");
const theImage1 = document.getElementById("the-image1");
const theImage2 = document.getElementById("the-image2");
const theImage3 = document.getElementById("the-image3");
const theImage4 = document.getElementById("the-image4");


let toggled1 = false;
let toggled2 = false;
let toggled3 = false;
let toggled4 = false;

function stopHeating1() {
    
    if(!toggled1){
        toggled1=true;
        theImage1.style.display = "none";
        return;
    }
    if(toggled1){
        toggled1 = false;
        theImage1.style.display = "grid";
        return;
    }
    
}
function stopHeating2() {
    
    if(!toggled2){
        toggled2=true;
        theImage2.style.display = "none";
        return;
    }
    if(toggled2){
        toggled2 = false;
        theImage2.style.display = "grid";
        return;
    }
}
function stopHeating3() {
    
    if(!toggled3){
        toggled3=true;
        theImage3.style.display = "none";
        return;
    }
    if(toggled3){
        toggled3 = false;
        theImage3.style.display = "grid";
        return;
    }
}
function stopHeating4() {
    
    if(!toggled4){
        toggled4=true;
        theImage4.style.display = "none";
        return;
    }
    if(toggled4){
        toggled4 = false;
        theImage4.style.display = "grid";
        return;
    }
}

heater1Button.addEventListener("click", stopHeating1);
heater2Button.addEventListener("click", stopHeating2);
heater3Button.addEventListener("click", stopHeating3);
heater4Button.addEventListener("click", stopHeating4);

