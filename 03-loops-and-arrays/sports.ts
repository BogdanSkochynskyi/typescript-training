let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimmong"];

for(let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

for(let tempSport of sportsOne) {
    if(tempSport == "Cricket") {
        console.log(tempSport + " << My favorite!");
    } else {
        console.log(tempSport);
    }
}

