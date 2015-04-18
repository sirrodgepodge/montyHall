var montyHall = function (numTimes, switched) {
    var result = 0;
    var doorPick = function(num){
	if(num <= (1/3)) {
	    return 1;
	} else if (num <= (2/3)) {
	    return 2;
	} else {
	    return 3;
	}
    };
    for (var i = 0; i < numTimes; i++) {
	var prizeDoor = doorPick(Math.random());
	var pick1 = doorPick(Math.random());
	result += (!switched && pick1 === prizeDoor) || (switched && pick1 !== prizeDoor);
    }
    return result/numTimes*100 + "% won";
}

console.log("stayed: " + montyHall(1000, false));
console.log("switched: " + montyHall(1000, true));
