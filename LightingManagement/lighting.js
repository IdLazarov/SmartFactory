const light1Button = document.getElementById("lighter1-button");
const light2Button = document.getElementById("lighter2-button");
const light3Button = document.getElementById("lighter3-button");
const light4Button = document.getElementById("lighter4-button");
const theImage1 = document.getElementById("the-image1");
const theImage2 = document.getElementById("the-image2");
const theImage3 = document.getElementById("the-image3");
const theImage4 = document.getElementById("the-image4");


let toggled1 = false;
let toggled2 = false;
let toggled3 = false;
let toggled4 = false;

function stopLighting1() {
    
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
function stopLighting2() {
    
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
function stopLighting3() {
    
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
function stopLighting4() {
    
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

light1Button.addEventListener("click", stopLighting1);
light2Button.addEventListener("click", stopLighting2);
light3Button.addEventListener("click", stopLighting3);
light4Button.addEventListener("click", stopLighting4);