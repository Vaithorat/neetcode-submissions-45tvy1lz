class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const smap = {}
        const tmap = {}
        for(const key in s){
            smap[s[key]] = (smap[s[key]] || 0 )+1
            tmap[t[key]] = (tmap[t[key]] || 0 )+1
        }
        for(const key in smap){
            if(smap[key]!== tmap[key]){
                return false
            }
        }
        return true
    }
}
