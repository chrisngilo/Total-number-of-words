document.getElementById('button').addEventListener("click", function() {
var textArea = document.getElementById('textArea').value;
var spaces = 1;
var sentences = 0;
var words = 0;
var averageWords = 0;

for (var i = 0; i < textArea.length; i++) {
    // if textArea[i] does it equal " "
    if (textArea[i] == " ") {
        spaces++;
        words++;
    }
    if (textArea[i] == ".") {
        sentences++;
        words++;
    }
    if (textArea[i] == "?") {
        sentences++;
        words++;

    }
    if (textArea[i] == "!") {
        sentences++;
        words++;
    }
   
    // if statement checking for a ? AND an if statement checking for a !
    averageWords = words / sentences;
}

// document.getElementByID() + innerHTML to target the id of spaces
document.getElementById("spaces").innerHTML = "Number of espace equal: " + spaces + " ";

//document.getElementByID() + innerHTML to target the id of words
document.getElementById("words").innerHTML = "Number of words equal: " + words + " ";

//document.getElementByID() + innerHTML to target the id of sentences
document.getElementById("sentences").innerHTML = "Total number of sentence equal: " + sentences + " ";

// document.getElementByID() + innerHTML to target the id of averageWords
document.getElementById("averageWords").innerHTML = "The avarage number of words equal: " + averageWords + " ";

});