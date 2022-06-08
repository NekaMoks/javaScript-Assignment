//1.) Create a function with a function name printSum() and print the sum of an array.
function printSum(arrays) {
    var printSum = 0;
        for (let i = 0; i < arrays.length; i++) {
            var elements = arrays [i];
            printSum = printSum + elements;
        }
    return printSum;
 
}
const arrays = [2,3,4,5,6,4,6,7,8,9];
console.log(printSum(arrays));




/** 2.)  Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.**/

// Create a function named compareTriplets containing both parameters.
function compareTriplets(arrAl, arrBo) {

    // Store the array length into the variable 'num'.
	let num = 3;
    
    // Initialize the score for Alice and Bob to 0, respectively.
    let arrAlScore = 0;
    let arrBoScore = 0;

    // Loop through both arrays for their ratings.
    for (let i = 0;  i < num; i++){

        // Compare both ratings based on the array index and assign one point to the score of the person with the greater rating for every loop.
        if ( arrAl[i] > arrBo[i])
        {
            arrAlScore+=1;
        }
        else {
        if ( arrAl[i] < arrBo[i])
        {
            arrBoScore+=1;    
        }  
        } 
    }

    // Return the comparison array with the cumulative points of Alice and Bob
    let comparison_array = [arrAlScore,  arrBoScore];
    return comparison_array;
}
const arrAl = [20, 48, 80];
const arrBo = [99, 35, 10];
console.log(compareTriplets(arrAl, arrBo));




//3.) Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimal.

// Create a function named positiveNegativeZero of an array to find the ratio of positive, negative, and zero elements
function positiveNegativeZero(arr){
	
	// Store the array length into the variable 'num'.
	let num = arr.length;

	// Initialize the postiveCount, negativeCount, and zeroCount by 0 which will count the total number of positive, negative and zero elements
	let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;

	// Traverse the array and count the total number of positive, negative, and zero elements.
	for(let i = 0; i < num; i++){
		if (arr[i] > 0)
		{
			positiveCount++;
		}
		else if (arr[i] < 0)
        {
		    negativeCount++;
		}
		else if (arr[i] == 0)
		{
			zeroCount++;
		}
	}

	// Print the ratio of positive, negative, and zero elements in the array up to six decimal places.
	console.log((positiveCount / num).toFixed(6) + " ");
    console.log((negativeCount / num).toFixed(6) + " ");
    console.log((zeroCount / num).toFixed(6));
}
const arr = [-1,-3,-5,-7,0,2,4,6];
console.log(positiveNegativeZero(arr));




//4.) Create a function with a function name firstFunction() and return the sum of two integers(numbers)
function firstFunction(int1, int2) {
    let sum = int1 + int2;
    return sum;
}
console.log(firstFunction(35, 2));