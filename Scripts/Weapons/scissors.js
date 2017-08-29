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
