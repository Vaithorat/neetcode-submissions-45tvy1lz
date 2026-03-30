class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length

        while (l < r) {
            let m = Math.floor((r - l) / 2) + l
            if (nums[m] >= target) {
                r = m
            }
            else { l = m + 1 }
        }
        return l < nums.length && nums[l] === target ? l : -1
    }
}
