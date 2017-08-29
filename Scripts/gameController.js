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
