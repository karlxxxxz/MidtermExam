function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
      return number % 2 === 0;
    });
  }
  
  
  const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
  console.log(result); // Output: [2, 4, 6]
  