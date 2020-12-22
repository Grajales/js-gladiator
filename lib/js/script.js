console.log("script loaded");
class Gladiator {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
    }
}
class Arena {
  constructor(name){
    this.name = name.charAt(0).toUpperCase()+ name.slice(1);
    this.gladiators = [];
    }
    addGladiator(gladiator) { 
      if(this.gladiators.length <2){                                     this.gladiators.push(gladiator)} else {
        console.log("Only two gladiators are allowed in the arena")
      } } ;
  
  fight(){if(this.gladiators.length>0)
  { if (this.gladiators[0].Gladiator.weapon ==    this.gladiators[1].Gladiator.weapon){console.log("you are both eliminated")} else if (
this.gladiators[0].Gladiator.weapon == "Spear") { if (this.gladiators[1].Gladiator.weapon == "Club") {console.log("Spear wins" + this.gladiators[0].Gladiator.name + "wins")} else if (this.gladiators[1].Gladiator.weapon == "Trident") { console.log("Trident wins" + this.gladiators[1].Gladiator.name + "wins")} } else if (this.gladiators[0].Gladiator.weapon == "Club"){ if (this.gladiators[1].Gladiator.weapon == "Spear") {console.log("Spear wins" + this.gladiators[1].Gladiator.name + "wins")} else if (this.gladiators[1].Gladiator.weapon == "Trident") { console.log("Club wins" + this.gladiators[0].Gladiator.name + "wins")} } else if (this.gladiators[0].Gladiator.weapon == "Trident"){ if (this.gladiators[1].Gladiator.weapon == "Spear") {console.log("Triden wins" + this.gladiators[0].Gladiator.name + "wins")} else if (this.gladiators[1].Gladiator.weapon == "Club") { console.log("Club wins" + this.gladiators[1].Gladiator.name + "wins")} } 
  
  } //end if length
 };
};
/*const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => 
const megalopolis = new Arena("megalopolis",["Maximus", "Tito"]);
console.log(megalopolis.name); // => Megalopolis
console.log(megalopolis.gladiators);
*/
const max = new Gladiator("Maximus", "Spear");
max
const titus = new Gladiator("Titus", "Spear");
const titus2 = new Gladiator("Titus2", "Club");
const colosseum = new Arena("Colosseum");
colosseum
colosseum.addGladiator(max);
colosseum
colosseum.addGladiator(titus);
colosseum
//colosseum.fight()




