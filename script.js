const input = document.getElementById("input");
const result = document.getElementById("result");

const clearAll = () => {
    input.innerHTML = "";
    result.innerHTML = "";
}

const deleteLast = () => {
    input.innerHTML =  input.innerHTML.slice(0, -1);
}

const addToInput = (el) => {
    result.innerHTML = "";
    input.textContent += el;
}

const addCalc = (el) => {
    const lastItem = input.innerHTML.slice(-1);
    if (!input.innerHTML) {
     alert("Please enter a number first")
    } else if (["/", "*", "-", "+", "."].includes(lastItem)) {
        input.innerHTML = input.innerHTML.slice(0, -1) + el;
     } else {
        input.innerHTML += el;
     }
}

const addDot = () => {
    const inputArr = input.innerHTML.split(/[+\-*/]/);
    const lastPart = inputArr.pop();
    const lastItem = input.innerHTML.slice(-1)
    if (["", "+", "-", "*", "/"].includes(lastItem)) {
        input.innerHTML += "0.";
    } else if (!lastPart.includes(".")) {
        input.innerHTML += ".";
    }
}

const calculate = () => {
    if (!input.innerHTML) {
     alert("Please enter a number first")
    } else {
   try {
       result.innerHTML = eval(input.innerHTML);    
       input.innerHTML = "";
    } catch (error) {
        result.innerHTML = "Please enter a valid Calculation";
        input.innerHTML = "";
    }}
}

const plusMinus = () => {
    try {
    if (!input.innerHTML) {
     alert("Please enter a number first")
    } else {
        const lastItem = input.innerHTML.slice(-1);
        if ([".", "+", "-", "*", "/"].includes(lastItem)) {
            input.innerHTML = eval(input.innerHTML.slice(0, -1)) * -1;
        } else {
            input.innerHTML = eval(input.innerHTML) * -1;
        }
    }
    } catch (error) {
        result.innerHTML = "Please enter a valid Calculation";
        input.innerHTML = "";
    }
}

const percentage = () => {
    try {
        if(!input.innerHTML){
            alert("Please input a number first")
        }

        const inputArr = input.innerHTML.split(/([+*\/-])/);
        const lastNumber = inputArr.pop();
        const lastCalc = inputArr.pop() || "";
        const preLastNumber = inputArr.pop() || ""; 

        if(["+", "-"].includes(lastCalc)) {
           input.innerHTML = inputArr.join("") + preLastNumber + lastCalc + (lastNumber/100)*preLastNumber;
        } else if (["*", "/"].includes(lastCalc) || lastCalc === "") {
            input.innerHTML = inputArr.join("") + preLastNumber + lastCalc + (lastNumber/100);
        }
        
    } catch (error) {
        result.innerHTML = "Please enter a valid Calculation";
        input.innerHTML = "";        
    }
}

/* Percentage à la IRINA
const percentage = () => {
    try {
    const inputArr = input.innerHTML.split("");
    const lastItem = inputArr.slice().pop();
    let inputResultArr;
    if (inputArr.length === 0) {
     alert("Please enter a number first")
    } else if (lastItem === "/" || 
     lastItem === "*" ||
     lastItem === "-" || 
     lastItem === "+" ||
     lastItem === ".") {
        inputArr.pop();
        inputResultArr = inputArr;
     } else {
        inputResultArr = inputArr;
    }

    const revInputArr = inputResultArr.slice().reverse();
    let lastNumberArr = [];
    for(let i = 0; i <= revInputArr.length; i++) {
        if (revInputArr[i] === "/" || 
            revInputArr[i] === "*" ||
            revInputArr[i] === "-" || 
            revInputArr[i] === "+" ) {
                break;
            } else {
                lastNumberArr.unshift(revInputArr[i]);
                inputResultArr.pop();
            }
        }

        const lastNumber = lastNumberArr.join("");
        const lastCalc = inputResultArr.slice().pop();
        const revRestInputArr = inputResultArr.slice().reverse();

        if(lastCalc === "/" || 
            lastCalc === "*" || inputResultArr.length === 0){
            const newInputString = inputResultArr.join("") + (lastNumber/100);
            input.innerHTML =  newInputString;
        } else {
            const preLastNumberArr = [];
            revRestInputArr.shift();

            for(let i = 0; i <= revRestInputArr.length; i++) {
                if (revRestInputArr[i] === "/" || 
                    revRestInputArr[i] === "*" ||
                    revRestInputArr[i] === "-" || 
                    revRestInputArr[i] === "+" ) {
                    break;
                } else {
                    preLastNumberArr.unshift(revRestInputArr[i]);
                }
            }
            const preLastNumber = preLastNumberArr.join("");
            const newNumber = (lastNumber/100)*preLastNumber;
            const newInputString = inputResultArr.join("") + newNumber;
            input.innerHTML = newInputString;
        }
  
} catch (error) {
    result.innerHTML = "Please enter a valid Calculation";
    input.innerHTML = "";
}
} */

  /* DOT Function à la IRINA:
        const inputArr = input.innerHTML.split("");
        const lastItem = inputArr.slice().pop();
        const containsDot = inputArr.slice().includes(".");
        if (inputArr.length === 0) {
         input.innerHTML = "0.";
         result.innerHTML = "";
        } else if (lastItem === "/" || 
            lastItem === "*" ||
            lastItem === "-" || 
            lastItem === "+" ){
                input.innerHTML += "0.";
                return;
        } else if (lastItem === ".") {
            return
        } else if (!containsDot) {
            inputArr.push(el);
            input.innerHTML = inputArr.join("");
            return
        } else {
            const revInput = inputArr.slice().reverse();
            let lastNumber = [];
            for(let i = 0; i <= revInput.length; i++) {
                if (revInput[i] === "/" || 
                    revInput[i] === "*" ||
                    revInput[i] === "-" || 
                    revInput[i] === "+" ) {
                        break;
                    } else {
                        lastNumber.unshift(revInput[i]);
                    }
            }                 
            const lastNumberContainsDot = lastNumber.includes(".");
            if(!lastNumberContainsDot){
                inputArr.push(el);
                input.innerHTML = inputArr.join("");
                return
            } else {
                alert("No dot allowed at this position")
            }
        }*/
