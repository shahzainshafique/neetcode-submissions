class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        for (const num of nums){
            if(!freq.has(num)){
                freq.set(num,0);
            }
            freq.set(num, (freq.get(num) || 0)+ 1);
        }
        console.log(freq);
        return Array.from(freq.entries()).sort((a,b)=> b[1]-a[1]).slice(0,k).map(([key])=>key);
    }
}
