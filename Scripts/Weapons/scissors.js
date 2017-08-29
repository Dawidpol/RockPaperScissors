function Scissors(){
  Weapon.call(this);

  this.getName = function(){
    return 'Scissors';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Paper;
  }
}
