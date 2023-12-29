// Section 1: People counter app and lessons 


// let myAge = 29 
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);




//// Section 1: Build Passenger app
//// Reassigning & incrementing 

// Can reassign the variable by assigning the variable to something else since javascript reads down. So count will now be 3 instead of 5. 

// let count = 5;

// count = count + 1

// console.log(count);


// let bonusPoint = 50;

// bonusPoint = bonusPoint + 100;

// bonusPoint = bonusPoint - 25;

// bonusPoint = bonusPoint + 75;

// console.log(bonusPoint);




//// Section 1: Build Passenger app
////Lesson 7: Adding a button 

// Simply added a button and gave it an id of increment-btn in HTML. 




//// Section 1: Build Passenger app
//// Lesson 8: onclick event listener

// initialize the count as 0 
// listen for the clicks on the increment button 
// increment the count variable when the button is clicked 
// change the count-el in the HTML to reflect the new count




//// Section 1: Build Passenger app
//// Lesson 9: Functions


//  function raceStart(countDown) {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// Setting up the race

// raceStart();

// Go!
// Players running the race
// Race is finished 

// 2nd Race

// raceStart();




// Section 1: Build Passenger app
//// First Function 

// function number() {
//     console.log(42);
// }
// number();


// Create a function that logs out the sum of all the lap times

// let lap1 = 34;
// let lap2 = 33; 
// let lap3 = 36; 
// let sum = lap1 + lap2 + lap3

// function sumLaps() {
//     console.log(sum);
// }
// sumLaps();




//// Section 1: Build Passenger app
//// Function that increments

// let lapsCompleted = 0 

// Create a function that increments the lapsCompleted variable with one 
// Run it three times 

// function completedLaps() {
//     lapsCompleted = lapsCompleted + 1
// };

// completedLaps();
// completedLaps();
// completedLaps();
// console.log(lapsCompleted)




//// Section 1: Build Passenger app
//// Increment on clicks 

// let count = 5
// count = count + 1 
// console.log(count)
// initialize the count as 0 
// listen for the clicks on the increment button 
// increment the count variable when the button is clicked 
// change the count-el in the HTML to reflect the new count

// let count = 0; 

// function increment() {
//     count = count + 1; 
//     console.log('count')
// }




//// Section 1: Build Passenger app
//// Display the count

// change the count-el in the HTML to reflect the new count

// let countEl = document.getElementById("count-el")

// let count = 0; 

// function increment() {
//     count = count + 1; 
//     countEl.innerText = count
//     console.log('count')
// }




//// Section 1: Build Passenger app
//// Document object model

// function save() {
//     console.log(count);
// }




//// Section 1: Build Passenger app
//// String

// let username = 'per'

// create a variable message that stores the string: "you have tree new notifications"

// message = "You have tree new notifications"

// console.log(message + ", " +   username + "!")


// let name = "Jesse";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;
// console.log(myGreeting);




//// Section 1: Build Passenger app
//// Strings vs. Numbers

// let points = 4
// let bonusPoints = '10'

// let totalPoints = points + bonusPoints;

// console.log(totalPoints); // This will log 410, since string always wins in this scenario so essentially we get "4" + "10" = 410. 




//// Section 1: Build Passenger app
//// Lesson 22: Render a welcome message

// Grab the welcom-el paragraph and store it in a variable called welcomEl

// let welcomEl = document.getElementById("welcome-el");

// create 2 variabales (name & greeting) that contains your name and the greeting we want to render on the page 

// let name = "Jesse";
// let greeting = "Hi, welcome back ";

// render the welcome message using welcomEl.innerText 

// welcomEl.innerText = greeting + name; 




//// Section 1: Build Passenger app
//// Lesson 23: Improve the message with string concat 

// let welcomeEl = document.getElementById("welcome-el");

// let name1 = "Jesse,";
// let greeting = "Hi, welcome back ";

// welcomeEl.innerText = greeting + name1; 

// Add an emoji to the end 

// welcomeEl.innerText = welcomeEl.innerText + " this is supposed to be where the emoji goes!" // Emoji's are strings

// This is the short version 

// welcomeEl.innerText += "the emoji goes here" // This will add the emoji on without having to do the first code above, but it's the samething just shorter. 




