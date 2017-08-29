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
