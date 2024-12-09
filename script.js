// import exampleWords from "./assets/example-words.json";

const body = document.querySelector("body");
const darkBtn = document.querySelector("#darkBtn");
const newBtn = document.querySelector("#newBtn");
const guessingWordDiv = document.querySelector("#guessingWordDiv");
const previousWordsList = document.querySelector("#previousWordsList");

// import { wordsListArray } from "./wordlist.js";

////////// DARK MODE /////////////////
//////////////////////////////////////
darkBtn.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  guessingWordDiv.classList.toggle("guessingWordDiv--dark");
});

///////// SHARED VAR ////////////
//////////////////////////
let guessWord;
let displayWord;
let letterGuess;
let wordArray;
let displayArray;
let livesLeft;
let imageshown;
let previousWordArray = [];

///////////// GAME OVER ///////
////////////////////////////

function gameOver(livesLeft) {
  if (livesLeft === 0) {
    alert(`YOU DIED :( \nThe word was ${guessWord}`);
    // addToPreviousList(guessWord);
    newGame();
  }
}

/////// WORD PICKER ////////
/////////////////////////
function pickRandomWord(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index].toUpperCase();
}

//////////// NEW GAME /////////////
///////////////////////////////

function newGame() {
  guessWord = pickRandomWord(wordsListArray);
  displayWord = "_ ".repeat(guessWord.length);
  guessingWordDiv.textContent = displayWord;
  livesLeft = 10;
  enableButtons();
  switch (livesLeft) {
    case 10:
      imageshown = "./assets/img/h-0.jpg";
      break;
  }
  document.getElementById("hangedMan").src = imageshown;

  wordArray = guessWord.split("");
  console.log(guessWord);
}

///// NEW GAME BUTTON /////////
///////////////////////////////
newBtn.addEventListener("click", () => {
  newGame();
});

////////// DISABLE BUTTONS //////
//////////////////////////////
function disableButtons(letter) {
  document.getElementById(letter + "-button").disabled = true;
}

////////// ENABLE BUTTONS /////
//////////////////////////////
function enableButtons() {
  const buttons = document.querySelectorAll(".keyboardLine button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

/////// PREVIOUS WORDS //////////
/////////////////////////////

// function addToPreviousList(guessWord) {
//   previousWordArray.push(" " + guessWord);
//   previousWordsList.textContent = "Past Glories: " + previousWordArray;
// }

///////////// GUESSING ////////////
//////////////////////////////////
function guessLetter(guess) {
  displayArray = displayWord.split(" ");
  disableButtons(guess);
  if (wordArray.includes(guess)) {
    console.log("yes");
    wordArray.forEach((letter, i) => {
      if (letter === guess) {
        displayArray[i] = letter;
      }
    });
    displayWord = displayArray.join(" ");
    guessingWordDiv.textContent = displayWord;
    if (!displayWord.includes("_")) {
      alert(`YOU WON!!! :) \nThe word was ${guessWord}`);
      // addToPreviousList(guessWord);

      newGame();
    }
  } else {
    console.log("no");
    livesLeft--;

    console.log("Lives Left: " + livesLeft);

    switch (livesLeft) {
      case 10:
        imageshown = "./assets/img/h-0.jpg";
        break;
      case 9:
        imageshown = "./assets/img/h-1.jpg";
        break;
      case 8:
        imageshown = "./assets/img/h-2.jpg";
        break;
      case 7:
        imageshown = "./assets/img/h-3.jpg";
        break;
      case 6:
        imageshown = "./assets/img/h-4.jpg";
        break;
      case 5:
        imageshown = "./assets/img/h-5.jpg";
        break;
      case 4:
        imageshown = "./assets/img/h-6.jpg";
        break;
      case 3:
        imageshown = "./assets/img/h-7.jpg";
        break;
      case 2:
        imageshown = "./assets/img/h-8.jpg";
        break;
      case 1:
        imageshown = "./assets/img/h-9.jpg";
        break;
      case 0:
        imageshown = "./assets/img/h-10.jpg";
        break;
      default:
        imageshown = "./assets/img/h-0.jpg";
        break;
    }

    document.getElementById("hangedMan").src = imageshown;

    gameOver(livesLeft);
  }
}

/////////// to do

// actual array

const wordsListArray = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "pear",
  "peach",
  "plum",
  "melon",
  "lemon",
  "pineapple",
  "mango",
  "papaya",
  "coconut",
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "cherry",
  "apricot",
  "tomato",
  "carrot",
  "potato",
  "onion",
  "garlic",
  "pepper",
  "lettuce",
  "broccoli",
  "spinach",
  "zucchini",
  "cucumber",
  "celery",
  "cauliflower",
  "asparagus",
  "mushroom",
  "pumpkin",
  "radish",
  "beetroot",
  "turnip",
  "parsnip",
  "elephant",
  "giraffe",
  "tiger",
  "lion",
  "cheetah",
  "leopard",
  "zebra",
  "rhino",
  "hippo",
  "buffalo",
  "kangaroo",
  "koala",
  "panda",
  "sloth",
  "chimpanzee",
  "gorilla",
  "orangutan",
  "lemur",
  "meerkat",
  "otter",
  "shark",
  "whale",
  "dolphin",
  "seal",
  "octopus",
  "jellyfish",
  "lobster",
  "crab",
  "shrimp",
  "starfish",
  "eagle",
  "sparrow",
  "parrot",
  "penguin",
  "ostrich",
  "flamingo",
  "peacock",
  "hummingbird",
  "owl",
  "falcon",
  "house",
  "apartment",
  "mansion",
  "cottage",
  "bungalow",
  "castle",
  "villa",
  "shack",
  "chalet",
  "palace",
  "bed",
  "chair",
  "table",
  "desk",
  "sofa",
  "couch",
  "cabinet",
  "wardrobe",
  "bookshelf",
  "dresser",
  "car",
  "bicycle",
  "motorcycle",
  "scooter",
  "truck",
  "bus",
  "train",
  "airplane",
  "helicopter",
  "boat",
  "submarine",
  "rocket",
  "spaceship",
  "hovercraft",
  "tram",
  "trolley",
  "taxi",
  "ferry",
  "yacht",
  "canoe",
  "violin",
  "guitar",
  "piano",
  "trumpet",
  "flute",
  "drums",
  "clarinet",
  "saxophone",
  "cello",
  "harp",
  "concert",
  "symphony",
  "melody",
  "harmony",
  "rhythm",
  "tempo",
  "note",
  "scale",
  "chord",
  "tune",
  "dog",
  "cat",
  "rabbit",
  "hamster",
  "goldfish",
  "parakeet",
  "ferret",
  "guinea",
  "chinchilla",
  "gerbil",
  "winter",
  "spring",
  "summer",
  "autumn",
  "snow",
  "rain",
  "hail",
  "sleet",
  "fog",
  "storm",
  "mountain",
  "river",
  "lake",
  "ocean",
  "forest",
  "desert",
  "valley",
  "canyon",
  "island",
  "waterfall",
  "kitchen",
  "bathroom",
  "bedroom",
  "livingroom",
  "garage",
  "basement",
  "attic",
  "hallway",
  "balcony",
  "patio",
  "science",
  "history",
  "math",
  "geography",
  "chemistry",
  "biology",
  "physics",
  "astronomy",
  "literature",
  "philosophy",
  "football",
  "basketball",
  "tennis",
  "golf",
  "soccer",
  "baseball",
  "hockey",
  "cricket",
  "rugby",
  "volleyball",
];