//// Section 1: Build Passenger app
//// Lesson 24: Use plus equal for count

// let countEl = document.getElementById('count-el')
// let count = 0 

// function increment() {
//     // change this to use the plus equal technique
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }




//// Section 1: Build Passenger app
//// Lesson 25: Create the save feature

// 1. Grab the save-el paragraph and store it in a variable calle saveEl

// let saveEl = document.getElementById("save-el")

// let countEl = document.getElementById('count-el')
// let count = 0 

// function increment() {
//     // change this to use the plus equal technique
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash seperator, i.e 12 - 12 - 12
//     let saveCount = count + " - "  

//     // 3. Render the variable in the saveEl using innerText
//     saveEl.textContent += saveCount
//     console.log(count)
// }





//// Section 1: Build Passenger app
//// Lesson 27: Set the count to 0 

// let saveEl = document.getElementById("save-el")

// let countEl = document.getElementById('count-el')
// let count = 0

// function increment() {
//     // change this to use the plus equal technique
//     count += 1
//     countEl.textContent = count 
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash seperator, i.e 12 - 12 - 12
//      let saveCount = count + " - "  

//    // 3. Render the variable in the saveEl using innerText
//     saveEl.textContent += saveCount
//     countEl.textContent = 0
//     count = 0
//     console.log(count)
// }




//// Section 2: BlackJack Game
//// Lesson 1: Add the first card, second card and sum 

// 1. create two variables, firsCard and secondCard and set their values to a random number between 2 - 11

// 2. create a variable, sum, and set it to the sume of the two cards

// let firsCard = 8
// let secondCard = 5
// let result = firsCard + secondCard

// let sum = result

// console.log(sum);




//// Section 2: BlackJack Game
//// Lesson 2: if...else conditionals

// let firsCard = 10
// let secondCard = 12
// let sum = firsCard + secondCard

// if(sum < 21) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("You Win")
// } else if (sum > 21) {
//     console.log("Looooooooossssseeerrrr!")
// }




//// Section 2: BlackJack Game
//// Lesson 3: first if...else statement 

// check if the person is old enough to enter the nightclub (21)
// log a suitable message to the console in both cases 

// let age = 20

// if (age < 21) {
//     console.log("Woah were are you going? ")
// } else {
//     console.log("Come right on in")
// }

// if less than 21 -> "you can't even get in"
// else "come on in"




//// Section 2: BlackJack Game
//// Lesson 4: if/else..if/else statement

// check if the person is eligible for a birthday from the king (100)

// let age = 100; 

// if (age < 100) {
//     console.log("You are not ready")
// } else if (age === 100) {
//     console.log("You might be old but you can still get it on")
// } else {
//     console.log("You have past that point")
// }

// if less than 100 - not eligible
// else if 100 - birthday
// else - you have already had one




//// Section 2: BlackJack Game
//// Lesson 5: if/else statement for the game 

// let firsCard = 10
// let secondCard = 5
// let sum = firsCard + secondCard

// if (sum <= 20) {
//     console.log("Do you want another card?")
// } else if (sum === 21) {
//     console.log("You Win")
// } else {
//     console.log("Looooooooooooooooossssssssssseeeeeeeeerrrrr")
// }
// if less than or equal to 20 - "Do you want another card?"
// else if exactly 21 - "You win"
// else - "Looooooooossssseeeeeeeerrrrr"




//// Section 2: BlackJack Game
//// Lesson 6: Add the hasBlackJack variable

// let firsCard = 10
// let secondCard = 11
// let sum = firsCard + secondCard
// let hasBlackJack = false // starts out false because you don't start with a blackjack 

// if (sum <= 20) {
//     console.log("Do you want another card?")
// } else if (sum === 21) {
//     console.log("You Win")
//     hasBlackJack = true
// } else {
//     console.log("Looooooooooooooooossssssssssseeeeeeeeerrrrr")
// }


// console.log(hasBlackJack)




//// Section 2: BlackJack Game
//// Lesson 7: Add the isAlive variable

// create a variable called isAlive and assign it to true
// flip its value to false in the appropriate block

