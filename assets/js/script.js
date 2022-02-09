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
        {
            name:"rovers",
            img:"./assets/images/play-cards/rovers.png"
        },
        {
            name:"valencia",
            img:"./assets/images/play-cards/valencia.png"
        },
        {
            name:"westham",
            img:"./assets/images/play-cards/westham.png"
        },
        {
            name:"celtic",
            img:"./assets/images/play-cards/celtic.png"
        },
        {
            name:"rovers",
            img:"./assets/images/play-cards/rovers.png"
        },
        {
            name:"valencia",
            img:"./assets/images/play-cards/valencia.png"
        },
        {
            name:"westham",
            img:"./assets/images/play-cards/westham.png"
        },
        {
            name:"celtic",
            img:"./assets/images/play-cards/celtic.png"
        }
    ];

    //constants for the game,moves,score and reset

    const playground = document.querySelector("#playground");
    const reset = document.querySelector("reset-button");
    const score = document.querySelector("#total");
    const movesCount = document.querySelector("#moves");
    let moves = 0;

    let cardsPicked = [];
    let cardsPickedId = [];
    let cardsCorrect = [];

    //machine to random place cards on screen
    cardList.sort(() => 0.5 - Math.random());

    //setting attributes,iteration and adding back of the card,creating new element of image of card back

    function startGame () {
        for (let i = 0; i < cardList.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "./assets/images/play-cards/card-back.png");
            card.setAttribute("class", "play-card");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            playground.appendChild(card);
        }
    }

    //checking does the cards which user selected match

    function checkMatch () {
        const cards = document.querySelectorAll("img");
        const firstOptionId = cardsPickedId[0];
        const secondOptionId = cardsPickedId[1];

        if (cardsPicked[0] === cardsPicked[1] && cardsPickedId[0] !== cardsPickedId[1]) {
            cards[firstOptionId].removeEventListener("click", flipCard);
            cards[secondOptionId].removeEventListener("click", flipCard);
            cardsCorrect.push(cardsPicked);
            movesCounter();
        } else {
            cards[firstOptionId].setAttribute("src", "./assets/images/play-cards/card-back.png");
            cards[secondOptionId].setAttribute("src", "./assets/images/play-cards/card-back.png");
            movesCounter();
        }
        //remove chosen cards
        cardsPicked = [];
        cardsPickedId = [];

        //score changes every time there is a match
        score.textContent = cardsCorrect.length;

        //message when all cards are matched

        if(cardsCorrect.lenght === cardList.lenght/2) {
            document.getElementById("message").innerHTML = "Well done, you matched all cards !";
        }

    }

    //flip cards when user selects them
    function flipCard(){
        letcardId = this.getAttribute("data-id");
        cardsPicked.push(cardList[cardId].name);
        cardsPickedId.push(cardId);
        this.setAttribute("src", cardList[cardId].img);
        if (cardsPicked.lenght === 2) {
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
       cardsCorrect = [];
       score.innerHTML = 0;
       cardsPicked = [];
       cardsPickedId = [];
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