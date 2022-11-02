window.onload = function () {
    // Player-related buttons and dialogue
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");
    var scissor = document.getElementById("scissor"); // {.....}

    // Computer-related buttons and dialogue
    var computerScor3 = document.getElementById("computerScor3");
    var computerChoice = document.getElementById("c0mput3r");

    // Score-related stuff
    var playerScor3 = document.getElementById("playerScor3");
    var playerCount = 0;
    var cpuCount = 0;

    // Game rules
    var rpsList = ["rock", "paper", "scissor"];
    var textBox = document.getElementById("textB0x");

    // Color change buttons
    var colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    

    function rpsFunction(evt) {
        var computerRPS = rpsList[Math.floor(rpsList.length * Math.random())];
        computerChoice.innerHTML = "Computer: " + computerRPS;
        
        var playerChoice = evt.target.id; // string
        if ((playerChoice == "rock" && computerRPS == "scissor") || (playerChoice == "paper" && computerRPS == "rock") || (playerChoice == "scissor" && computerRPS == "paper")) { // winning conditions
            playerCount += 1;
            playerScor3.innerHTML = "Player Score: " + playerCount;
            textBox.innerHTML = "You Win! Congrats!";
            textBox.style.backgroundColor = "green";
        } else if ((playerChoice == "rock" && computerRPS == "paper") || (playerChoice == "paper" && computerRPS == "scissor") || (playerChoice == "scissor" && computerRPS == "rock")) {
            cpuCount += 1;
            computerScor3.innerHTML = "Computer Score: " + cpuCount;
            textBox.innerHTML = "You lose! Maybe next time!";
            textBox.style.backgroundColor = "red";
        } else {
            playerCount += 0.5;
            cpuCount += 0.5;
            playerScor3.innerHTML = "Player Score: " + playerCount;
            computerScor3.innerHTML = "Computer Score: " + cpuCount;
            textBox.innerHTML = "Its a tie! Go again?";
            textBox.style.backgroundColor = "blue";
        }

    };

    rock.onclick = rpsFunction;
    paper.onclick = rpsFunction;
    scissor.onclick = rpsFunction;
    
    
}