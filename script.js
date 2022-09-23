class Game {
  constructor() {
    this.board = [];
    this.player = "X";
    this.#constructGame();
  }

  playGame() {
    this.#addEventListnerCells();
  }

  #constructGame() {
    this.boardGame = document.querySelector("#board");
    this.title = document.querySelector("#sub_title");
    this.title.innerText = `Vez de ${this.player}`;

    for (let i = 0; i < 9; i++) {
      board.innerHTML += `<div id="${i}" class="cell"></div>`;

      this.board.push("");
    }
  }

  #addEventListnerCells() {
    const cells = this.boardGame.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", (element) => {
        this.#click(element);
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
      this.#changePlayer();
      this.title.innerText = `Vez de ${this.player}`;
    }
  }

  #changePlayer() {
    if (this.player == "X") return (this.player = "O");
    else return (this.player = "X");
  }
}
const game = new Game();
game.playGame();
