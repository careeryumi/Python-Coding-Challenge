<!DOCTYPE html>
<html>
<body>

<h1>JavaScript console.log() Method</h1>

<p>Press F12 on your keyboard to view the message in the console view.</p>

<script>


var counter = makeCounter();
console.log(counter.value());
// 0

var counter2 = makeCounter(4);

console.log(counter2.value());
// 4

console.log(counter2.increment());
// 5
console.log(counter2.value());
// 5

counter2.decrement();
counter2.decrement();
console.log(counter2.decrement());
// 2

function makeCounter(start) {


    var start;
    
    if(start == null){
     start = 0;
    }
    else{
     start = start;
    }
    
  const makeCounter = {
    
    value: function() { return start; },
    increment :  function() { 
        start = start + 1;
    	return start; },
    decrement :  function() {        
        start = start - 1;
    	return start;  }
 }
 
 return makeCounter;
}



</script>

</body>
</html>
//////////////////////

In JavaScript, define a function `minArgs` which accepts any number of numerical arguments and returns the minimum value. Next, show how you would use the function you just created (without modification) to find the minimum of values in an array.

Example:

minArgs(1, -6, 78, 12, 45.5, -6.9); // -6.9

-------


var minArg = minArgs(1, -6, 78, 12, 45.5, -6.9);

function minArgs(){
console.log(arguments);
var min = 0;

var minNum = Math.min(...arguments);

return minNum;

}

console.log(minArg);

///////////////////////////

const test = group([6.5, 4.2, 6.3], Math.floor);

var keyValueString ="";

var keySize = Object.keys(test).length;

Object.keys(test).forEach((key, index)=>{

     if(index < (keySize -1)  ){
     
     keyValueString += "'"+key+ "'"+" : ["+test[key]+"], " 
     }
     else{
     keyValueString += "'"+key+ "'"+" : ["+test[key]+"] " 
     }

	 
	
});

keyValueString = "{ "+ keyValueString + "}";

//console.log(test);

console.log(keyValueString);


function group(collection, grouper){

	const resultSet = {};

	for( i=0; i< collection.length; i++){

		var key = grouper( collection[i] );
        
        var checkIfHasKey = resultSet.hasOwnProperty(key);
 
        if(!checkIfHasKey){
        
        	resultSet[key] = [collection[i]];
        
        }
        else{
        	resultSet[key].push(collection[i]);}

	}

	return resultSet;
}
////////////////////////////////////
