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

console.log("Your random destination is " + randomPlace + ". What you are going to have for dinner is " + randomFood + ", while riding a "+randomTransp + " also watching your "+entertainment + ".");