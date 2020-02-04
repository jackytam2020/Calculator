
var keys = document.querySelector(".container");
var current_input = document.querySelector(".current-input");
var input_history = document.querySelector(".input-history");
var calculation = "";
var current_number = "";
var inputed_number = "";
var result = "";


keys.addEventListener("click", x => {
    if(x.target.matches('button')){
        const key = x.target
        const action = key.dataset.action
        const keyContent = key.textContent
        var value_current_input = current_input.textContent
        
        if (!action) {
            console.log('number key!')
            if(value_current_input === '0'){
                current_input.textContent = keyContent
                calculation += keyContent
            } 
            else {
                current_input.textContent += keyContent
                calculation += keyContent
                console.log(current_input)
            }
        }
        else {
            if ( action === 'add' || action === 'subtract' || action === 'multiply' ||    action === 'divide') {
                console.log('operator key!')
                input_history.innerHTML = current_input.textContent
                current_input.textContent = "0"
                if( action === 'add'){
                   calculation += "+"
                   input_history.innerHTML = calculation
                }
                if( action === 'subtract'){
                    calculation += "-"
                    input_history.innerHTML = calculation
                }
                if( action === 'multiply'){
                    calculation += "*"
                    input_history.innerHTML = calculation
                }
                if( action === 'divide'){
                    calculation += "/"
                    input_history.innerHTML = calculation
                }
            }
        }

        if (action === 'decimal') {
            console.log('decimal key!')
            current_input.textContent += "."
            calculation += "."
        }
          
        if (action === 'clear') {
            console.log('clear key!')
            current_input.textContent = 0
            calculation = " "
            input_history.textContent = " "
        }
          
        if (action === 'calculate') {
            console.log('equal key!')
            calculate()
            input_history.textContent = " "
            calculation = result
        }
        if (action === 'delete') {
            console.log('delete!')
            current_input.textContent = current_input.textContent.substring(0,current_input.textContent.length -1)
            calculation = calculation.substring(0,calculation.length -1)
            if(current_input.textContent.length < 1){
                current_input.textContent = "0"
            }
        }
    }
})

function calculate(){
    
    result = eval(calculation);
    if(!Number.isInteger(result)){
        console.log("decimal")
        result = eval(calculation).toFixed(2);
    }

    current_input.textContent = result;
}


