// 3 rows and 3 columns
// every tile has an id in order to identify it
// every time we click a tile we make a check to see if there is a winner 


let board;
let noSituation = ' ';
let myTurn = 'X';
let computersTurn = 'O';
let currentSituation = myTurn;
let gameOver = true;

window.onload = function(){
  setGame();
}

function setGame(){
  board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]

  // r = row && c = column
  // for every row starting index 0 and ending with 2, because we have only 3 columns we check every column index. Intersection between rows and column

  for (let r = 0; r < 3; r++){
    for (let c = 0; c < 3; c++){
      // know we know all the indexes of the tiles. We can start adding divs, the actuals tiles 
      let tile = document.createElement("div");
      // every intersectation of the rows and columns we'll give us the id for every div
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      if ( r == 0 || r == 1){
        tile.classList.add("horizontal-line");
      }
      if( c == 0 || c == 1){
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", setTile);
      document.getElementById("board").append(tile);
      startButton();
      resetButton();
    } 
  }
}


function setTile(){
  if (gameOver){
    return;
  }

  let coords = this.id.split("-"); // "2-1" ==> ["2", "1"]
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  if (board[r][c] != ' '){
    return;
  }

  board[r][c] = currentSituation;
  this.innerText = currentSituation;
  autoPlay2();
  theWinnerIs();
 
}


function theWinnerIs(){

  //checking horizontally
  for (let r = 0; r < 3; r++){
    if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' '){
      for (let i = 0; i < 3; i++){
        let tile = document.getElementById(r.toString() + '-' + i.toString());
        tile.classList.add("winner");
      }
      gameOver = true;
      document.getElementById('letstart').innerHTML = '';
      document.getElementById('winnerWho').innerHTML = '';
      if ( board[r][0] == myTurn){
      document.getElementById('welldone').innerHTML = 'WELL DONE HUMAN';
      }
      else{
        document.getElementById('welldone').innerHTML = 'WELL DONE PC';
      }
      return;
    }
  }
  
  //checking vertically
  for (let c = 0; c < 3; c++){
    if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' '){
      for (let i = 0; i < 3; i++){
        let tile = document.getElementById(i.toString() + '-' + c.toString());
        tile.classList.add("winner");
      }
      gameOver = true;
      document.getElementById('letstart').innerHTML = '';
      document.getElementById('winnerWho').innerHTML = '';
      if ( board[0][c] == myTurn){
        document.getElementById('welldone').innerHTML = 'WELL DONE HUMAN';
        }
        else{
          document.getElementById('welldone').innerHTML = 'WELL DONE PC';
        }
      done.style.color = 'green';
      return;
    }
  }

  //checking diagonally
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
    tile = document.getElementById("0-0");
    tile.classList.add("winner");

    tile = document.getElementById("1-1");
    tile.classList.add("winner");
    
    tile = document.getElementById("2-2");
    tile.classList.add("winner");
  
    gameOver = true;
    document.getElementById('letstart').innerHTML = '';
    document.getElementById('winnerWho').innerHTML = '';
    if ( board[0][0] == myTurn){
      document.getElementById('welldone').innerHTML = 'WELL DONE HUMAN';
      }
      else{
        document.getElementById('welldone').innerHTML = 'WELL DONE PC';
      }
    done.style.color = 'green';
    return;
  }

  //checking anti-diagonally
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' '){
    tile = document.getElementById("0-2");
    tile.classList.add("winner");

    tile = document.getElementById("1-1");
    tile.classList.add("winner");
    
    tile = document.getElementById("2-0");
    tile.classList.add("winner");
  
    gameOver = true;
    document.getElementById('letstart').innerHTML = '';
    document.getElementById('winnerWho').innerHTML = '';
    if ( board[0][2] == myTurn){
      document.getElementById('welldone').innerHTML = 'WELL DONE HUMAN';
      }
      else{
        document.getElementById('welldone').innerHTML = 'WELL DONE PC';
      }
    done.style.color = 'green';
    return;
  }
    
}

let resetBtn = document.getElementById('resetBtn');
let element = document.getElementById('start_game');
let checkWinner = document.getElementById('letstart');


function resetButton(){
  resetBtn.addEventListener("click", setTile =>{
    console.log('the game was reseted');
    document.getElementById('letstart').innerHTML = '';
    document.getElementById('winnerWho').innerHTML = '';
    document.getElementById('welldone').innerHTML = '';
    resetBtn.style.color = 'white';
    resetBtn.style.backgroundColor = 'green';
    element.style.color = 'green';
    element.style.backgroundColor = 'aliceblue';
    let checkWinner = document.getElementById('letstart').innerHTML = 'The game was reseted';
    gameOver = true;
    return;
    })
}

function startButton(){

  element.addEventListener("click", ()=>{
    console.log('the game just started');
    element.style.color = 'white';
    element.style.backgroundColor = 'green';
    resetBtn.style.backgroundColor = 'aliceblue';
    resetBtn.style.color = 'green';
    checkWinner.innerHTML = 'Please select a tile';
    gameOver = false;
  })

}

function reseting(){
  tile2 = getElementById("tile");
  tile2.id = r.toString() + "-" + c.toString();
  tile2.classList.add("tile");
  if( (r != noSituation) || (c!= noSituation)){
    tile2 = noSituation;
    document.getElementById("board").append(tile2);
  }

  return;
}


function autoPlay2(){

    const randomNumber = Math.floor(Math.random()*9);
    console.log(randomNumber);
    if (currentSituation === myTurn){
      if (randomNumber == 0 && document.getElementById('0-0') == ' '){
        document.getElementById('0-0').innerHTML = computersTurn;
      }
      else if (randomNumber == 1 && document.getElementById('0-1') != ' '){
        document.getElementById('0-1').innerHTML = computersTurn;
      }
      else if (randomNumber == 2 && document.getElementById('0-2') != ' '){
        document.getElementById('0-2').innerHTML = computersTurn;
      }
      else if (randomNumber == 3 && document.getElementById('1-0') != ' '){
        document.getElementById('1-0').innerHTML = computersTurn;
      }
      else if (randomNumber == 4 && document.getElementById('1-1') != ' '){
        document.getElementById('1-1' ).innerHTML = computersTurn;
      }
      else if (randomNumber == 5 && document.getElementById('1-2') != ' '){
        document.getElementById('1-2').innerHTML = computersTurn;
      }
      else if (randomNumber == 6 && document.getElementById('2-0') != ' '){
        document.getElementById('2-0').innerHTML = computersTurn;
      }
      else if (randomNumber == 7 && document.getElementById('2-1') != ' '){
        document.getElementById('2-1').innerHTML = computersTurn;
      }
      else if (randomNumber == 8 && document.getElementById('2-2') != ' '){
        document.getElementById('2-2').innerHTML = computersTurn;
      }
    }
    else{
      currentSituation = myTurn;
    }
  }    