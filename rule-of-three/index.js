const calculate = () => {
    let ifNumber = document.getElementById("if").value;
    if(isEmpty(ifNumber)){
        document.getElementById('result').innerHTML = 'The "if" can\'t be empty';
        return false;
    } else if(isNegative(ifNumber)){
        document.getElementById('result').innerHTML = 'The "if" number must positive';
        return false;
    }
    let isNumber = document.getElementById("is").value;
    let thenNumber = document.getElementById("then").value;

    let result = (isNumber * thenNumber) / ifNumber;

    document.getElementById("result").innerHTML = `${result}%`;
}

const isEmpty = (number) => {
    return number === '';
}

const isNegative = (number) =>  {
    return number <= 0;
}