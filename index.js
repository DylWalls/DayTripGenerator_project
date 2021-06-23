
let Yes = ("Y");
let randomPlace;
let randomFood;
let randomTransp;
let entertainment


do {
function randomArrayitem(array){
  let num = Math.floor(Math.random() * array.length)
  return array[num]
}


  let placeToSee = ['Rio', 'Brazil', 'Hungary', 'Poland', 'Turkey']
   randomPlace = randomArrayitem(placeToSee);
  
  let placeToEat = ['an hamburger', 'spaghetti', 'chicken', 'ribs', 'porkchops'];
   randomFood = randomArrayitem(placeToEat);
  
  let howToTransport = ['airplane', 'car', 'motorcycle', 'bicycle'];
   randomTransp = randomArrayitem(howToTransport);
  
  let wayToEntertain = ['tv','phone', 'xbox', 'playstation', 'laptop'];
   entertainment = randomArrayitem(wayToEntertain);
  
  
  

alert("Your random destination is " + randomPlace + ". What you are going to have for dinner is " + randomFood + ", while riding a "+randomTransp + " also watching a movie on your "+ entertainment + ".");
userinput = prompt("Do you like the selection? Y/N");
} while (userinput != Yes);
console.log("Your random destination is " + randomPlace + ". What you are going to have for dinner is " + randomFood + ", while riding a "+randomTransp + " also watching a movie on your "+ entertainment + ".");