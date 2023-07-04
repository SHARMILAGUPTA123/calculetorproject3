
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.getElementById("buttons");
    
    buttons.addEventListener("click", function(event) {
      const clickedElement = event.target;
      const buttonText = clickedElement.textContent;
  
      if (buttonText === "=") {
        calculateResult();
      } else if (buttonText === "C") {
        clearDisplay();
      } else if (buttonText==="delete"){
        deletedisplay();
       
      }else 
        updateDisplay(buttonText);{
      }

    });
    
    function updateDisplay(value) {
      display.value += value;
    }
    
    function calculateResult() {
      const expression = display.value;
      
      try {
        const result = eval(expression);
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    }
    
    function clearDisplay() {
      display.value = "";
    }
  });
  