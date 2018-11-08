const clueDiv = document.querySelector("#clue"),
    messageDiv = document.querySelector("#message"),
    guessWordDiv = document.querySelector("#guessWord"),
    chanceDiv = document.querySelector("#chancesLeft");
let chancesLeft = 5;

 chanceDiv.innerHTML = `You have ${chancesLeft} chances left.`
//create an array of words
const words = ['ROCKY', 'NINTENDO', 'PHILADELPHIA',
            'PARIS', 'JAVASCRIPT', 'YOUTUBE','TOKYO', 
            'STARBUCKS','CHILDREN','GOOGLE', 'DICTIONARY','SCRABBLE',
            'BLOCKBUSTER', 'SELTZER', 'COFFEE','CYCLING', 'EGYPT', 
            'BLIZZARD'];

//pick a random word
const word = words[Math.floor(Math.random()* words.length)];

const clue = {
    ROCKY: 'Movie',
    NINTENDO: 'Classic Video Game',
    PHILADELPHIA: 'City',
    PARIS: 'European City',
    JAVASCRIPT: 'The language of the web',
    YOUTUBE: 'A Website',
    TOKYO: 'Asian City',
    STARBUCKS: 'Get Some Coffee',
    CHILDREN: 'Little People',
    GOOGLE: 'Look It Up',
    DICTIONARY: 'Word of the day',
    SCRABBLE: 'Board Game',
    BLOCKBUSTER: 'A Hit Movie',
    SELTZER: 'Refreshing',
    COFFEE: 'Could be hot',
    CYCLING: 'Two Wheels',
    EGYPT: 'Pyramids',
    BLIZZARD: 'A Cold One'

}
//this labels a clue from up above to the randomly generated word
clueDiv.innerHTML = `Clue: ${clue[word]}` 
/*This is event listen to letter buttons and call play function inside.
it also grays out the button and they are unable to select it again after it has been
used. found this on stackoverflow, couldnt have done it with out it.*/
window.onload = ()=> {
	var letters = document.querySelector("#alphabet").children
	for (x of letters ) {
    x.addEventListener("click", function(e){ 
    	e.target.disabled = 'true'
        playGame(this.innerText) //grabs the inner text of this button and passes it to the function down below.

    })
  }
}

/* create an empty array  fill it with
underscores to match the number of letters in the word. */
const answerArray = [];
//replace letter with underscores at each index.
for (let i = 0; i < word.length; i++) {
    answerArray[i] ='_';
}

//replace the inner html with an empty array of underscores. 
guessWordDiv.innerHTML = answerArray.join(' ')

let remainingLetters = word.length;
/*input is from above inner text */
const playGame = (input)=> {

        //the game loop
    if (remainingLetters > 0 ){
        let foundMatch = false;
            for (let i = 0; i <word.length; i++){
                if (word[i]=== input) {
                 foundMatch = true;
                 answerArray[i] = input;
                remainingLetters--;
                 }
                if (remainingLetters === 0){
                 messageDiv.innerHTML ="Winner, Winner, Chicken Dinner!"
                 clueDiv.innerHTML ="Thanks for playing!"
                setTimeout(()=> {
                window.location.reload()
                 },5000)
            }      
        } if (!foundMatch) {
        chancesLeft--;
        chanceDiv.innerHTML = `You have ${chancesLeft} chances left.`; 
        }
        if (chancesLeft == 0){
        messageDiv.innerHTML = "You lost! Try again in a second."
        setTimeout(() => {
            window.location.reload()
           },1000) 
        } 
    }
    guessWordDiv.innerHTML =answerArray.join('')
}