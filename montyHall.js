var montyHall = function (numTimes) {
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
	result += (pick1 === prizeDoor);
    }
    result = result/numTimes*100
    console.log("stay won " + result + "%");
    console.log("switch won " + (100 - result) + "%");
}

montyHall(1000);
