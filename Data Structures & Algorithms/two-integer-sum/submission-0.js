class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0 ; i < nums.length; i++){
            const num = nums[i];
            const compliment = target-num
            const complimentIdx = map.get(compliment)
            const isPresent = map.has(compliment)
            if(isPresent){
                return [i, complimentIdx]
            }
            map.set(num, i)
        }
        return [-1, -1
        ]
    }
}
