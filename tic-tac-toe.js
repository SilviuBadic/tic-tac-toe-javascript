// 3 rows and 3 columns
// every tile has an id in order to identify it
// every time we click a tile we make a check to see if there is a winner 


let board;
let myTurn = 'X';
let computersTurn = 'O';
let currentSituation = computersTurn;
let gameOver = false;

window.onload = function(){
  setGame();
}

function setGame(){
  board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
  ]

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

  if (currentSituation === myTurn){
    currentSituation = computersTurn;
  }
  else {
    currentSituation = myTurn;
  }

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
    return;
  }
}
