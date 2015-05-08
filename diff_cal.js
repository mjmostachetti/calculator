
var newArray = process.argv.splice(2);
var operand;

for(var i = 0; process.argv.length > i; i++){

	for(var x = 0; newArray.length > x; x++){
		if(newArray[x] === '*'){
			operand = x;
			break;
		}else if(newArray[x] === '/'){
			operand = x;
		}
	}

	if(newArray[operand] === '*'){
			var newMult = newArray[operand+1] * newArray[operand-1];
			newArray.splice(operand-1,3,newMult);
	}else if(newArray[operand] === '/'){
			var newDiv = newArray[operand+1] / newArray[operand-1];
			newArray.splice(operand-1,3,newDiv);
	}

	for(var x = 0; newArray.length > x; x++){
		if(newArray[x] === '+'){
			operand = x;
			break;
		}else if(newArray[x] === '-'){
			operand = x;
		}
	}

	if(newArray[operand] === '+'){
			var newAdd = newArray[operand+1] + newArray[operand-1];
			newArray.splice(operand-1,3,newAdd);
	}else if(newArray[operand] === '-'){
			var newSub = newArray[operand+1] - newArray[operand-1];
			newArray.splice(operand-1,3,newSub);
	}


}
console.log(newArray.toString());

//[100,/,10]

/*
newArray.forEach(function(x,index){
	if(x === '*' || x === '/'){
		if(x === '*'){
			var newMult = newArray[index+1] * newArray[index-1]
			nextArray.push(newMult)
			newArray.splice(index-1,3)
		} else if(x === '/'){
			var newDiv = newArray[index+1] / newArray[index-1]
			newArray.splice(index-1,3,newDiv)
		}
	}
})
console.log(newArray)

10  0
* 1
10 * 10

100,/,10

10 + 10 + 10 - 10

for looop for as many opertions we'll do
	for loop to check for type of operation we'll do
	*/
