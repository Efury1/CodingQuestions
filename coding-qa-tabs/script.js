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
    var number = 2520;  // Start from 2520 (smallest number divisible by numbers from 1 to 10)
    while (true) {
      var divisible = true;
      for (var i = 1; i <= 20; i++) {
        if (number % i !== 0) {
          divisible = false; // If any number doesn't divide evenly, break the loop
          break;
        }
      }
      if (divisible) {
        // If the number is divisible by all, display the result
        document.getElementById("output4").innerText = "Smallest Multiple: " + number;
        break;
      }
      number += 2520; // Increase by 2520 (multiple of numbers 1 to 10)
    }
}

// Add event listener to the button for Problem 4
document.getElementById("calculateSmallestNumberButton").addEventListener("click", calculateSmallestNumber);

// Problem 4: Prime Numbers Button
// Placeholder function for prime number calculations (could be expanded further)
function calculatePrimeNumbers() {
  // Logic for calculating prime numbers would go here
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
