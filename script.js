// TIC TAC TOE
let boxes = document.getElementsByClassName("box");
let para = document.getElementsByTagName("h1");
let btn=document.getElementsByTagName("button");
function Condition(){
   if (
      (boxes[4].innerHTML == "O" &&
        boxes[4].innerHTML == boxes[1].innerHTML &&
        boxes[4].innerHTML == boxes[7].innerHTML) ||
      (boxes[4].innerHTML == "O" &&
        boxes[4].innerHTML == boxes[0].innerHTML &&
        boxes[4].innerHTML == boxes[8].innerHTML) ||
      (boxes[4].innerHTML == "O" &&
        boxes[4].innerHTML == boxes[2].innerHTML &&
        boxes[4].innerHTML == boxes[6].innerHTML) ||
      (boxes[4].innerHTML == "O" &&
        boxes[4].innerHTML == boxes[5].innerHTML &&
        boxes[4].innerHTML == boxes[3].innerHTML)
    ) {
      para[0].innerHTML = "PLAYER 2 WINS ";
      return true;
    } else if (
      (boxes[0].innerHTML == "O" &&
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[0].innerHTML == boxes[2].innerHTML) ||
      (boxes[0].innerHTML == "O" &&
        boxes[0].innerHTML == boxes[3].innerHTML &&
        boxes[0].innerHTML == boxes[6].innerHTML) ||
      (boxes[8].innerHTML == "O" &&
        boxes[8].innerHTML == boxes[7].innerHTML &&
        boxes[8].innerHTML == boxes[6].innerHTML) ||
      (boxes[8].innerHTML == "O" &&
        boxes[8].innerHTML == boxes[5].innerHTML &&
        boxes[8].innerHTML == boxes[2].innerHTML)
    ) {
      para[0].innerHTML = "PLAYER 2 WINS ";
      return true;
    } if (
      (boxes[4].innerHTML == "X" &&
        boxes[4].innerHTML == boxes[1].innerHTML &&
        boxes[4].innerHTML == boxes[7].innerHTML) ||
      (boxes[4].innerHTML == "X" &&
        boxes[4].innerHTML == boxes[0].innerHTML &&
        boxes[4].innerHTML == boxes[8].innerHTML) ||
      (boxes[4].innerHTML == "X" &&
        boxes[4].innerHTML == boxes[2].innerHTML &&
        boxes[4].innerHTML == boxes[6].innerHTML) ||
      (boxes[4].innerHTML == "X" &&
        boxes[4].innerHTML == boxes[5].innerHTML &&
        boxes[4].innerHTML == boxes[3].innerHTML)
    ) {
      para[0].innerHTML = "PLAYER 1 WINS ";
      return true;
    } else if (
      (boxes[0].innerHTML == "X" &&
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[0].innerHTML == boxes[2].innerHTML) ||
      (boxes[0].innerHTML == "X" &&
        boxes[0].innerHTML == boxes[3].innerHTML &&
        boxes[0].innerHTML == boxes[6].innerHTML) ||
      (boxes[8].innerHTML == "X" &&
        boxes[8].innerHTML == boxes[7].innerHTML &&
        boxes[8].innerHTML == boxes[6].innerHTML) ||
      (boxes[8].innerHTML == "X" &&
        boxes[8].innerHTML == boxes[5].innerHTML &&
        boxes[8].innerHTML == boxes[2].innerHTML)
    ) {
      para[0].innerHTML = "PLAYER 1 WINS ";
      return true;
    
    }else{
      return false;
    }
  }


para[0].innerHTML = "PLAYER 1 ";
let i = 0;
for (let box of boxes) {
  box.addEventListener("click", () => {
   if (box.innerHTML == "" && i % 2 == 0 && Condition() == false  ){
      para[0].innerHTML = "PLAYER 1 ";
      box.innerHTML = "X";
      para[0].innerHTML='PLAYER 2';
      Condition();
      
    }else if (box.innerHTML == "" && i % 2 !== 0 && Condition() == false) {
      para[0].innerHTML = "PLAYER 2 ";
      box.innerHTML = "O";
      para[0].innerHTML="PLAYER 1";
      Condition()
    } else if(box.innerHTML=='O' || box.innerHTML=="X")  {
      return;
    }else
    {
         return;  
    }
    i++;
  });
}
