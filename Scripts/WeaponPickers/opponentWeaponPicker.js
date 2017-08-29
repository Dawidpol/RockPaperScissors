function OpponentWeaponPicker(){
  var availableWeapons = (new AvailableWeaponsEnumerator()).weapons;

  this.pickNewWeapon = function(){
    var choosenWeaponIndex = Math.floor((Math.random() * availableWeapons.length));

    return availableWeapons[choosenWeaponIndex];
  }
}
