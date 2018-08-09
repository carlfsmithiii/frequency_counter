document.getElementById("countButton").onclick = function() {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    const letterCounts = {};
    fillCountObject(letterCounts, typedText);
    fillDiv('lettersDiv', letterCounts);

    const words = typedText.split(/\s/);
    const wordCounts = {};
    fillCountObject(wordCounts, words);
    fillDiv('wordsDiv', wordCounts);
    
    function fillDiv(divId, contents) {
        for (element in contents) {
            const span = document.createElement("span");
            const textContent = document.createTextNode('"' + element + "\": " + contents[element] + ", ");
            span.appendChild(textContent);
            document.getElementById(divId).appendChild(span);
        }
    }
    
    function fillCountObject(countHoldingObject, elementsToCount) {
        for (let i = 0; i < elementsToCount.length; i++) {
            const currentElement = elementsToCount[i];
            if (countHoldingObject[currentElement] === undefined) {
                countHoldingObject[currentElement] = 1;
            } else {
                countHoldingObject[currentElement]++;
            }
        }
    }
}

document.getElementById("clear").onclick = function() {
    document.getElementById("lettersDiv").textContent = '';
    document.getElementById("wordsDiv").textContent = "";
    document.getElementById("textInput").value = "";
}