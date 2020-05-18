const heater1Button = document.getElementById("heater1-button");
const heater2Button = document.getElementById("heater2-button");
const heater3Button = document.getElementById("heater3-button");
const heater4Button = document.getElementById("heater4-button");
const theImage = document.getElementById("the-image");


let stopHeating1 = () => {
    theImage.style.backgroundPosition = "0 -550 -300 -550";
}

heater1Button.onclick = stopHeating1;

