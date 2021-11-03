function append(operand) {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + operand;
}

function deleteAll() {
    document.getElementById('result').innerHTML = "";
}

function finalResult() {
    let result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }
    else {
        document.getElementById('result').innerHTML = "Input the desired problem for a solution."
    }
}