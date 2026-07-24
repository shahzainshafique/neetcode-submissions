class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str)=> `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
 const result = [];
    let i = 0;

    while (i < str.length) {

        let j = i;

        while (str[j] !== "#") {
            j++;
        }

        const length = Number(str.slice(i, j));

        j++;

        const word = str.slice(j, j + length);

        result.push(word);

        i = j + length;
    }

    return result;    }
}
