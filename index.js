let boxes = document.querySelectorAll(".box");
let win= document.querySelector(".win");
let resetbtn = document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector(".msgcontainer");


let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const resetgame=()=>{
    turn0=true;
    enableboxes();
    msg.classList.add("hide");
 }
 boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("Box clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

         checkwinner();
    });
 });
   
   const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   };
   
   const enableboxes=()=>{
    for (let box of boxes){
       box.disabled=false;
       box.innerText= "";
    }
   };


   const showWinner= (winner)=>{
    win.innerText=`congratulation, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
   };
 const checkwinner=() => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
               console.log("win",pos1Val);
             showWinner(pos1Val);
           
            }
        }
    }
 };

 newbtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);