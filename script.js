function display(val){

    document.getElementById('result').value += val

    return val

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
//This function is called when the user clicks on the C or the clear button. 

function clearScreen(){

    document.getElementById('result').value = ''

}

// The value of the result is set to an empty string. 