function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".layers-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var tabs = document.getElementsByClassName("tabs");
var tabContents = document.getElementsByClassName("tabs-content");

function openTab(tabID){
    for(tab of tabs){
        tab.classList.remove("active-tab");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-tab");
    document.getElementById(tabID).classList.add("active-content");
} 