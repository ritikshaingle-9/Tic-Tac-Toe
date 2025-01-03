const board=[-1,-1,x,-1,-1,-1,o,-1];

function renderboard(){
   const allboxes= document.querySelectorAll('.box');

   allboxes.forEach((boxelement,i)=>{
    if(board[i]=='x')
    {
     boxelement.innerHTML='pqr';
    }
    else if(board[i]=='o'){
     boxelement.innerHTML='<img src=./../images/star.png />';
    }
    else{
    boxelement.innerHTML='';
    }
   })
}
renderboard();

function play(num)