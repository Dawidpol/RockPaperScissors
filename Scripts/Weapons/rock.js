function Rock(){
  Weapon.call(this);

  this.getName = function(){
    return 'Rock';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Scissors;
  }
}
