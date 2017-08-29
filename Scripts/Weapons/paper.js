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
