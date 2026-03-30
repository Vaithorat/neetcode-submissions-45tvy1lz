class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Set(nums)
        if(map.size === nums.length){
            return false
        }
        return true
    }
}
