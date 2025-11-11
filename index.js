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
const output = document.getElementById("output");

buttons.map(button => {
    button.addEventListener("click", (e) => {
        // console.log("Hello there am new here please") 
        switch(e.target.innerText) {
            case 'AC':
              calculation.innerText = "";
            // result.innerText = "";
             break;

             case '=':
            result.innerText += e.target.innerText;
              break;
                
            default:
                calculation.value += e.target.innerText;
               
                 
        }

        console.log(calculation);

    });
});
