1. Kadane's Algorithm (Get maximun sub-array in array)
  // Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
  const maxSubArraySum = (arr) =>{
    let maxSum = -Math.pow(2,53)-1
    let currSum = 0

    for(let i=0;i<arr.length;i++){
        currSum+=arr[i]
        if(maxSum < currSum){
            maxSum=currSum
        }
        if(currSum<0){
            currSum = 0
        }
    }

    return maxSum
}

2. Minimize the Heights 
// Not Completed
