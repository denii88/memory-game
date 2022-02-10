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
        },
        
    ];

    //machine to random place cards on screen
    cardList.sort(() => 0.5 - Math.random());
    
    //constants for the game,moves,score and reset

    const playground = document.querySelector("#playground");
    const score = document.querySelector("#result");
    const movesCount = document.querySelector("#moves");
    const reset = document.getElementById("reset-button");
    let moves = 0;

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsRight = [];

    //setting attributes,iteration and adding back of the card,creating new element of image of card back

    function createPlayground () {
        for (let i = 0; i < cardList.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "./assets/images/play-cards/card-back.png");
            card.setAttribute("class", "game-card");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            playground.appendChild(card);
        }
    }

    //checking does the cards which user selected match

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
            cards[optionOneId].setAttribute("src", "./assets/images/play-cards/card-back.png");
            cards[optionTwoId].setAttribute("src", "./assets/images/play-cards/card-back.png");
            movesCounter();
        }
        //remove chosen cards
        cardsChosen = [];
        cardsChosenId = [];

        //score changes every time there is a match
        score.textContent = cardsRight.length;

        //message when all cards are matched

        if (cardsRight.length === cardList.length/2) {
            document.getElementById("message").innerHTML = "Well done, you matched all cards!";
           }
 
        }

    //flip cards when user selects them
    function flipCard() {
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardList[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardList[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 300);
        }
    }

   //reset the game

    reset.addEventListener("click", resetEverything);
    function resetEverything() {
       playground.innerHTML = "";
       document.getElementById("message").innerHTML = "";
       cardList.sort(() => 0.5 - Math.random());
       createPlayground(playground, cardList);
       cardsRight = [];
       score.innerHTML = 0;
       cardsChosen = [];
       cardsChosenId = [];
       movesCount.innerHTML = 0;
       moves = 0;
   }
    
   //moves counter
    function movesCounter () {
       movesCount.innerHTML ++;
       moves ++;
   }

   createPlayground();
});