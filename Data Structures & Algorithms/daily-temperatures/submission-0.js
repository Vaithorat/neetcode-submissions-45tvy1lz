class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        const res = new Array(temp.length).fill(0)
        const stack = []

        for (let i = 0; i < temp.length; i++) {
            const t = temp[i]
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop()
                res[stackInd] = i - stackInd
            }
            stack.push([t,i])

        }
        return res
    }
}
