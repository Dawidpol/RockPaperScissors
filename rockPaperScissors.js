function GameController(){
  var oponentWeaponPicker = new OpponentWeaponPicker();

  this.startGame = function(playerWeapon){
    var opponentWeapon = oponentWeaponPicker.pickNewWeapon();

    if(playerWeapon.winWith(opponentWeapon)){
      alert('win');
    }else {
      alert('lose');
    }
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

  this.getName = function(){
    return 'Paper';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Rock;
  }
}

function Rock(){
  Weapon.call(this);

  this.getName = function(){
    return 'Rock';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Scissors;
  }
}

function Scissors(){
  Weapon.call(this);

  this.getName = function(){
    return 'Scissors';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Paper;
  }
}

function Weapon(){

  this.getName = function(){
    return 'Unknown weapon';
  }

  this.winWith = function(weaponToFightAgainst){
    return null;
  }
}
