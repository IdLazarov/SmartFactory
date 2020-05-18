const heatingButton = document.getElementById("heating-manager");
const lightingButton = document.getElementById("lighting-manager");
const statisticsButton = document.getElementById("production-stats");

heatingButton.onclick = () =>{
    window.location.href = "../HeatingManagement/heatingManage.html"
};

lightingButton.onclick = () =>{
    window.location.href = "../LightingManagement/lightingManagement.html"
};

statisticsButton.onclick = () =>{
    window.location.href = "../ProductionStatistics/statistics.html"
};