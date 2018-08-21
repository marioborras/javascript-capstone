
//create an array of words
let words = ['INCEPTION', 'DOOM', 'PHILADELPHIA',
            'PARIS', 'JAVASCRIPT', 'YOUTUBE','TOKYO', 
            'STARBUCKS','CHILDREN','GOOGLE', 'DICTIONARY','SCRABBLE',
            'BLOCKBUSTER', 'SELTZER', 'COFFEE','CYCLING', 'EGYPT', 
            'BLIZZARD'];

//pick a random word
let word = words[Math.floor(Math.random()* words.length)];

let clue = {
    INCEPTION: 'Movie',
    DOOM: 'Classic Video Game',
    PHILADELPHIA: 'City',
    PARIS: 'European City',
    JAVASCRIPT: 'The language of the web',
    YOUTUBE: 'A Website',
    TOKYO: 'Asian City',
    STARBUCKS: 'Get Some Coffee',
    CHILDREN: 'Little People',
    GOOGLE: 'Look it up',
    DICTIONARY: 'Word of the day',
    SCRABBLE: 'Board Game',
    BLOCKBUSTER: 'A hit movie',
    SELTZER: 'Refreshing',
    COFFEE: 'Could be hot',
    CYCLING: 'Two wheels',
    EGYPT: 'Pyramids',
    BLIZZARD: 'A cold one'

}
//this labels a clue from up above to the randomly generated word
document.querySelector("#clue").innerHTML = `Clue: ${clue[word]}` 
/*This is event listen to letter buttons and call play function inside.
it also grays out the button and they are unable to select it again after it has been
used. found this on stackoverflow, couldnt have done it with out it.*/
window.onload = function () {
	var letters = document.querySelector("#alphabet").children
	for (x of letters ) {
    x.addEventListener("click", function(select){ 
    	select.target.disabled = 'true'
        playGame(this.innerText) //grabs the inner text of this button and passes it to the function down below.

    })
  }
}

/* create an empty array  fill it with
underscores to match the number of letters in the word. */
let answerArray = [];
//replace letter with underscores at each index.
for (var i = 0; i < word.length; i++) {
    answerArray[i] ='_';
}

//replace the inner html with an empty array of underscores. 
document.querySelector("#guessWord").innerHTML = answerArray.join(' ')

let remainingLetters = word.length;

/*input is from above inner text */
function playGame(input){

//the game loop
    if (remainingLetters > 0 ){
     
    for (let i = 0; i <word.length; i++){
       if (word[i]=== input) {
           answerArray[i] = input
           remainingLetters--
       }
        if (remainingLetters === 0){
           document.querySelector("#message").innerHTML ="Winner, Winner, Chicken Dinner!"
           document.querySelector("#clue").innerHTML ="Thanks for playing!"
           setTimeout(function() {
            window.location.reload()
           },5000)
        }
    }
    }
    document.querySelector("#guessWord").innerHTML =answerArray.join('')

}