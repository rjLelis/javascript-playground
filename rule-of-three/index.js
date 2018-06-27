function calculate(){
    let ifNumber = document.getElementById("if").value;
    if(isEmpty(ifNumber)){
        document.getElementById('result').innerHTML = 'That number is required for the calculation';
        return false;
    } else if(isNegative(ifNumber)){
        document.getElementById('result').innerHTML = 'That number must positive for the calculation';
        return false;
    }
    let isNumber = document.getElementById("is").value;
    let thenNumber = document.getElementById("then").value;

    let result = (isNumber * thenNumber) /ifNumber;

    document.getElementById("result").innerHTML = `${result}%`;
}

function isEmpty(number){
    return number == '';
}

function isNegative(number){
    return number <= 0;
}