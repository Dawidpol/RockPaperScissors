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

function OpponentWeaponPicker(){
  var availableWeapons = (new AvailableWeaponsEnumerator()).weapons;

  this.pickNewWeapon = function(){
    var choosenWeaponIndex = Math.floor((Math.random() * availableWeapons.length));

    return availableWeapons[choosenWeaponIndex];
  }
}

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

function AvailableWeaponsEnumerator(){
  this.weapons = [new Rock(), new Paper(), new Scissors()];
}

function Paper(){
  Weapon.call(this);

  this.getImageName = function(){
    return 'paper.png';
  }

  this.getName = function(){
    return 'Paper';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Rock;
  }
}

function Rock(){
  Weapon.call(this);

  this.getImageName = function(){
    return 'rock.png';
  }

  this.getName = function(){
    return 'Rock';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Scissors;
  }
}

function Scissors(){
  Weapon.call(this);

  this.getImageName = function(){
    return 'scissors.png';
  }

  this.getName = function(){
    return 'Scissors';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Paper;
  }
}

function Weapon(){

  this.getImageName = function(){
    return 'question_mark.png';
  }

  this.getName = function(){
    return 'Unknown weapon';
  }

  this.winWith = function(weaponToFightAgainst){
    return null;
  }

  this.isDraw = function(opponentWeapon){
    return this.constructor.name === opponentWeapon.constructor.name;
  }
}
