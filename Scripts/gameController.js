function GameController(){
  var oponentWeaponPicker = new OpponentWeaponPicker();

  this.startGame = function(playerWeapon){
    var opponentWeapon = oponentWeaponPicker.pickNewWeapon();
    changeOpponetWeapon(opponentWeapon);

    if(playerWeapon.winWith(opponentWeapon)){
      indicateWin();
    } else if (playerWeapon.isDraw(opponentWeapon)){
      indicateDraw();
    }else{
      indicateLoss();
    }
  }

  function changeOpponetWeapon(opponentWeapon){
    $('#opponent-weapon').attr('src', 'Img/' + opponentWeapon.getImageName());
  }

  function indicateWin(){
    var resultHeader = $('#result-text');
    resultHeader.html('You won');
    resultHeader.css('color', '#00ff00');

    $('.opponent-weapon-image-wrapper').css('background-color', '#00ff00');
  }

  function indicateDraw(){

  }

  function indicateDraw(){
    var resultHeader = $('#result-text');
    resultHeader.html('Draw');
    resultHeader.css('color', '#888');

    $('.opponent-weapon-image-wrapper').css('background-color', '#888');
  }

  function indicateLoss(){
    var resultHeader = $('#result-text');
    resultHeader.html('You lost');
    resultHeader.css('color', '#ff0000');

    $('.opponent-weapon-image-wrapper').css('background-color', '#ff0000');
  }
}
