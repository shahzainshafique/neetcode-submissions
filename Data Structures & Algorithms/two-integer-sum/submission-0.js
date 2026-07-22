class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var sum = [];
        for (let i = 0; i< nums.length; i++){
            for (let j = i+1; j<= nums.length; j++){
                if(nums[i]+nums[j]===target && i !== j){
                    sum.push(i,j);
                }
            }
        }
        return sum;
    }
}
