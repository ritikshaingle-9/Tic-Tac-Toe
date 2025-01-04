const board=[-1,-1,-1,-1,-1,-1,-1,-1];
const name=document.getElementById('currentplayer');
let currentplayer='x';

function renderboard(){
   const allboxes= document.querySelectorAll('.box');

   allboxes.forEach((boxelement,i)=>{
    if(board[i]==="x")
    {
     boxelement.innerHTML='<img src=./../images/moon.png height="60px" width="60px"/>';
    }
    else if(board[i]==="o"){
     boxelement.innerHTML='<img src=./../images/star.png height="60px" width="60px"/>';
    }
    else{
    boxelement.innerHTML='';
    }
   });
}
renderboard();

function addplayer(){
const playerone = document.getElementById('playerone');
const playertwo = document.getElementById('playertwo');
const nameofoneplayer = playerone.value;
const nameoftwoplayer = playertwo.value;
localStorage.setItem("player 1",nameofoneplayer);
localStorage.setItem("player 2",nameoftwoplayer);
}

function play(num){
   board[num]= currentplayer;
   renderboard();

   if(currentplayer ==="x"){
      currentplayer="o";
      name.innerHTML=localStorage.getItem("player 1");
   }
   else{
      currentplayer ="x";
       name.innerHTML=localStorage.getItem("player 2");
   }
}

function resetgame(){
   board.fill(-1);
   renderboard();
   name.innerHTML=localStorage.getItem("player 1");
}