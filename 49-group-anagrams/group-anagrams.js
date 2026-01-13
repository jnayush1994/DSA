/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // T.C. - O(m*nlogn)---S.C. - O(m*n)

    // let map = {};
    // let key = '';
    // for (let i = 0; i < strs.length; i++) {
    //     key = strs[i].split('').sort().join('');
    //     if (!map[key]) {
    //         map[key] = [strs[i]];
    //     } else {
    //         map[key].push(strs[i]);
    //     }
    // }
    // return Object.values(map);
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let s = strs[i];
        let freqArr = Array(26).fill(0);

        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArr[index];
        }

        let key = "";

        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k) + freqArr[k];
        }

        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }
    return Object.values(map);
};