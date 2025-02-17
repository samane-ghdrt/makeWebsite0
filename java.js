// import {createElement,selectedElement} from "./utils/domUtils.js";
// import{getFromLocalStorage,saveToLocalStorage}from "./utils/storageUtils.js";
// const nameEl=document.querySelector(".name");
// const name=getFromLocalStorage();
const selectEL=document.querySelector("#select");
// nameEl.textContent=`hello ${name}`;
const startEl=document.querySelector(".start");
function select() {
    console.log(selectEL.value);
    
    if (selectEL.value === "Easy") {
        window.location.href="gameEasy.html"
    } else  if (selectEL.value === "medium") {
        {
      window.location.href="gameMedium.htm"
        }
    } else if (selectEL.value === "hard") {
         window.location.href="gameHard.html"
    }
}

selectEL.addEventListener("change",select);