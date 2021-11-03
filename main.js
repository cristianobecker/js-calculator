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

/* note to come back to this later and replace eval with a more complex 'function' because of its security issues. as this code was rewritten more than one time, it is crucial to 'polish' it and fix any ocurring issues due to expressions that can lead to misevents.
that said,
this is NOT a finished code. please be mindful of that when reading it. as a work in progress, there will be future changes for a better final product. thank you very much.*/