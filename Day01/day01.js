//01 - The greetFriend function will take a string of a name, and should return a string greeting them as in the examples below.

function greetFriend(name) {
	
	return "Hello" + " " + name + "!";
}

console.log(greetFriend("Daiane"));

//02 - Write a function that takes two numbers and returns the sum of those numbers.
function add(a, b) {
	
	return a + b;
}

console.log(add(7, 8));

//03 Complete the function findFirstOdd, so that it takes an array of numbers and returns the first odd number.
function findFirstOdd(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 !== 0) {
			return numbers[i];
		}
	}
	return undefined;
}

console.log(findFirstOdd([1, 4, 5]));

//04 Write a function that takes a single integer and returns a string of "odd" if it is an odd number, or "even" if it is even.
	function oddOrEven(num) {
		
		if (num % 2 !== 0) {
			return "odd";
		} else {
			return "even";
		}
	}

//05 Write a function that takes a user object, which represents a user of the Northcoders website, and returns the value of the password key from that object.
//If the user object does not contain a password key, the function should instead return undefined.

function retrievePassword(user) {
	
	if (user.password) {
		return user["password"];
	}

	return undefined;
}

//06 Write a function that takes an object, and a string of the name of a key on that object. It should return the value of that key.
function retrieveKey(object, key) {
	
	if (key in object) {
		return object[key];
	}
	return undefined;
}

//07 This function will take an array of values, and should return an array of all the even length strings. Anything that's not a string, or not a string of even length, should not be returned in the array. If there are no even length strings, it should return an empty array.
function findEvenLengthStrings(items) {
	
	const evenLengthStrings = [];
	for (let i = 0; i < items.length; i++) {
		if (typeof items[i] === "string") {
			if (items[i].length % 2 === 0) {
				evenLengthStrings.push(items[i]);
			}
		}
	}
	return evenLengthStrings;
}

//08 Write a function that takes a string, and returns true if it is a palindrome, and false if it is not.
function isThisAPalindrome(str) {
	
	let rev = str.split("").reverse().join("");

	if (rev === str) {
		return true;
	}
	return false;
}

//09 Write a function that takes an array of numbers and returns the biggest and smallest in an object.
function findBiggestAndSmallest(numbers) {
	
	if (numbers.length === 0) {
		return {};
	}
	let smallest = numbers[0];
	let biggest = numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < smallest) {
			smallest = numbers[i];
		}
		if (numbers[i] > biggest) {
			biggest = numbers[i];
		}
	}
	return { smallest: smallest, biggest: biggest };
}

//10 Write a function that takes a single positive integer as its argument. If the number is prime, it should return true. Otherwise, it should return false.
function checkIsPrime(num) {

	if (num <= 1) {
		return false;
	}
	if (num === 2) {
		return true; 
	}
	if (num % 2 === 0) {
		return false;
	}

	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}