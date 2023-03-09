(function(){
    'user strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const actionArea = document.getElementById('actions');

    const rollBtn = document.getElementById('roll');
    const quitBtn = document.getElementById('quit');
    const blop = new Audio('sounds/blop.mp3');
    const egg = new Audio ('sounds/egg.mp3');

    var gameData = {
        dice: ['die1.png','die2.png','die3.png','die4.png','die5.png','die6.png'],
        players: ['player 1', 'player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 19 //winning number: 20
    }

    const player1Score = document.getElementById('player1Score');
    const player2Score = document.getElementById('player2Score');

    startGame.addEventListener("click", function(){
        //randomly set the game index here...
        gameData.index = Math.round(Math.random());
        console.log(`index ${gameData.index}`);
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id = "quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload()
                blop.play();
        });
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`
        actionArea.innerHTML = '<button id="roll"> Roll the Dice </button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
//clicking sound effect
                blop.play();
            });
  
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;

        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        //image of the dice show up
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}">
        <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
        game.innerHTML += '<p>Oh Snap! Snake eyes!</p>';
        gameData.score[gameData.index] = 0;

        //switch player
        gameData.index ? (gameData.index = 0): (gameData.index = 1);
        //Show the current score
        setTimeout(setUpTurn, 2500);
        }

        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            // console.log("one of the two dice was a 1");
            gameData.index ? (gameData.index = 0): (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);

        }else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
            
            document.getElementById('rollagain').addEventListener('click', function (){
                setUpTurn();
                blop.play();
            });

            document.getElementById('pass').addEventListener('click',function(){
                gameData.index ? (gameData.index = 0): (gameData.index = 1);
                setUpTurn();
                blop.play();
            });
            //check winning condition!
            checkWinningCondition();
            }
        }


    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            //egg cracking sound
            egg.play();
            player2Score.innerHTML = `<h3 id="winningCondition">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h3>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }else{
            showCurrentScore();
        }
        }

    //show the accumulated current score of both players 
    function showCurrentScore(){
        player1Score.innerHTML = `<h2>${gameData.score[0]}</h2> <p>${gameData.players[0]}</p>`;
        player2Score.innerHTML = `<h2>${gameData.score[1]}</h2> <p>${gameData.players[1]}</p>`;

    };

}())