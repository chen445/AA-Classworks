const MoveError = require('./../../solution/moveError.js');
class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.grid').on('click','li',(el)=>{
      const $square=$(el.target);
      this.makeMove($square);
    } )
  }

  makeMove($square) {
    const pos = $square.data('pos');
    try {
      this.game.playMove(pos);
    } catch (e) {
      if (e instanceof MoveError) {
        // alert (e.msg);
      } else {
        throw e;
      }
    }
    $square.text(this.game.currentPlayer)
    $square.toggleClass('clicked');
  }

  setupBoard() {
    const $ulElement = $("<ul></ul>");
    $ulElement.addClass('grid');
    for (let i=0; i<3; i++){
      for(let j=0; j<3; j++){
      let $liElement = $("<li></li>");
      $liElement.addClass('cells');
      $liElement.data('pos',[i,j]);
      $ulElement.append($liElement);
      }
    }
    this.el.append($ulElement);
  }
}



module.exports = View;