// let firsCard = 10
// let secondCard = 11
// let sum = firsCard + secondCard
// let hasBlackJack = false // starts out false because you don't start with a blackjack 
// let isAlive = true

// if (sum <= 20) {
//     console.log("Do you want another card?")
// } else if (sum === 21) {
//     console.log("You Win")
//     hasBlackJack = true
// } else {
//     console.log("Looooooooooooooooossssssssssseeeeeeeeerrrrr")
//     isAlive = false 
// }


// console.log(isAlive)




//// Section 2: BlackJack Game
//// Lesson 8: practice boolean conditions

// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0 ) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false




//// Section 2: BlackJack Game
//// Lesson 9: Adding the message variable 

// let firsCard = 10
// let secondCard = 11
// let sum = firsCard + secondCard
// let hasBlackJack = false // starts out false because you don't start with a blackjack 
// let isAlive = true
// let message = ""
// // declare a variable called message and assign its value to an empty string

// // reassign the message variable to the string we're loggin out 

// if (sum <= 20) {
//     console.log("Do you want another card?")
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     console.log("Looooooooooooooooossssssssssseeeeeeeeerrrrr")
//     isAlive = false 
// }


// console.log(message)




//// Section 2: BlackJack Game
//// Lesson 10: Link to stylesheet

// did this in the html file




//// Section 2: BlackJack Game
//// Lesson 11: Add basic styling

// added styling in css




//// Section 2: BlackJack Game
//// Lesson 12: Make the start button work 


// create a startGame() function. move the conditional below inside the body of the function



// let firsCard = 10
// let secondCard = 11
// let sum = firsCard + secondCard
// let hasBlackJack = false // starts out false because you don't start with a blackjack 
// let isAlive = true
// let message = ""
// declare a variable called message and assign its value to an empty string

// reassign the message variable to the string we're loggin out 



// function startGame() {

// if (sum <= 20) {
//     console.log("Do you want another card?")
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     console.log("Looooooooooooooooossssssssssseeeeeeeeerrrrr")
//     isAlive = false 
// }


// console.log(message)
// }




//// Section 2: BlackJack Game
//// Lesson 13: Display the message 

// let firsCard = 10
// let secondCard = 5
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")



// function startGame() {

// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }




//// Section 2: BlackJack Game
//// Lesson 14: Display the sum

// let firsCard = 10
// let secondCard = 5
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// function startGame() {
// cardsEl.textContent = "Cards: " + firsCard
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }





//// Section 2: BlackJack Game
//// Lesson 15: Display the cards

// let firsCard = 10
// let secondCard = 5
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// function startGame() {
// cardsEl.textContent = "Cards: " + firsCard +  " & " + secondCard // the "" add spacing between the first and second card
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }




//// Section 2: BlackJack Game
//// Lesson 16: New Card button 

// let firsCard = 10
// let secondCard = 5
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// function startGame() {
// cardsEl.textContent = "Cards: " + firsCard +  " & " + secondCard // the "" add spacing between the first and second card
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
// }




//// Section 2: BlackJack Game
//// Lesson 17: Add to sum when newCard is clicked

// let firsCard = 10
// let secondCard = 5
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// function startGame() {
// cardsEl.textContent = "Cards: " + firsCard +  " & " + secondCard
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = 2
//     sum += card
//     startGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 18: Rename startGame function


// let firsCard = 10
// let secondCard = 5
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//      renderGame()
// }


// function renderGame() {
// cardsEl.textContent = "Cards: " + firsCard +  " & " + secondCard
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = 2
//     sum += card
//     renderGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 19: Solving our cards problem with an array 

// let firsCard = 10
// let secondCard = 5
// let cards = [firsCard, secondCard]
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " + cards[0] +  " & " + cards[1]
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = 2
//     sum += card
//     renderGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 20: Intro to arrays

// let featurePosts = ["check out netflix clone", 
// "here's code for my project", 
// "i've relaunched my portfolio"] 

// let myExperience = ["per Scholas", "A+", "SE"]




//// Section 2: BlackJack Game
//// Lesson 21: Array indexes

// let featurePosts = [
// "check out netflix clone", // 0
// "here's code for my project", // 1
// "i've relaunched my portfolio" // 2
// ] 

