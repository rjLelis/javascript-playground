function reverseWord(string){
    return string.split("").reverse().join("");
}

function palindrome(){
    const word = document.getElementById("word").value;
    const tested = document.getElementById("tested");
    if(word === reverseWord(word)){
        tested.innerHTML = `The word ${word} is palindrome`;
    } else{
        tested.innerHTML = `The word ${word} isn't palindrome`;
    }
}