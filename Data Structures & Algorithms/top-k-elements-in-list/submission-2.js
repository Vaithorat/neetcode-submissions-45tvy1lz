class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = Array.from({ length: nums.length + 1 }, () => [])

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1
        }
        for (let n in count) {
            freq[count[n]].push(n)
        }
        const res = []
        for (let i = freq.length - 1; i > 0; i--) {
            for (const num of freq[i]) {
                res.push(num)
                if (res.length === k) {
                    return res
                }
            }
        }
        // console.log(freq)
    }
}
