// Problem 1: Sum of Multiples of 3 or 5
// This function toggles the visibility of the explanation for the Sum of Multiples problem
function toggleExplanation() {
    var explanation = document.getElementById("multiplesExplanation");
    if (explanation.style.display === "none") {
      explanation.style.display = "block";
    } else {
      explanation.style.display = "none";
    }
}

// Problem 1: Sum of Multiples of 3 or 5
function toggleMultiplesExplanation() {
    var explanation = document.getElementById("multiplesExplanation");
    if (explanation.style.display === "none") {
      explanation.style.display = "block";
    } else {
      explanation.style.display = "none";
    }
}

// Problem 2: Fibonacci Sequence
function toggleFibonacciExplanation() {
    var explanation = document.getElementById("FibonacciExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 3: Palindrome
function togglePalindromeExplanation() {
    var explanation = document.getElementById("PalindromicExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 4: Smallest Number
function toggleSmallestNumberExplanation() {
    var explanation = document.getElementById("SmallestNumberExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 5: Prime Numbers
function togglePrimeNumberExplanation() {
    var explanation = document.getElementById("PrimeNumberExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 6: Grid
function toggleGridExplanation() {
    var explanation = document.getElementById("GridExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}

// Problem 7: Triangle
function toggleTriangleExplanation() {
    var explanation = document.getElementById("TriangleExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}


// This function calculates the sum of multiples of 3 or 5 below the input number
function handleSumMultiples() {
    var input = parseInt(document.getElementById("input1").value); // Get input number
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
// This function calculates Fibonacci numbers up to a specified count and tracks even numbers
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

    // Return an object with all Fibonacci values, even values, and the sum of even values
    return {
      values: values,
      evenValues: evenValues,
      totalEvenSum: totalEvenSum
    };
}

// This function reverses a given number by converting it to a string, splitting, and rejoining
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Palindrome Problem
// This function calculates the largest palindrome that is a product of two 3-digit numbers
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

// This function toggles the visibility of the palindrome explanation
function toggleExplanation() {
    var explanation = document.getElementById("PalindromicExplanation");
    if (explanation.style.display === "none") {
        explanation.style.display = "block"; // Show the explanation
    } else {
        explanation.style.display = "none"; // Hide the explanation
    }
}

// This function displays the result of calculating Fibonacci numbers below 4 million
function displayResult() {
    var result = trackPreviousAndCurrent(4000000);
    document.getElementById("output").textContent =
      "Calculated Fibonacci values below 4 million: " + JSON.stringify(result.values, null, 2) +
      "\n\nEven Fibonacci numbers below 4 million: " + JSON.stringify(result.evenValues, null, 2) +
      "\n\nSum of even Fibonacci numbers: " + result.totalEvenSum;
}

// Problem 3: Largest Prime Factor
// This function finds the largest prime factor of a given number (600851475143)
function largestPrimeFactor() {
    var number = 600851475143; // The number we need to find the largest prime factor of
    var factor = 2; // Start checking from 2 (smallest prime number)
    
    // Loop until the number becomes 1
    while (factor * factor <= number) {
      if (number % factor === 0) {
        number /= factor; // Divide the number by the factor if it's divisible
      } else {
        factor++; // Otherwise, increment the factor to check the next possible prime
      }
    }
    
    // Display the largest prime factor
    document.getElementById("output3").innerText = "Largest Prime Factor: " + number;
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

// Problem 4: Prime Numbers Button
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

// Toggle explanation visibility
function toggleGridExplanation() {
  const explanation = document.getElementById("GridExplanation");
  if (explanation.style.display === "none") {
    explanation.style.display = "block";
  } else {
    explanation.style.display = "none";
  }
}

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
  
  // Toggle explanation visibility
  function toggleGridExplanation() {
    const explanation = document.getElementById("GridExplanation");
    if (explanation.style.display === "none") {
      explanation.style.display = "block";
    } else {
      explanation.style.display = "none";
    }
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
function calculateMaxPath(triangle) {
    console.log("Triangle before calculation:", triangle);

    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            console.log(`Calculating for row ${row}, col ${col}:`, triangle[row + 1][col], triangle[row + 1][col + 1]);
            triangle[row][col] += Math.max(triangle[row + 1][col], triangle[row + 1][col + 1]);
            console.log(`Updated value at triangle[${row}][${col}]:`, triangle[row][col]);
        }
    }

    console.log("Final Triangle:", triangle);
    return triangle[0][0];
}

  
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