// console.log(featurePosts[0]) // This will grab the first item in the array, since arrays start at 0

// let myExperience = ["per Scholas", "A+", "SE"]

// make the my experience appear: 
// A+
// per scholas
// Se

// console.log(myExperience[1]);
// console.log(myExperience[0]);
// console.log(myExperience[2]);

// console.log(myExperience.length); // gives the length of the array which will be 3, because length isnt 0 indexed




//// Section 2: BlackJack Game
//// Lesson 22: Arrays w/ multiple data types

// Create an array that describes myself. Use the three primitive data tpes
// It should contain a string, number and boolean

// let myself = ["Nerd", 29, true]




//// Section 2: BlackJack Game
//// Lesson 23: Adding and removing items from arrays

// let cards = [7, 4];
// cards.push(5) // This will add 6 to the array 

// Push the newMessage to the messages array, and then log the array 

// let message = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."]

// let newMessage = "Same here!"

// message.push(newMessage);
// message.pop(newMessage) // This will remove "Same here! from the array"

// console.log(message)




//// Section 2: BlackJack Game
//// Lesson 24: Creating cards array 

// let firsCard = 10
// let secondCard = 5
// let cards = [firsCard, secondCard]
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " + cards[0] +  " & " + cards[1]
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = 2
//     sum += card
//     renderGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 25: Push new card to array 

// let firsCard = 10
// let secondCard = 5
// let cards = [firsCard, secondCard]
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " + cards[0] +  " & " + cards[1]
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = 2
//    cards.push(card)
//    console.log(cards)
//     sum += card
//     renderGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 26: Counting in javascript

// Count to ten!

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//  START                   FINISH              STEP SIZE
// for (let count = 1;         count < 11;         count += 1) {

//     console.log(count)
// }




//// Section 2: BlackJack Game
//// Lesson 27: Write first loop 

// Create a for loop that counts from 10 to 100 in steps of 10
// use console.log to log out the numbers 

// for (let count = 10; count < 110; count += 10) {
//     console.log(count)
// }




//// Section 2: BlackJack Game
//// Lesson 28: for loops and arrays

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately",
//     "Same here!"
// ]

// for(let i = 0; i < 4; i += 1 ) {
// console.log(messages[i]);
// }




//// Section 2: BlackJack Game
//// Lesson 29: First array-based for loop 

// let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array 
// use cards.length to specify how long the loop should run 

// for(j = 0; j < cards.length; j += 1) {
//     console.log(cards[j])
// }




//// Section 2: BlackJack Game
//// Lesson 30: For loops, arrays & DOM

// let sentence = ["Hello", "my", "name", "is", "Jesse"]
// let greetingEl = document.getElementById("greetings-el")

// Render the sentence in the greetingEl paragraph using for loop and .textContent 

// for(i = 0; i < sentence.length; i += 1) {
//     greetingEl.textContent += sentence[i] + " "
//     console.log(greetingEl);
// }




//// Section 2: BlackJack Game
//// Lesson 31: Use loop to render cards 

// let firsCard = 10
// let secondCard = 5
// let cards = [firsCard, secondCard]
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " 
// for(let i = 0; i < cards.length; i ++) {
//     cardsEl.textContent += cards[i] + "  ";
//     console.log(cardsEl)
// }
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = 2
//    cards.push(card)
//    console.log(cards)
//     sum += card
//     renderGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 32: Avoid hard-coding values 

