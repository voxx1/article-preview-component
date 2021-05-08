const button1 = document.getElementById("share-button1");
const button2 = document.getElementById("share-button2");
let togglebutton = false
changeClass = () => {
    button1.addEventListener("click", () => {
        if (togglebutton === false) {
        document.getElementById("share").style.display="flex";
        document.getElementById("details").style.display="none";
        togglebutton = true;
        } 
    })
    button2.addEventListener("click", () => {
        if (togglebutton === true) {
        document.getElementById("share").style.display="none";
        document.getElementById("details").style.display="flex";
        togglebutton = false;
        } 
    })}
changeClass();




