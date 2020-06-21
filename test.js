function runningSums(nums) {
    let result = []

    for (let i = 0; i < nums.length -1; i++){
        result.push(nums[i] += nums[i+1])
    } return console.log(result)

}

runningSums([1,2,3,4])