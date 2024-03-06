function hasPairWithSum(arr, targetSum) {
    const seenNumbers = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      const complement = targetSum - arr[i];
  
      if (seenNumbers.has(complement)) {
        return true; 
      }

      seenNumbers.add(arr[i]);
    }
  
    return false;
  }

  const arr = [0, -1, 2, -3, 1];
  const targetSum = -2;
  
  const result = hasPairWithSum(arr, targetSum);

  console.log(result ? 'Yes' : 'No');
  