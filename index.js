const dropMenu = document.getElementById("drop__menu");
const Menu = document.getElementById("nav__menu");

dropMenu.addEventListener("click", function(){
   Menu.classList.toggle("block");
  if (Menu.classList.contains("block")) {
    dropMenu.src = "../img/down.svg"; 
   
  } else {
    dropMenu.src = "../img/up.svg"; 
  }
});


let result = document.getElementById("results");
let calculation = document.getElementById("calculation");
let buttons = Array.from(document.getElementsByClassName("cal__btns"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText.trim(); 
        switch(value) {
            case "C":
                calculation.innerText = "";
                break;
            case "=":
                try {
                    result.innerText = eval(calculation.innerText); 
                } catch {
                    result.innerText = "Error";
                }
                break;
            default:
                calculation.innerText += value; 
        }
    });
});
