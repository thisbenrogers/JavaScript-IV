/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// function GameObject(obj) {
//   this.createdAt = obj.createdAt;
//   this.name = obj.name;
//   this.dimensions = obj.dimensions;
// }
// GameObject.prototype.destroy = function() {
//   console.log(`${this.name} was removed from the game.`);
// };

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
  constructor(characterObj) {
    super(characterObj);
    this.healthPoints = characterObj.healthPoints;
  }
  takeDamage() {
    this.healthPoints--;
    return `${this.name} took damage, and has ${this.healthpoints}`;
  }
}

// function CharacterStats(characterObj) {
//   GameObject.call(this, characterObj);
//   this.healthPoints = characterObj.healthPoints;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function() {
//   this.healthPoints--;
//   return `${this.name} took damage.`;
// };

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
  constructor(humanoidObj) {
    super(humanoidObj);
    this.team = humanoidObj.team;
    this.weapons = humanoidObj.weapons;
    this.language = humanoidObj.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

// function Humanoid(humanoidObj) {
//   CharacterStats.call(this, humanoidObj);
//   this.team = humanoidObj.team;
//   this.weapons = humanoidObj.weapons;
//   this.language = humanoidObj.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// };

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// *
// * Give the Hero and Villains different methods that could be used to remove health points from
// *      objects which could result in destruction if health gets to 0 or drops below 0
// *
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Villain extends Humanoid {
  constructor(villainObj) {
    super(villainObj);
  }
  fight() {
    this.takeDamage();
    if (this.healthPoints === 0) {
      return this.destroy();
    } else {
      return `${this.name} has ${this.healthPoints} health left.`;
    }
  }
}

// function Villain(villainObj) {
//   Humanoid.call(this, villainObj);
// }

// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.fight = function() {
//   this.takeDamage();
//   if (this.healthPoints === 0) {
//     return this.destroy();
//   } else {
//     return `${this.name} has ${this.healthPoints} health left.`;
//   }
// };

class Hero extends Humanoid {
  constructor(heroObj) {
    super(heroObj);
  }
  fight() {
    this.takeDamage();
    if (this.healthPoints === 0) {
      return this.destroy();
    } else {
      return `${this.name} has ${this.healthPoints} health left.`;
    }
  }
}

// function Hero(heroObj) {
//   Humanoid.call(this, heroObj);
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.fight = function() {
//   this.takeDamage();
//   if (this.healthPoints === 0) {
//     return this.destroy();
//   } else {
//     return `${this.name} has ${this.healthPoints} health left.`;
//   }
// };

const mage = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(mage.fight());
console.log(archer.fight());
console.log(swordsman.fight());
console.log(mage.fight());
console.log(archer.fight());
console.log(swordsman.fight());
console.log(archer.fight());
console.log(swordsman.fight());
console.log(archer.fight());
console.log(swordsman.fight());
console.log(archer.fight());
console.log(swordsman.fight());
console.log(mage.fight());
console.log(mage.fight());
console.log(archer.fight());
console.log(swordsman.fight());
console.log(archer.fight());
console.log(swordsman.fight());
console.log(swordsman.fight());
console.log(swordsman.fight());
console.log(archer.fight());
console.log(archer.fight());
console.log(archer.fight());
