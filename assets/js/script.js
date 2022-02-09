//used const variable to add all photos,except card back,which will go later to the if else function in checking for match
document.addEventListener("DOMContentLoaded", () => {
const cardList = [
    {
        name:"arsenal",
        img:"./assets/images/play-cards/arsenal.png"
    },
    {
        name:"bayern",
        img:"./assets/images/play-cards/bayern.png"
    },
    {
        name:"liverpool",
        img:"./assets/images/play-cards/liverpool.png"
    },
    {
        name:"man-united",
        img:"./assets/images/play-cards/man-united.png"
    },
    {
        name:"osijek",
        img:"./assets/images/play-cards/osijek.png"
    },
    {
        name:"real-madrid",
        img:"./assets/images/play-cards/real-madrid.png"
    },
    {
        name:"arsenal",
        img:"./assets/images/play-cards/arsenal.png"
    },
    {
        name:"bayern",
        img:"./assets/images/play-cards/bayern.png"
    },
    {
        name:"liverpool",
        img:"./assets/images/play-cards/liverpool.png"
    },
    {
        name:"man-united",
        img:"./assets/images/play-cards/man-united.png"
    },
    {
        name:"osijek",
        img:"./assets/images/play-cards/osijek.png"
    },
    {
        name:"real-madrid",
        img:"./assets/images/play-cards/real-madrid.png"
    }

];
//sort cards random
cardList.sort(() => 0.5 - Math.random());
//constants for the game
const playground = document.querySelector("#playground");
const score = document.querySelector("#total");
const movesCount = document.querySelector("#moves");
const reset = document.getElementById("reset-button");
let moves = 0;

let cardsChosen = [];
let cardsChosenId = [];
let cardsRight = [];
//game creating
function createGame () {
    for (let i=0; i < cardList.length;i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "./assets/images/card-back.png");
        card.setAttribute("class", "play-card");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        playground.appendChild(card);

    }
}


  // Check if cards selected match
  function checkMatch () {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsRight.push(cardsChosen);
      movesCounter();
    } else {
      cards[optionOneId].setAttribute("src", "./assets/images/card-back.png");
      cards[optionTwoId].setAttribute("src", "./assets/images/card-back.png");
      movesCounter();
    }
    
    //clear cards chosen
    cardsChosen = [];
    cardsChosenId = [];
        
    //Increase score for every correct match
    score.textContent = cardsRight.length;
    //Display alert when all cards collected
    if (cardsRight.length === cardList.length/2) {
      document.getElementById("win-message").innerHTML = "Congratulations! You found all the matches!";
      }
    }

  //flip card on selection
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardList[cardId].name);
    cardsChosenId.push(cardId);
    // add image
    this.setAttribute("src", cardList[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 400);
    }
  }
// Reset game
reset.addEventListener("click", resetEverything);
function resetEverything() {
  playground.innerHTML = "";
  document.getElementById("win-message").innerHTML = "";
  cardList.sort(() => 0.5 - Math.random());
  createGame(playground, cardList);
  cardsRight = [];
  score.innerHTML = 0;
  cardsChosen = [];
  cardsChosenId = [];
  movesCount.innerHTML = 0;
  moves = 0;
}
// Count moves
function movesCounter () {
    movesCount.innerHTML ++;
    moves ++;
  }
  
  createGame();


});
