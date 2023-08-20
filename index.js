


const getComputerChoice =()=>{
    const choices=["rock","paper","scissor"];
    const random=Math.floor((Math.random()*3));


    console.log(`computer : ${choices[random]}`);
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

function display(e){
    const playerSelection= e.target.value;
    
    const result =(playRound(playerSelection,getComputerChoice()));
    console.log(playerSelection);
    console.log(result);
    resultDisplay.textContent=result;

        
        
        
}












 // single game

// let p1=prompt("enter your choice").toLocaleLowerCase();

//         console.log(`player : ${p1}`);

//         const result =(playRound(p1,getComputerChoice()));
//         console.log(result);






// 5 game logic

// const game=()=>{
//     let player=0,computer=0;
//     for(let i=1;i<=5;i++){
//         let p1=prompt("enter your choice").toLocaleLowerCase();

//         console.log(`player : ${p1}`);

//         const result =(playRound(p1,getComputerChoice()));
//         console.log(result);

//         if(result==="win"){
//             player++;
//         }
//         if(result==="loose"){
//             computer++;
//         }       



//     }
//     console.log(`Total point: player= ${player}, computer= ${computer}`);

// }

// game();
