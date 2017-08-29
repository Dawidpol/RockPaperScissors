function Paper(){
  Weapon.call(this);

  this.getName = function(){
    return 'Paper';
  }

  this.winWith = function(weaponToFightAgainst){
    return weaponToFightAgainst instanceof Rock;
  }
}
