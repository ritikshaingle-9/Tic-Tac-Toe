const board=[-1,-1,-1,-1,-1,-1,-1,-1];
let currentplayer="x";

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

function selectbox(num){
   
   if(board[num] != -1){
      alert("Invalid Move");
      return;
   }
   board[num]= currentplayer;
   renderboard();
   const currentplayername=document.getElementById('currentplayer');

   if(currentplayer ==="x"){
      currentplayer="o";
      currentplayername.innerHTML=localStorage.getItem("player 1");
   }
   else{
      currentplayer ="x";
      currentplayername.innerHTML=localStorage.getItem("player 2");
   }{
      checkforwinner();
   }
}


function resetgame(){
   board.fill(-1);
   renderboard();
   const currentplayername=document.getElementById('currentplayer');
   currentplayername.innerHTML=localStorage.getItem("player 1");
}

function isplayerpresent(places,player){
   const a = places[0];
   const b = places[1];
   const c = places[2];

   if(board[a]==player && board[b]==player && board[c]==player){
      return true;
   } else{
      return false;
   }
   }

function checkforwinner(){
   const playerone = localStorage.getItem("player 1");
   const playertwo = localStorage.getItem("player 2");
   if (isplayerpresent([0, 1, 2], "x")) {
       opendialogbox(playerone);
   } else if (isplayerpresent([3, 4, 5], "x")) {
       opendialogbox(playerone);
   } else if (isplayerpresent([6, 7, 8], "x")) {
       opendialogbox(playerone);
   } else if (isplayerpresent([0, 3, 6], "x")) {
       opendialogbox(playerone);
   } else if (isplayerpresent([1, 4, 7], "x")) {
       opendialogbox(playerone);
   } else if (isplayerpresent([2, 5, 8], "x")) {
       opendialogbox(playerone);
   } else if (isplayerpresent([0, 4, 8], "x")) {
       opendialogbox(playerone);
   } else if (isplayerpresent([2, 4, 6], "x")) {
       opendialogbox(playerone);
   }
   else if (isplayerpresent([0, 1, 2], "o")) {
      opendialogbox(playertwo);
  } else if (isplayerpresent([3, 4, 5], "o")) {
      opendialogbox(playertwo);
  } else if (isplayerpresent([6, 7, 8], "o")) {
      opendialogbox(playertwo);
  } else if (isplayerpresent([0, 3, 6], "o")) {
      opendialogbox(playertwo);
  } else if (isplayerpresent([1, 4, 7], "o")) {
      opendialogbox(playertwo);
  } else if (isplayerpresent([2, 5, 8], "o")) {
      opendialogbox(playertwo);
  } else if (isplayerpresent([0, 4, 8], "o")) {
      opendialogbox(playertwo);
  } else if (isplayerpresent([2, 4, 6], "o")) {
      opendialogbox(playertwo);
  }
}


function playagaingame(){
   const overlayelement=document.getElementById('overlay');
   overlayelement.style.display='none';
   location.reload();
}

function opendialogbox(player){
   const overlayelement=document.getElementById('overlay');
   const winnernameelement=document.getElementById('winnername');
   winnernameelement.innerHTML=`${player} wins!!`;
   overlayelement.style.display='flex';
}