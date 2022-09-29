let wordBank =[]

let startBtn = document.getElementById('start-btn')
let wbBtn = document.getElementById('wb=btn')


// set up home screen
// function to choose random number between 5 & 9

let storedWords =[];
var randomNumber = Math.floor(Math.random() * 5)+5;
console.log(randomNumber)
// set up API fetch for random word generator - https://random-word-api.herokuapp.com/word?length=
function wordGen(){
fetch(`https://random-word-api.herokuapp.com/word?length=${randomNumber}`)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data)
    console.log(data[0])
    let ranWord = data[0]
    console.log(ranWord)
   // check word bank to see if word alread exists, refetch if it does, else continue
    if (wordBank.includes(ranWord)){
        wordGen()
    }
    else {getHints(ranWord)}
})}

//API fetch for Dictionary with that word - 
function getHints(ranWord){
    fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${ranWord}?key=443eb124-d026-41e8-a7c7-3e38052485a4`)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data)
    console.log(data.length)
    // makes sure it is a word with usable values in the dictionary
    if (data.length>10){
        wordGen()
    }
    else {
        // parse data into hints and choose one from each array of synonyms and antonyms
        // makes sureall parts of word are taken from same usage
        let wordCat = Math.floor(Math.random() * data.length)
        let hintDef = "Short Definition: " + data[wordCat].shortdef
        let hintSyns = data[wordCat].meta.syns[Math.floor(Math.random()*this.length)]
        console.log(hintSyns)
        let synOne =  "Synonym: " + hintSyns[Math.floor(Math.random() * hintSyns.length)]
        // runs only if word has antonyms
        if (data[wordCat].meta.ants.length>0){
             let hintAnts =data[wordCat].meta.ants[Math.floor(Math.random()*this.length)]
             console.log(hintAnts)
             let antOne =  "Antonym: " + hintAnts[Math.floor(Math.random() * hintAnts.length)]
             console.log(antOne)
            }
        let speechPart = "Part-of-speech: " + data[wordCat].fl
        console.log(speechPart)  
        console.log(synOne)
        console.log(hintDef)
    }
    })}

    



wordGen()
// check word bank to see if word alread exists, refetch if it does, else continue
// set up API fetch for Dictionary with that word - 
// function to create appropriate number of blank spaces based on word picked
// function to pull clue elements from the word & store clue elements
// function to handle guess input and reveal letters as guessed
// function to reveal final answer on win or loss
// function to clear hint and guess area and replace with definition etc.
// function to localstorage.setItem word bank (array)
// function to get next clue after wrong guess or clue request
// function to loop back and pick new word
// function to update stats
// function to change location to wordbank.html



// with event listeners for start game and word bank
// startBtn.addEventListener('click', startGame);
// wbBtn.addEventListener('click', openWB)


// Local Storage
function storeWords() {

}
