do {

function randomLocation(array){
  let num = Math.floor(Math.random() * array.length)
  return array[num]
}


function randomBistro(array){
    let num = (Math.floor(Math.random() * array.length))
      return array[num]
  }

  function randomTransport(array){
    let num = (Math.floor(Math.random() * 4))
     return array[num]
  }

  function randomEntertain(array){
    let num = (Math.floor(Math.random() * 5))
     return array[num]
 
  }
  let placeToSee = ['Rio', 'Brazil', 'Hungary', 'Poland', 'Turkey']
  let randomPlace = randomLocation(placeToSee);
  
  let placeToEat = ['hamburger', 'spaghetti', 'chicken', 'ribs', 'porkchops'];
  let randomFood = randomBistro(placeToEat);
  
  let howToTransport = ['airplane', 'car', 'motorcycle', 'bicycle'];
  let randomTransp = randomTransport(howToTransport);
  
  let wayToEntertain = ['tv','phone', 'xbox', 'playstation', 'laptop'];
  let entertainment = randomEntertain(wayToEntertain);
  

  

alert("Your random destination is " + randomPlace + ". What you are going to have for dinner is " + randomFood + ", while riding a "+randomTransp + " also watching a movie on your "+entertainment + ".");
 userinput = prompt("Do you like the selection? Y/N");
} while (userinput == Y);