// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, index = 1, max = -Infinity) {
	const currentCandidate = array[index];
	if (currentCandidate > max) {
		max = currentCandidate;
	}

	if(index >= array.length){
		return max; //base case
	} else {
		return findMax(array, index+1, max);
	}
    // This function returns the largest number in a given array.
}

function factorial(n) {

    // This function returns the factorial of a given number.
		if(n <= 1) {
			return 1;
		} else {
			return n * factorial( n - 1 );
		}
}

//0(2^N)
function fibonacci(n) {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
		if (n <= 2) {
			return 1;
		} else {
			return fibonacci(n-1) + fibonacci(n-2);
		}
}

for ( let i = 0; i < array.length; i+= 1 ) {
	array[ i ]
}

function coinFlips(tosses){
	let combinations = [];
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
		const flip = function (soFar="") {
			if (soFar.length === tosses) {
				combinations.push(soFar);// base case
			} else {
				//recursive
				flip(soFar + 'H');
				flip(soFar + 'T');
			}
		};
		//start recursing
		flip();
		return combinations;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
