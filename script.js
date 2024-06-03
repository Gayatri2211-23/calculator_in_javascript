var display = document.getElementById("display");
var bt = document.querySelectorAll("button");

let string = "";
let arr = Array.from(bt);

display.addEventListener("keydown",function(event){
    if (!(!isNaN(event.key) || ['+', '-', '*', '/', 'Enter', 'Backspace'].includes(event.key))) {
        display.value = "INVALID INPUT";
        string = "";
    } else if (event.key == "Enter") {
        string = eval(string).toString(); 
        display.value = string;
    } else if (event.key == "Backspace") {
        string = string.substring(0, string.length - 1);
    } else {
        string += event.key; 
    }
})



arr.forEach(btn => {

    btn.addEventListener("click", function (e) {
        console.log(e.target.value);
        if (e.target.innerHTML == '=') {
            string = eval(string); 
            display.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = " ";
            display.value = string+" ";
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);    
            display.value = string;
        }
        else {
            
            string += e.target.value;
            console.log(string);
            display.value = string;
        }
       
    });
});
 
 
