function compareNames() {
    let name1 = document.querySelector("#name1").value.toLowerCase().trim();
    let name2 = document.querySelector("#name2").value.toLowerCase().trim();
    
    let solution;
    // checks if there is nothing in the input, if the input is a number, or if the inputs equal each other
    if (name1 === "" || name2 === "") {
        solution = "Invalid: you have to enter something";
        // alert("Invalid: you have to enter something")
        // would this be better for input validation ? 
    } else if (!isNaN(name1) || !isNaN(name2)) {
        solution = "Invalid: Integers not allowed";
    } else {
        if (name1 === name2) {
            solution = "Same";
        } else {
            solution = "Different";
        }
    }
    

    document.querySelector("#compareNamesResult").innerHTML = solution;

}

function resetButton(){ 
    let clearField = "";
    document.querySelector("#compareNamesResult").innerHTML = clearField;
}


function compareNumbers() {
    let num1 = document.querySelector("#num1").value.trim();
    let num2 = document.querySelector("#num2").value.trim();

    let numberSolution;

    // checks if there is nothing in the input, if the input is a string and the relation of the inputs. 
    if (num1 === "" || num2 === "") {
        numberSolution = "Invalid: you have to enter something"
    } else if (isNaN(num1) || isNaN(num2)) {
        numberSolution = "Invalid: needs to be an Integer"
    } else if (num1 == num2) {
        numberSolution = "same"
    } else if (num1 < num2) {
        numberSolution = "Number Two Is Greater Than Number One"
    } else if (num1 > num2) {
        numberSolution = "Number One Is Greater Than Number Two"
    }

    document.querySelector('#CompareNumberResult').innerHTML = numberSolution;
}

function resetButton2(){ 
    let clearField = "";
    document.querySelector("#CompareNumberResult").innerHTML = clearField;
}