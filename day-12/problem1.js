/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1 && this.big !== 0) {
    this.big--;
    return true;
  } else if (carType === 2 && this.medium !== 0) {
    this.medium--;
    return true;
  } else if (carType === 3 && this.small !== 0) {
    this.small--;
    return true;
  } else {
    return false;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * vavarvarrvar param_1 = obj.addCar(carType)
 */

const parkingSystem = new ParkingSystem(0, 0, 1);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
// console.log(parkingSystem.addCar(1));
// console.log(parkingSystem.addCar(3));
