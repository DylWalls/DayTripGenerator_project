function randomLocation(str){
  let num = (Math.floor(Math.random() * 5))
    for(let i=0; i <= num; i++){
        if (num == 0){
            console.log("Rio")
            return true
        }
        else if (num == 1){
            console.log("Brazil")
            return true
        }
        else if (num == 2){
            console.log("Hungary")
            return true
        }
        else if (num == 3){
            console.log("Poland")
            return true
        }
        else if (num == 4){
            console.log("Turkey")
            return true
        }
        else{
            return true;
        }
    }

}


let placeToSee = "Rio, Brazil, Hungary, Poland, Turkey";
let randomPlace = randomLocation(placeToSee);