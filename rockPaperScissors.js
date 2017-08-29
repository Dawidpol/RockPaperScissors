function OpponentWeaponPicker(){
  var availableWeapons = (new AvailableWeaponsEnumerator()).weapons;

  this.pickNewWeapon = function(){
    var choosenWeaponIndex = Math.floor((Math.random() * availableWeapons.length));

    return availableWeapons[choosenWeaponIndex];
  }
}

function AvailableWeaponsEnumerator(){
  this.weapons = [new Rock(), new Paper(), new Scissors()];
}

function Paper(){
  Weapon.call(this);

  this.getName = function(){
    return 'Paper';
  }

  this.isWin = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Rock;
  }
}

function Rock(){
  Weapon.call(this);

  this.getName = function(){
    return 'Rock';
  }

  this.isWin = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Scissors;
  }
}

function Scissors(){
  Weapon.call(this);

  this.getName = function(){
    return 'Scissors';
  }

  this.isWin = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Paper;
  }
}

function Weapon(){

  this.getName = function(){
    return 'Unknown weapon';
  }

  this.isWin = function(weaponToFightAgainst){
    return null;
  }
}
