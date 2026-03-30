class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set(nums)
        console.log(map.size, nums.length)
        if(map.size===nums.length){
            return false
        }
        return true
    }
}
