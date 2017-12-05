// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();

//This will output my name is keith. by usuing the variable keith outside of the function.


// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());

// It prints out 3, because the variable score is outside of the function. It cant override.


// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();

//It loops through the my animals array within the function, so it prints output
//0, 1, 2, ducks, dogs, lions.



// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

//this lists all the suspects above the function and then shows that keith is the third suspect.

// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());

//this is printing out the detectiveInfo so it will print out Poirot.

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//called the outerfunction which is marc, then it logs murderer which is rick.
