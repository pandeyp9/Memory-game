document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray=[
        {
            name: 'guava',
            img: 'memory-game-img/guava.jpg'
        },
        {
            name: 'guava',
            img: 'memory-game-img/guava.jpg'
        },
        {
            name:'pineapple',
            img: 'memory-game-img/pineapple.jpg'
        },
        {
            name:'pineapple',
            img: 'memory-game-img/pineapple.jpg'
        },
        {
            name: 'lichy',
            img: 'memory-game-img/lichy.jpg'
        },
        {
            name: 'lichy',
            img: 'memory-game-img/lichy.jpg'
        },
        {
            name: 'plum',
            img: 'memory-game-img/plum.jpg'
        },
        {
            name: 'plum',
            img: 'memory-game-img/plum.jpg'
        },
        {
            name:'strawberry',
            img: 'memory-game-img/strawberry.jpg'
        },
        {
            name:'strawberry',
            img: 'memory-game-img/strawberry.jpg'
        },
        {
            name: 'lemon',
            img: 'memory-game-img/lemon.jpg'
        },
        {
            name: 'lemon',
            img: 'memory-game-img/lemon.jpg'
        }

    ]

    cardArray.sort(function(){ return 0.5-Math.random()});




    const grid=document.querySelector(".grid") ;
    const resultDisplay=document.querySelector("#result");
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];

    // create yout board

    function createBoard(){
        for(let i=0;i<cardArray.length; i++){
            var card=document.createElement('img');
            card.setAttribute('src', 'memory-game-img/default.jpg');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);


        }
    }
// flip your card
function checkForMatch(){
    var cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src','memory-game-img/blank.png');
        cards[optionTwoId].setAttribute('src','memory-game-img/blank.png');
        cardsWon.push(cardsChosen);
    }
    else{
        cards[optionOneId].setAttribute('src','memory-game-img/default.jpg');
        cards[optionTwoId].setAttribute('src','memory-game-img/default.jpg');
        alert('Sorry, try again');
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length=== cardArray.length/2){
        resultDisplay.textContent='Congratulation! You found them all!';
    }

}

// "flip your card"
function flipCard(){
    var cardId=this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img); 
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,500);
    }
}

    createBoard();



}) 