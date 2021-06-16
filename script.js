var transl = document.querySelector("#btn-translate");
var textspace= document.querySelector("#textSpaceS");
var trtext= document.querySelector('#trtext')


var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}


function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
};


function clickHandler(){
    var inputText = textspace.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            trtext.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

transl.addEventListener("click",clickHandler);