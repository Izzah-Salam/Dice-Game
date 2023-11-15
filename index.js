// initializing the varibles

var score , diceScore , activePlayer;

function initFun(){
    score = [0,0];
    diceScore = 0;
    activePlayer = 0;
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector(".dice").style.display = 'none';
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("active");
   
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

}

initFun();



// interact with document objects.







function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    diceScore = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");

    document.querySelector(".dice").style.display = 'none';

}

// event listener
let rollBtn = document.querySelector(".btn-roll");
 
function rollBtnListener(){
    //1. random numer
        var dice = Math.floor(Math.random()*6)+1;
    
    //2. display the number
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = 'block';
        diceDom.src = `./img/${dice}.jpg`;

    //3. update the round score if the rolled number was not 1 
        if(dice!==1){
            //add the score of the player and continue playing
            diceScore+=dice;
            document.querySelector("#current-"+activePlayer).textContent = diceScore;

        }
        else{
            // another playeing turns
           
               nextPlayer()

            

        }

    
}

rollBtn.addEventListener("click",rollBtnListener)


let holdBtn = document.querySelector(".btn-hold");

function holdBtnListener(){
    // add current score to global score
    score[activePlayer] += diceScore

    // update the UI
    document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];

    // check that user won tha game
    if(score[activePlayer] >= 20){
        document.querySelector("#name-" +activePlayer).textContent = "Winner";
        document.querySelector(".dice").style.display = 'none';
        document.querySelector("#player-"+activePlayer+"-panel").remove("active")
    }
    else{
        // next payer
    nextPlayer()

    }    

}

holdBtn.addEventListener("click",holdBtnListener);


let newBtn = document.querySelector(".btn-new");



newBtn.addEventListener("click",initFun)



