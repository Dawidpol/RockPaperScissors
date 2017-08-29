//Getting selecten weapon from the html
$(document).ready(function() {
  var gameController = new GameController();

  $('#rock-selector').click(function() {
    gameController.startGame(new Rock());
  });
  $('#paper-selector').click(function() {
    gameController.startGame(new Paper());
  });
  $('#scissors-selector').click(function() {
    gameController.startGame(new Scissors());
  });
});
