var montyHall = function (numTimes) {
    var result = 0;
    for (var i = 0; i < numTimes; i++) {
	var prizeDoor = Math.floor(Math.random()*3);
	var pick1 = Math.floor(Math.random()*3);
	result += (pick1 === prizeDoor);
    }
    result = result/numTimes*100
    console.log("stay won " + result + "%");
    console.log("switch won " + (100 - result) + "%");
}

montyHall(1000);
