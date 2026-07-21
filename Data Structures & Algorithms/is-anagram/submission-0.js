class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if (s.length !== t.length) return false;

    const freq = {};

    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    for (const ch of t) {
        if (!freq[ch]) {
            return false;
        }

        freq[ch]--;
    }

    return true;
    }
}
