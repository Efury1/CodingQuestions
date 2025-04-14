// TOGGLE SECTION
// PLEASE NOTE THERE IS ACCIDENTLY EXTRA TOGGLES THAT AREN'T BEING USED

// This function toggles the visibility of the explanation for the Sum of Multiples problem
function toggleExplanation() {
    var explanation = document.getElementById("multiplesExplanation");
    // Check if the explanation is hidden (display = 'none')
    // If it is, change it to 'block' to make it visible
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        // If it's already visible, hide it by setting display to 'none'
        explanation.style.display = "none";
    }
}

// Problem 1: Sum of Multiples of 3 or 5 toggle explanation
function toggleMultiplesExplanation() {
    var explanation = document.getElementById("multiplesExplanation");
    // Toggle visibility of the explanation section
    if (explanation.style.display === "none") {
        explanation.style.display = "block"; // Show the explanation
    } else {
        explanation.style.display = "none"; // Hide the explanation
    }
}

// Problem 2: Fibonacci Sequence toggle explanation
function toggleFibonacciExplanation() {
    var explanation = document.getElementById("FibonacciExplanation");
    // Toggle visibility of Fibonacci explanation
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 3: Palindrome toggle explanation
function togglePalindromeExplanation() {
    var explanation = document.getElementById("PalindromicExplanation");
    // Toggle visibility of Palindrome explanation
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// This function toggles the visibility of the palindrome explanation
function toggleExplanation() {
    var explanation = document.getElementById("PalindromicExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block"; // Show the explanation
    } else {
        explanation.style.display = "none"; // Hide the explanation
    }
}

// Problem 4: Smallest Number toggle explanation
function toggleSmallestNumberExplanation() {
    var explanation = document.getElementById("SmallestNumberExplanation");
    // Toggle visibility of Smallest Number explanation
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 5: Prime Numbers toggle explanation
function togglePrimeNumberExplanation() {
    var explanation = document.getElementById("PrimeNumberExplanation");
    // Toggle visibility of Prime Number explanation
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 6: Grid toggle explanation
function toggleGridExplanation() {
    var explanation = document.getElementById("GridExplanation");
    // Toggle visibility of Grid explanation
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 7: Triangle toggle explanation
function toggleTriangleExplanation() {
    var explanation = document.getElementById("TriangleExplanation");
    // Toggle visibility of Triangle explanation
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 7 
// Toggle explanation visibility
function toggleGridExplanation() {
const explanation = document.getElementById("GridExplanation");
if (explanation.style.display === "none") {
    explanation.style.display = "block";
} else {
    explanation.style.display = "none";
}
}

// PROBLEM SOLVING BELOW

// Problem 1
// This function calculates the sum of all multiples of 3 or 5 below the given input number.
// The input is provided by the user.
// The function initializes a sum variable and iterates through all numbers from 1 to the input - 1.
// For each number, it checks if it is divisible by 3 or 5 using the modulus operator.
// If it is divisible, the number is added to the sum.
function handleSumMultiples() {
    var input = parseInt(document.getElementById("input1").value); // For the input we use parseInt() to convert string to interger
    var sum = 0; // Initialize the sum

    // Loop through numbers from 1 to input and check if divisible by 3 or 5
    for (var number = 1; number < input; number++) {
      if (number % 3 === 0 || number % 5 === 0) {
        sum += number; // Add number to sum if it's divisible by 3 or 5
      }
    }

    // Display the result 
    document.getElementById("output1").innerText = "Sum of multiples of 3 or 5 below " + input + " is: " + sum;
}



// Problem 2: Fibonacci Sequence
// This function calculates Fibonacci numbers up to a specified count and tracks the even numbers.
// It uses a loop to generate the next Fibonacci number by adding the previous two numbers.
// If a Fibonacci number is even, it is added to the isEven array.
// The function returns an object containing the full Fibonacci sequence and the even numbers.
function trackPreviousAndCurrent(count) {
    var previous = 0; // Initialize previous value
    var current = 1; // Initialize current value
    var sum = 0; // Initialize sum
    var values = []; // Array to store Fibonacci values
    var evenValues = []; // Array to store even Fibonacci values

    // Continue generating Fibonacci numbers until current exceeds the count
    while (current <= count) {
      sum = current + previous; // Calculate next Fibonacci number
      previous = current; // Update previous value
      current = sum; // Update current value

      values.push(current); // Add the current Fibonacci number to the values array
      if (current % 2 === 0) {
        evenValues.push(current); // If it's even, add to evenValues array
      }
    }

    // Calculate the sum of even Fibonacci numbers
    var totalEvenSum = evenValues.reduce((accumulator, value) => accumulator + value, 0);

    // Return an object with all Fibonacci values, even values, and the sum of even values to show working out
    return {
      values: values,
      evenValues: evenValues,
      totalEvenSum: totalEvenSum
    };
}

//Problem 3 Palindrome problem


// reverseNumber
// The input is a number
// For the logic the function converts the number to a string, splits it into an array of characters,
// reverses the array, and then joins the characters back together into a string.
// Then it converts the string back into a number and reutrns in.
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}


// There's no input
// For the logic the function loops through all pairs of 3-digit numbers (starting from 999) and multiples them.
// It then checks if the product is a palindrome using the reverseNumber function located above.
// If the product is a palindome and greater than the current largest palindrome, it updates the palidrome
function calculateLargestPalindrome() {
    let steps = document.getElementById("steps");
    steps.innerHTML = ""; // Clear previous steps
    
    let maxNumber = 999;  // The largest 3-digit number
    let largestPalindrome = 0;
    let firstNumber, secondNumber, product;
    
    // We will collect results in an array to avoid too many DOM manipulations
    let stepsOutput = [];
    
    // Loop through numbers from maxNumber (999) down to 100
    for (firstNumber = maxNumber; firstNumber >= 100; firstNumber--) {
        for (secondNumber = firstNumber; secondNumber >= 100; secondNumber--) {
            product = firstNumber * secondNumber;
            
            // Check if the product is a palindrome
            if (product === reverseNumber(product)) {
                // If the palindrome is larger than the current largest, update it
                if (product > largestPalindrome) {
                    largestPalindrome = product;
                    
                    // Add current palindrome step to stepsOutput array
                    stepsOutput.push(`Found palindrome: ${largestPalindrome} from ${firstNumber} × ${secondNumber}`);
                }
            }
        }
    }

    // Display the largest palindrome at the end
    document.getElementById('solution').textContent = "Largest Palindrome: " + largestPalindrome;
    
    // Optionally display the steps (just for a few steps)
    steps.innerHTML = stepsOutput.join('<br>');
}

// Add event listener to the button
// This adds a click event listener to trigger the calculation of the largest palindrome
document.getElementById("calculateButton").addEventListener("click", calculateLargestPalindrome);


// This function displays the result of calculating Fibonacci numbers below 4 million
function displayResult() {
    var result = trackPreviousAndCurrent(4000000);
    document.getElementById("output").textContent =
      "Calculated Fibonacci values below 4 million: " + JSON.stringify(result.values, null, 2) +
      "\n\nEven Fibonacci numbers below 4 million: " + JSON.stringify(result.evenValues, null, 2) +
      "\n\nSum of even Fibonacci numbers: " + result.totalEvenSum;
}



// Problem 4: Smallest number that is evenly divisible by all numbers from 1 to 20
// This function finds the smallest number that is divisible by all numbers from 1 to 20
function calculateSmallestNumber() {
    var number = 2520;  // I'm starting with 2520 as it's the smallest number dibible by 1 thorugh 10
    // While loop will continue until there is a valid number
    while (true) { 
      var divisible = true; // Because the current number is divisible by all numbers (might need to change this)
      // Loop through all numbers from 1 to 20 to check if the current number is divisible  by each one
      for (var divisor = 1; divisor <= 20; divisor++) {  
        if (number % divisor !== 0) {
          divisible = false;  // Mark as not divisible 
          break; // Exit loop earlier since there is no need to check
        }
      }
      if (divisible) {
        return number;
      }
      number += 2520;
    }
}

// Add event listener to the button for Problem 4
document.getElementById("calculateSmallestNumberButton").addEventListener("click", function() {
    var smallestNumber = calculateSmallestNumber(); // Get the result from the function
    document.getElementById("solution4").innerText = "Smallest Multiple: " + smallestNumber; // Display the result
});

// Problem 5: Largest Prime Factor
// This function finds the largest prime factor of a given number (600851475143)
// We start with the number 2 and check for primality for each number by attempting to divide it by all smaller numbers up to its square root.
// If not divisors are found (i.e., the number if only dividible by 1 and itself), the number is prime and 
// is added to the primeNumbers array
// The loop continues until 10,0001 prime numbers are found.

// The user can initiate the prime number calcualtion by clicking a button. 
// This keeps the user interface clean and only calculates the prime numbers when needed
function calculatePrimeNumbers() {
    const primeNumbers = [];
    let currentNumber = 2;
  
    while (primeNumbers.length < 10001) {
      let divisor = 2;
  
      // Check divisibility up to the square root of the current number
      while (divisor <= Math.sqrt(currentNumber) && currentNumber % divisor !== 0) {
        divisor++;
      }
  
      // If divisor goes beyond the square root, it means no divisors were found (it’s prime)
      if (divisor > Math.sqrt(currentNumber)) {
        primeNumbers.push(currentNumber);
      }
  
      // Move to the next number to check
      currentNumber++;
    }
  
    return primeNumbers;
  }
  
  // Event listener to calculate when the button is clicked
    document.getElementById("calculatePrimeNumbersButton").addEventListener("click", function() {
    const primes = calculatePrimeNumbers();
    document.getElementById("solution5").textContent = "The 10001st prime number is: " + primes[10000];
  });

// Function to compute factorial using BigInt for large numbers
function calculateFactorial(num) {
  let result = 1n; // BigInt for large numbers
  for (let currentStep = 2n; currentStep <= num; currentStep++) {
    result *= currentStep;
  }
  return result;
}

// Problem 6
// This function calculates the factorial of a give number num using BigInt.
// Factorial meaning (5! - 5 * 4 * 3 * 1)
// Because the datatype is going to be large we use BigInt
// The function uses a simple loop to calculate th factorial.

// Function to compute the binomial coefficient: "n choose k"
function calculateBinomialCoefficient(totalSteps, stepsInOneDirection) {
  return calculateFactorial(totalSteps) / (calculateFactorial(stepsInOneDirection) * calculateFactorial(totalSteps - stepsInOneDirection));
}

// Function to calculate and display the number of routes
// The function calculates the binomial coefficient, which represent the number of different ways to choose a set of
// stepsInOneDirection steps from a total of totalSteps steps. 

// We use this formula is n! / (k! * (n-k)!). 
// In this n is the total number of steps (right and down) adn k is the number of steps in one direction
function calculateGridRoutes() {
  const gridSize = 20;
  const totalSteps = gridSize * 2; // Total steps (20 rights + 20 downs)
  const stepsInOneDirection = gridSize; // 20 rights or 20 downs

  // Calculate the number of routes using the binomial coefficient
  const numberOfRoutes = calculateBinomialCoefficient(totalSteps, stepsInOneDirection);

  // Display the result in the HTML
  document.getElementById("routesResult").innerText = `Number of possible routes through a ${gridSize}x${gridSize} grid: ${numberOfRoutes}`;
}

// Toggle explanation visibility
function toggleGridExplanation() {
  const explanation = document.getElementById("GridExplanation");
  if (explanation.style.display === "none") {
    explanation.style.display = "block";
  } else {
    explanation.style.display = "none";
  }
}

// Problem 7
// This function fetches a triangle of numbers stored in a triangle.txt file, parses the data and
// tried ot find the maximum path sum from the top to the bottom of the triangle.
// Instead of recalcuating path repeatedly I tried to buidl of previously computer results

// Function to compute factorial using BigInt for large numbers
function calculateFactorial(num) {
    let result = 1n; // BigInt for large numbers
    for (let currentStep = 2n; currentStep <= num; currentStep++) {
      result *= currentStep;
    }
    return result;
  }
  
  // Function to compute the binomial coefficient: "n choose k"
  function calculateBinomialCoefficient(totalSteps, stepsInOneDirection) {
    return calculateFactorial(totalSteps) / (calculateFactorial(stepsInOneDirection) * calculateFactorial(totalSteps - stepsInOneDirection));
  }
  
  // Function to calculate and display the number of routes
  function calculateGridRoutes() {
    const gridSize = 20;
    const totalSteps = gridSize * 2; // Total steps (20 rights + 20 downs)
    const stepsInOneDirection = gridSize; // 20 rights or 20 downs
  
    // Calculate the number of routes using the binomial coefficient
    const numberOfRoutes = calculateBinomialCoefficient(totalSteps, stepsInOneDirection);
  
    // Display the result in the HTML
    document.getElementById("routesResult").innerText = `Number of possible routes through a ${gridSize}x${gridSize} grid: ${numberOfRoutes}`;
  }
  
  

// Function to calculate the maximum sum path from the loaded triangle file
async function calculateMaxSum() {
    // Fetch the triangle.txt file
    try {
        const response = await fetch('triangle.txt'); // This assumes the file is in the same directory
        if (!response.ok) {
            throw new Error('Failed to load triangle.txt');
        }
        const data = await response.text();
        const triangle = parseTriangle(data);
        
        // Calculate the maximum path sum using dynamic programming
        const maxSum = calculateMaxPath(triangle);
        
        // Display the result
        document.getElementById('result').textContent = maxSum;
    } catch (error) {
        alert('Error loading the triangle file: ' + error.message);
    }
}

// Function to parse the triangle text data into a 2D array
// To do this we take the raw text data from the triangle.txt fiel, split it into rows, and 
// convert each one into an array of numebrs.
// This is done because the triangle is stored as text, so this function was needed to convert it into a format like a 2D array.
function parseTriangle(data) {
    const rows = data.split('\n');
    const triangle = [];

    for (let row of rows) {
        row = row.trim();
        if (row === "") continue;
        
        const numbers = row.split(' ').map(num => {
            const parsedNum = parseInt(num, 10);
            if (isNaN(parsedNum)) {
                console.error(`Invalid number in row: ${row}`);
            }
            return parsedNum;
        });

        triangle.push(numbers);
    }

    console.log("Parsed Triangle:", triangle);
    return triangle;
}

// Dynamic programming solution to find the max path sum
// We start with the second to last row and work upwards, updating each number with the maximum
// path sum so it could be obtained from that position
// Therefore it return the maximum sum at the tip.

// I thought it might be better to do it bottom up, becuase then the function can ensure the at each
// step it already calculated maximum values from the row below
function calculateMaxPath(triangle) {
    console.log("Triangle before calculation:", triangle);

    // Loop through the triangle starting from the second-to-last row.
    // This approach uses dynamic programming to calculate the maximum sum path.
    // We move from bottom to top because each element in a row depends on the two elements below it.
    for (let row = triangle.length - 2; row >= 0; row--) {
        // Loop through each column (in this case, each element) of the current row.
        // Each element will be updated with the maximum sum that can be obtained by choosing
        // the larger of the two adjacent numbers in the row directly below.
        for (let column = 0; column <= row; column++) {

            // Log the values from the row below that are being considered.
            // These are the two elements that will contribute to the new value of the current element.
            console.log(`Calculating for row ${row}, column ${column}:`, triangle[row + 1][column], triangle[row + 1][column + 1]);

            // Update the current element (triangle[row][column]) by adding the maximum of the two adjacent
            // numbers from the row directly below (triangle[row + 1][column] and triangle[row + 1][column + 1]).
            // This ensures that we're considering the largest possible sum path.
            triangle[row][column] += Math.max(triangle[row + 1][column], triangle[row + 1][column + 1]);

            // Log the updated value of the current element after it has been modified.
            console.log(`Updated value at triangle[${row}][${column}]:`, triangle[row][column]);
        }
    }

    // After processing all rows, the triangle[0][0] will contain the maximum path sum.
    console.log("Final Triangle:", triangle);

    // Return the top element, which is now the maximum sum path from top to bottom.
    return triangle[0][0];
}



// OTHER LOGIC
  
// Tab Switching Logic
// This function handles the tab switching logic when the user clicks on different tabs
document.addEventListener("DOMContentLoaded", function () {
    // Initially hide all tabs except the first
    var tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(function (tabContent) {
      tabContent.style.display = "none";
    });
    document.getElementById("intro").style.display = "block"; // Show the intro tab by default
  
    // Add event listeners for tab switching
    var tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var tabName = button.getAttribute("data-tab");
  
        // Hide all tabs
        tabContents.forEach(function (tabContent) {
          tabContent.style.display = "none";
        });
  
        // Show the selected tab
        document.getElementById(tabName).style.display = "block";
      });
    });
});
