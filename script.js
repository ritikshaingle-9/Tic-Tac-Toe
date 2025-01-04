const board=[-1,-1,-1,-1,-1,-1,-1,-1];
let currentplayer='x';

function renderboard(){
   const allboxes= document.querySelectorAll('.box');

   allboxes.forEach((boxelement,i)=>{
    if(board[i]==="x")
    {
     boxelement.innerHTML='<img src=./../images/moon.png height="90px" width="90px"/>';
    }
    else if(board[i]==="o"){
     boxelement.innerHTML='<img src=./../images/star.png height="90px" width="90px"/>';
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
   const name=document.getElementById('currentplayer');

   if(currentplayer ==="x"){
      currentplayer="o";
      name.innerHTML=localStorage.getItem("player 1");
   }
   else{
      currentplayer ="x";
       name.innerHTML=localStorage.getItem("player 2");
   }
}
