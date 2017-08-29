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
