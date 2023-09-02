


const getComputerChoice =()=>{
    const choices=["rock","paper","scissor"];
    const random=Math.floor((Math.random()*3));


    // console.log(`computer : ${choices[random]}`);
    return choices[random];
}

const playRound=(playerSelection, computerSelection)=>{
    if(playerSelection==="rock"){
        if(computerSelection==="rock"){
                return "draw";
        }
        if(computerSelection==="paper"){
            return "loose";
        }
        if(computerSelection==="scissor")
        return "win";
    }
    if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            return "win";
        }
        if(computerSelection==="paper"){
                return "draw";
        }
        if(computerSelection==="scissor")
        return "loose";
    }
    if(playerSelection==="scissor"){
        if(computerSelection==="rock"){
            return "loose";
        }
        if(computerSelection==="paper"){
            return "win";
        }
        if(computerSelection==="scissor")
            return "draw";
    }

}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");


const resultDisplay = document.getElementById("result");

rock.addEventListener("click",display);
paper.addEventListener("click",display);
scissor.addEventListener("click",display);

let player=0,computer=0;

    
    function display(e){
      

            // const playerSelection= e.target.value;
            const playerSelection=e.target.getAttribute("alt");
            // console.log(e);
            console.log(playerSelection);
            
            
            const result =(playRound(playerSelection,getComputerChoice()));
            // console.log(playerSelection);
            // console.log(result);
            
            if(result==="win"){
                player++;
            }
            if(result==="loose"){
                computer++;
            }  
            // resultDisplay.textContent=[player,computer];
            if(player==5){
                resultDisplay.textContent="Player wins";
                
                rock.removeEventListener("click",display);
                paper.removeEventListener("click",display);
                scissor.removeEventListener("click",display);
                
            }
            if(computer==5){
                resultDisplay.textContent="Computer wins";
                rock.removeEventListener("click",display);
                paper.removeEventListener("click",display);
                scissor.removeEventListener("click",display);
                
            }
            const playerScore=document.getElementById("playerScore");
            const computerScore=document.getElementById("computerScore");
    
            playerScore.innerHTML=player;
            computerScore.innerHTML=computer;
            // console.log(player,computer);
        }

        const reset = document.getElementById("reset");

        reset.addEventListener("click",reset=>{
            location.reload();
            player=0;
            computer=0;
           
        })
        

       
    
   



