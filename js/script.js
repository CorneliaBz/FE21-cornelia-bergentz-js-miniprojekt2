const btnName = document.getElementById(`name`);
let pScore = 0;
let cScore = 0;

const aiChoises = [`sten`, `sax`, `påse`];

//Bilder Spelare och Dator
const playerimg = document.getElementById(`pimg`);
const computerimg = document.getElementById(`cimg`);

//Announcment gällande vad som valts
const announcment = document.getElementById(`announcment`);

//Spelarens Namn genom textinput till h2
btnName.addEventListener(`click`, function(){
    const input = document.querySelector(`input`);
    const displayPlayerName = document.querySelector(`h2`);

    displayPlayerName.innerText = input.value;
    input.value = ` `;
});


//Function Datorn Random sten sax eller påse nr 0-2

function randomChoises (choises){
    const randomIndex = Math.floor( Math.random()*aiChoises.length);

    const result = document.getElementById(`compResult`);
    // result.innerText = aiChoises[randomIndex];

    return aiChoises[randomIndex];
}

//RandomChoises ska ske varje gång man klickar på en av knapparna
//STEN

const buttonSten = document.getElementById(`sten`);

buttonSten.addEventListener(`click`, function(){
    const compChoice = randomChoises();

    const playerChoice = document.getElementById(`playerResult`);
    playerimg.src = `img/sten.png`;
    computerimg.src = `img/${compChoice}.png`

    playerimg.style.computerMove = "example 2sec ease";
    computerimg.style.computerMove = "example 2sec ease";

    //Kollar om datorns val är === X val
    if(compChoice === `sten`){
        announcment.innerText = `Oavgjort`;
        announcment.style.color = `white`;
        
    }
    if (compChoice === `påse`){
        announcment.innerText = `CPU +1`;
        announcment.style.color = `hsl(2, 81%, 74%)`;
        cScore++;
        updateScore();
        
    }
    if(compChoice === `sax`){
        announcment.innerText = `+1`;
        announcment.style.color = `hsl(129, 48%, 57%)`;
        pScore++;
        updateScore();
    }
    endGame();
});

//SAX
const buttonSax = document.getElementById(`sax`);
console.log(buttonSax);

buttonSax.addEventListener(`click`, function(){
    const compChoice = randomChoises();

    const playerChoice = document.getElementById(`playerResult`);
    // playerChoice.innerText = `sax`;
    playerimg.src = `img/sax.png`;
    computerimg.src = `img/${compChoice}.png`

    //Kollar om datorns val är === X val
    if(compChoice === `sax`){
        announcment.innerText = `Oavgjort`;
        announcment.style.color = `white`;
        
    }
    if (compChoice === `påse`){
        announcment.innerText = `+1`;
        announcment.style.color = `hsl(129, 48%, 57%)`;
        pScore++;
        updateScore();
        
    }
    if(compChoice === `sten`){
        announcment.innerText = `CPU +1`;
        announcment.style.color = `hsl(2, 81%, 74%)`;
        cScore++;
        updateScore();

    }
    endGame();
});

//PÅSE
const buttonPase = document.getElementById(`pase`);
console.log(buttonPase);

buttonPase.addEventListener(`click`, function(){
    const compChoice = randomChoises();

    const playerChoice = document.getElementById(`playerResult`);
    // playerChoice.innerText = `sax`;
    playerimg.src = `img/påse.png`;
    computerimg.src = `img/${compChoice}.png`

    //Kollar om datorns val är === X val
    if(compChoice === `påse`){
        announcment.innerText = `Oavgjort`;
        announcment.style.color = `white`;
        
    }
    if (compChoice === `sten`){
        announcment.innerText = `+1`;
        announcment.style.color = `hsl(129, 48%, 57%)`;
        pScore++;
        updateScore();
        
    }
    if(compChoice === `sax`){
        announcment.innerText = `CPU +1`;
        announcment.style.color = `hsl(2, 81%, 74%)`;
        cScore++;
        updateScore();

    }  
    endGame();
});

//Fuktion för att uppdatera poäng
const updateScore = function(event){
    const playerScore = document.getElementById(`playerScore`);
    const computerScore = document.getElementById(`computerScore`);
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

//Funktion för att nå först till 3 - GAME END
const endGame = function(event){
    if(cScore === 3){
        alert(`DU FÖRLORADE FAJTEN!!!`)
        cScore = 0;
        pScore = 0; 
        playerScore.textContent = 0;
        computerScore.textContent = 0;

    }
    if(pScore === 3){
        alert(`DU VANN FAJTEN!!!`)
        cScore = 0;
        pScore = 0; 
        playerScore.textContent = 0;
        computerScore.textContent = 0;

    }
}