// let firsCard = 10
// let secondCard = 5
// let cards = [firsCard, secondCard]
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {

// }


// function startGame() {
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " 
// for(let i = 0; i < cards.length; i ++) {
//     cardsEl.textContent += cards[i] + "  ";
//     console.log(cardsEl)
// }
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = 2
//    cards.push(card)
//    console.log(cards)
//     sum += card
//     renderGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 33: Returning Values 

// let player1Time = 102;
// let player2Time = 107


// function getFastestTime() {
//     if (player1Time < player2Time) {
//     return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestTime

// console.log(fastestRace)

// let player1Time = 102
// let player2Time = 104

// function getFastestTime() {
//     return player1Time + player2Time
// }

// let time = getFastestTime()
// console.log(time)




//// Section 2: BlackJack Game
//// Lesson 34: Using a function to set the card values 

// let firsCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firsCard, secondCard]
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     return 5 
// }


// function startGame() {
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " 
// for(let i = 0; i < cards.length; i ++) {
//     cardsEl.textContent += cards[i] + "  ";
//     console.log(cardsEl)
// }
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = getRandomCard()
//    cards.push(card)
//    console.log(cards)
//     sum += card
//     renderGame()    
// }




//// Section 2: BlackJack Game
//// Lesson 35: Generating random numbers w/Math.random()

// Math.random() will give you a number between 0.0000 to 0.999

// let randomNumber = Math.random()

// console.log(randomNumber);





//// Section 2: BlackJack Game
//// Lesson 36: Math.random() *6

// This will give us 0.000 to 5.9999

// let randomNumber = Math.random() * 6

// console.log(randomNumber);





//// Section 2: BlackJack Game
//// Lesson 37: Flooring number w/ Math.floor()

// This removes the decimals, 3.45632 just equals to 3

// let floorNumber = Math.floor(3.45632)

// console.log(floorNumber)





//// Section 2: BlackJack Game
//// Lesson 38: Create Dice

// These two methods together output 0 - 5

// let randomNumber = Math.floor(Math.random() * 6)
// console.log(randomNumber)





//// Section 2: BlackJack Game
//// Lesson 39: Complete dice function

// This will now output 1 - 6, the + 1 will start the output at one and will add 1, so now we get 1 - 6

// let randomNumber = Math.floor(Math.random() * 6 ) + 1
// console.log(randomNumber)

// function rollDice() {
//     return Math.floor(Math.random() * 6) + 2;
// }
// let dice = rollDice()

// console.log(dice);

// Using return will allow me to assign my function to a variable in the global scope 





//// Section 2: BlackJack Game
//// Lesson 40: Make getRandomCard() work

// let firsCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firsCard, secondCard]
// let sum = firsCard + secondCard
// let hasBlackJack = false  
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1 
//     if(randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
//     }


// function startGame() {
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " 
// for(let i = 0; i < cards.length; i ++) {
//     cardsEl.textContent += cards[i] + "  ";
//     console.log(cardsEl)
// }
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = getRandomCard()
//    cards.push(card)
//    console.log(cards)
//     sum += card
//     renderGame()    
// }





//// Section 2: BlackJack Game
//// Lesson 41: Assign values in startGame function


// let cards = []
// let sum = 0
// let hasBlackJack = false  
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1 
//     if(randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
//     }


// function startGame() {
//     let firsCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firsCard, secondCard]
//     sum = firsCard + secondCard
//     isAlive = true
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " 
// for(let i = 0; i < cards.length; i ++) {
//     cardsEl.textContent += cards[i] + "  ";
//     console.log(cardsEl)
// }
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }


// function newCards() {
//     console.log("Drawing a new card")
//     let card = getRandomCard()
//    cards.push(card)
//    console.log(cards)
//     sum += card
//     renderGame()    
// }





//// Section 2: BlackJack Game
//// Lesson 42: Card feature is broken 

// let cards = []
// let sum = 0
// let hasBlackJack = false  
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1 
//     if(randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
//     }


// function startGame() {
//     let firsCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firsCard, secondCard]
//     sum = firsCard + secondCard
//     isAlive = true
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " 
// for(let i = 0; i < cards.length; i ++) {
//     cardsEl.textContent += cards[i] + "  ";
//     console.log(cardsEl)
// }
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }

// // The new card function continues to let you draw cards, which shouldn't happen, the game should end once you reach blackjack or lose

// function newCards() {
//     let card = getRandomCard()
//    cards.push(card)
//    console.log(cards)
//     sum += card
//     renderGame()    
// }





//// Section 2: BlackJack Game
//// Lesson 43: The logical AND operator 

// let hasCompletedCourse = true
// let givesCertificeate = true 

// if(hasCompletedCourse === true && givesCertificeate === true) {
//         generateCertificate()
// }


// function generateCertificate() {
//     console.log("Generating certificate.... ")
// }





//// Section 2: BlackJack Game
//// Lesson 44: Write a logical operator 

