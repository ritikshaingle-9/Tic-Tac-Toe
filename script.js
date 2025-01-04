const board=[-1,-1,-1,-1,-1,-1,-1,-1];
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
   if(isplayerpresent([0,1,2],"x")){
      alert("player x wins");
   }
   else if(isplayerpresent([3,4,5],"x")){
      alert("player x wins");
   }
   else if(isplayerpresent([6,7,8],"x")){
      alert("player x wins");
   }
   else if(isplayerpresent([0,3,6],"x")){
      alert("player x wins");
   }
   else if(isplayerpresent([1,4,7],"x")){
      alert("player x wins");
   }
   else if(isplayerpresent([2,5,8],"x")){
      alert("player x wins");
   }
   else if(isplayerpresent([1,4,8],"x")){
      alert("player x wins");
   }
   else if(isplayerpresent([2,4,6],"x")){
      alert("player x wins");
   }
}

if(isplayerpresent([0,1,2],"o")){
   alert("player x wins");
}
else if(isplayerpresent([3,4,5],"o")){
   alert("player x wins");
}
else if(isplayerpresent([6,7,8],"o")){
   alert("player x wins");
}
else if(isplayerpresent([0,3,6],"o")){
   alert("player x wins");
}
else if(isplayerpresent([1,4,7],"o")){
   alert("player x wins");
}
else if(isplayerpresent([2,5,8],"o")){
   alert("player x wins");
}
else if(isplayerpresent([1,4,8],"o")){
   alert("player x wins");
}
else if(isplayerpresent([2,4,6],"o")){
   alert("player x wins");
}
