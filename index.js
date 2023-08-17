let p1=prompt("enter your choice").toLocaleLowerCase();

console.log(`player : ${p1}`);


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

console.log(playRound(p1,getComputerChoice()));