// let hasSolvedChallenge = false 
// let hasHintsLeft = false 

// If both of these are true or false the showSolution will run, but both have to have the same value of true or false 

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution... ")
// }





//// Section 2: BlackJack Game
//// Lesson 44: Logical OR operator 

// let likesDocumentaries = false
// let likeStartUps = false 

// If either one of the statements are true then the function will run

// if (likesDocumentariese === true || likeStartUps === false) {
//     showSolution()
// }

// function recommendMovie() {
//     console.log("Hey, check out this movie... ")
// }





//// Section 2: BlackJack Game
//// Lesson 45: Only trigger newCard() if your allowed to 

// let cards = []
// let sum = 0
// let hasBlackJack = false  
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let playerName = "Jesse's credit"
// let playerChips = 100
// let playerEl = document.getElementById("player-el")


// let player = {
//      Name: "Jesse's credit",
//      Chips: 100
// }
// playerEl.textContent = player.Name + ": $" + player.Chips

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1 
//     if(randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
//     }


// function startGame() {
//     let firsCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firsCard, secondCard]
//     sum = firsCard + secondCard
//     isAlive = true
//      renderGame()
// }

// function renderGame() {
// cardsEl.textContent = "Cards: " 
// for(let i = 0; i < cards.length; i ++) {
//     cardsEl.textContent += cards[i] + "  ";
//     console.log(cardsEl)
// }
// sumEl.textContent = "Sum: " + sum
// if (sum <= 20) {
//     message = "Do you want another card?"
// } else if (sum === 21) {
//     message = "You Win!"
//     hasBlackJack = true
// } else {
//     message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
//     isAlive = false 
// }
//     messageEl.textContent = message;
// }

// // The new card function continues to let you draw cards, which shouldn't happen, the game should end once you reach blackjack or lose

// function newCards() {
//     if(isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard()
//         cards.push(card)
//         console.log(cards)
//          sum += card
//          renderGame()    
//         }
// }





//// Section 2: BlackJack Game
//// Lesson 46: Intro to objects

// Objects - store data in-depth - composite / complex data
// Key-value pairs

// let course = {
//     title: "Learn CSS grid for free",
//     lessons: 16,
//     creator: "Jesse Trevino",
//     length: 63, // 1 hour is broken down into minutes
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"],
// }


// console.log(course.length) // this will log 63, we go into course and look for length which is 63

// console.log(course.lessons) // this will output 16





//// Section 2: BlackJack Game
//// Lesson 47: Create first object

// Create an object that represents an airbnb castle listing
// it should contain at least one boolean, one string, one number, and one array 
// log out at least two of the keys using the dot notation 

// let castle = {
//     building: "San Guisto Abbey (medieval tower)",
//     rating: 4.95,
//     rate: "$190 / night",
//     preferences: ["4 guests - 1 bedroom - 2 beds - Private half-bath"],
//     rent: true,

// }

// console.log(castle.building)
// console.log(castle.rating)
// console.log(castle.rate)
// console.log(castle.preferences)
// console.log(castle.rent)





//// Section 2: BlackJack Game
//// Lesson 48: Use an object to store player data 
let player = {
    Name: "Jesse's credit",
    Chips: 100
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



playerEl.textContent = player.Name + ": $" + player.Chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if(randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    }


function startGame() {
    let firsCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firsCard, secondCard]
    sum = firsCard + secondCard
    isAlive = true
     renderGame()
}

function renderGame() {
cardsEl.textContent = "Cards: " 
for(let i = 0; i < cards.length; i ++) {
    cardsEl.textContent += cards[i] + "  ";
    console.log(cardsEl)
}
sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want another card?"
} else if (sum === 21) {
    message = "You Win!";
    hasBlackJack = true;
    player.Chips += 20;
    playerEl.textContent = player.Name + ": $" + player.Chips;
} else {
    message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
    isAlive = false 
    player.Chips -= 10;
    playerEl.textContent = player.Name + ": $" + player.Chips;
}
    messageEl.textContent = message;
}

// The new card function continues to let you draw cards, which shouldn't happen, the game should end once you reach blackjack or lose

function newCards() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        console.log(cards)
         sum += card
         renderGame()    
        }
}

