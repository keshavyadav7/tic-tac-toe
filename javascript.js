
let winnerArr = [
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
] // winner probablity

//accessing the variables

let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let newtab = document.querySelector(".newtab");


let turnOf = true; //for switching x and o


function disablebutton(){
    for(let box of boxes){
        box.disabled=true;
    }
};

function enablebutton(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
function hidewinner(){
    winner.style.display="none";
    newgame.style.display="none";
    newtab.style.height="100px";
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnOf == true) {
            box.innerText = "X";
            box.style.color="#7FC7D9";
            turnOf = false;

        }
        else if (turnOf == false) {
            box.innerText = "O"
            turnOf = true;
            box.style.color="#365486";
            ;
        }
        box.disabled = true;
        getWinner();
    });
});

function getWinner() {
    let i = 0;
    for (let pattern of winnerArr) {


        if (boxes[pattern[0] - 1].innerText != "" && boxes[pattern[1] - 1].innerText != "" && boxes[pattern[2] - 1].innerText != "") 
        {
            if (boxes[pattern[0] - 1].innerText === boxes[pattern[1] - 1].innerText && boxes[pattern[1] - 1].innerText === boxes[pattern[2] - 1].innerText) {
                winner.style.display = "flex";
                winner.innerText = `Congo winner is ${boxes[pattern[0] - 1].innerText}`;
                newgame.style.display="flex";
                newtab.style.height="700px";
                disablebutton();
                break;
            }
        }
    }
}
//reset button
reset.addEventListener("click",()=>{
       enablebutton();
       hidewinner();
});
//new button
newgame.addEventListener("click",()=>{
    enablebutton();
    hidewinner();
});

