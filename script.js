
class Game {
  constructor() {
    this.player = "X";
    this.gameOver = false;
    this.win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  constructGame() {
    this.gameOver = false;
    this.boardGame = document.querySelector("#board");
    this.title = document.querySelector("#sub_title");
    this.title.innerText = `Press play`;
    this.boardGame.innerHTML = "";
    this.board = new Array(9).fill("");
    for (let i = 0; i < this.board.length; i++) {
      board.innerHTML += `<div id="${i}" class="cell"></div>`;
    }
  }

  playGame() {
    this.#addEventListnerCells();
    this.title.innerText = `Vez de ${this.player}`;
  }

  #addEventListnerCells() {
    const cells = this.boardGame.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", (element) => {
        if (!this.gameOver) {
          this.#click(element);
        }
      });
    }
  }

  #write(element, cell) {
    element.target.innerText = this.player;
    this.board[cell] = this.player;
  }

  #click(element) {
    const cell = Number(element.target.id);
    if (!this.board[cell]) {
      this.#write(element, cell);
      if (this.#VerifyWin()) return this.#winner();
      if (this.#verifiGameOver()) return;
      this.#changePlayer();
      this.title.innerText = `Vez de ${this.player}`;
    }
  }

  #winner() {
    this.gameOver = true;
    this.title.innerText = `${this.player} ganhou!`;
    this.#removeEventListnersCells();
  }

  #changePlayer() {
    if (this.player == "X") return (this.player = "O");
    else return (this.player = "X");
  }

  #removeEventListnersCells() {
    const cells = this.boardGame.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].removeEventListener("click", this.#click, true);
    }
  }

  #VerifyWin() {
    for (let i in this.win) {
      if (
        this.board[this.win[i][0]] == this.player &&
        this.board[this.win[i][1]] == this.player &&
        this.board[this.win[i][2]] == this.player
      ) {
        return true;
      }
    }
  }

  #verifiGameOver() {
    let quant = 0;
    this.board.forEach((value) => {
      if (value) {
        quant += 1;
      }
    });
    if (quant == 9) {
      this.title.innerText = "Deu velha";
      this.#removeEventListnersCells();
      return 1;
    }
  }
}



const game = new Game();
game.constructGame();
game.playGame();
