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
    const grade = document.querySelector("#total");
    const movesCount = document.querySelector("#moves");
    const reset = document.getElementById("reset-button");
    let moves = 0;

    let cardsPicked = [];
    let cardsPickedId = [];
    let cardsCorrect = [];

    //setting attributes,iteration and adding back of the card,creating new element of image of card back, Credits : Ania Kubow.

    function createPlayground () {
        for (let i = 0; i < cardList.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "./assets/images/play-cards/card-back.png");
            card.setAttribute("class", "play-card");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            playground.appendChild(card);
        }
    }

    //checking does the cards which user selected match, Credits : GitHub user michelle 3334

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
        //remove chosen cards Credit : Stackoverflow
        cardsPicked = [];
        cardsPickedId = [];

        //score changes every time there is a match
        grade.textContent = cardsCorrect.length;

        //message when all cards are matched

        if (cardsCorrect.length === cardList.length/2) {
            document.getElementById("message").innerHTML = "Well done, you matched all cards!";
           }
 
        }

    //flip cards when user selects them, Credit : CodeOpen user : Jacob Oakley
    function flipCard() {
        let cardId = this.getAttribute("data-id");
        cardsPicked.push(cardList[cardId].name);
        cardsPickedId.push(cardId);
        this.setAttribute("src", cardList[cardId].img);
        if (cardsPicked.length === 2) {
            setTimeout(checkMatch, 600);
        }
    }

   //reset the game, Credits : GitHub user michelle 3334

    reset.addEventListener("click", resetEverything);
    function resetEverything() {
       playground.innerHTML = "";
       document.getElementById("message").innerHTML = "";
       cardList.sort(() => 0.5 - Math.random());
       createPlayground(playground, cardList);
       cardsCorrect = [];
       grade.innerHTML = 0;
       cardsPicked = [];
       cardsPickedId = [];
       movesCount.innerHTML = 0;
       moves = 0;
   }
    
   //moves counter, ultimate moves counter, Credit Stackoverflow
    function movesCounter () {
       movesCount.innerHTML ++;
       moves ++;
   }

   createPlayground();
});