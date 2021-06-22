function randomLocation(str){
  let num = (Math.floor(Math.random() * 5))
    for(let i=0; i <= num; i++){
        if (num == 0){
            console.log("Rio")           
        }
        else if (num == 1){
            console.log("Brazil")           
        }
        else if (num == 2){
            console.log("Hungary")           
        }
        else if (num == 3){
            console.log("Poland")     
        }
        else if (num == 4){
            console.log("Turkey")           
        }
        else{}
        return true;
    }

}



function randomBistro(str){
    let num = (Math.floor(Math.random() * 5))
      for(let i=0; i <= num; i++){
          if (num == 0){
              console.log("Hamburger")           
          }
          else if (num == 1){
              console.log("Spaghetti")           
          }
          else if (num == 2){
              console.log("Chicken")           
          }
          else if (num == 3){
              console.log("Ribs")     
          }
          else if (num == 4){
              console.log("Porkchops")           
          }
          else{}
          return true;
      }
  
  }
  function randomTransport(str){
    let num = (Math.floor(Math.random() * 4))
      for(let i=0; i <= num; i++){
          if (num == 0){
              console.log("Airplane")           
          }
          else if (num == 1){
              console.log("Car")           
          }
          else if (num == 2){
              console.log("Motorcycle")           
          }
          else if (num == 3){
              console.log("Bicycle")     
          }
          else{}
          return true;
      }
  
  }
  function randomEntertain(str){
    let num = (Math.floor(Math.random() * 5))
      for(let i=0; i <= num; i++){
          if (num == 0){
              console.log("TV")           
          }
          else if (num == 1){
              console.log("Phone")           
          }
          else if (num == 2){
              console.log("Xbox")           
          }
          else if (num == 3){
              console.log("Playstation")     
          }
          else if (num == 4){
              console.log("Laptop")           
          }
          else{}
          return true;
      }
  
  }
  
  let placeToSee = "Rio, Brazil, Hungary, Poland, Turkey";
  let randomPlace = randomLocation(placeToSee);
  let placeToEat = "Hamburger, Spaghetti, Chicken, Ribs, Porkchops";
  let randomfood = randomBistro(placeToEat);
  let howToTransport = "Airplane, Car, Motorcycle, Bicycle";
  let randomTransp = randomTransport(howToTransport);
  let wayToEntertain = "Tv, Phone, Xbox, Playstation, Laptop";
  let entertainment = randomEntertain(wayToEntertain);
  let dayTrip = ("You are going to ", +randomLocation, " while eating ", +randomBistro, " in a ", +randomTransp, ", you are also watching ", +randomEntertain);
  console.log(dayTrip);