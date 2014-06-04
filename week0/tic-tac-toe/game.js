"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    winner = false,
    end = false,
    player = "",
    firstPlayerNickname = "",
    secondPlayerNickname = "",
    positionX = null,
    positionY = null,
    position = null;

    firstPlayerNickname = prompt("First player nickname(X or O)> ");
    secondPlayerNickname = prompt("First player nickname(X or O)> ");

  while(!winner && !end) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for x");

    } else {
      console.log("Place for y");
    }

    // this is blocking prompt
    position = prompt("x y>");
    console.log(position);

    position = position.split(" ");
    positionX = position[0];
    positionY = position[1];
    if (validatePosition(positionX, positionY, board)) {
      if (xTurn) {
        board[positionX - 1][positionY - 1 ] = firstPlayerNickname;
        player = firstPlayerNickname;
      }
      else {
        board[positionX - 1][positionY - 1 ] = secondPlayerNickname;
        player = secondPlayerNickname;
      }
      winner = checkWinner(board, player);
      end = checkEnd(board);
      xTurn = !xTurn;
    }
  }
}

function validatePosition(positionX, positionY, board) {
  var n = board.length;

  if (positionX < 1 || positionX > n || positionY < 1 || positionY > n) {
    console.log("Invalid position!");
    return false;
  }

  if (board[positionX - 1][positionY - 1] !== "*") {
    console.log("The position is already taken!");
    return false;
  }

  return true;
}

function checkWinner(board, player) {
  var
    i = 0,
    j = 0,
    row = "",
    column = "",
    main_diag = "",
    second_diag = "",
    n = board.length,
    k = n - 1;

  for (i; i < n; i++) {
    for (j = 0; j < n; j++){
      column += board[i][j];
    }
    if (column === "XXX" || column === "OOO") {
        console.log(player + " wins!");
        return true;
    }
    column = "";
    row = board[i].join("");
    main_diag += board[i][i];
    if (row === "XXX" || row === "OOO") {
      console.log(player + " wins!");
      return true;
    }

    second_diag += board[i][k]; k--;

    row = "";
  }

  if (main_diag ==="XXX" || main_diag === "OOO" || second_diag === "XXX" || second_diag === "OOO") {
    console.log(player + " wins!");
      return true;
  }

  return false;
}

function checkEnd(board) {
  var
    i = 0,
    j = 0,
    n = board.length;

    for (i; i < n; i++) {
      for (j = 0; j < n; j++)
        if (board[i][j] === "*") {
          return false;
        }
    }
    printBoard(board);
    console.log("Game ends without a winner.");
    return true;
}

gameLoop();
