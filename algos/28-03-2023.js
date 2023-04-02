// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const list = [];

    if (s.length == 1) {
        return s;
    }

    if (s.split('').reverse().join('') == s) {
        return s;
    }

    for (let i = 0; i < s.length; i++) {
        const arr = [];

        s.split('').forEach((el, ind) => {
            if (el == s[i] && i !== ind) {
                arr.push(ind);
            }
        });

        if (arr.length >= 1) {
            for (let j = 0; j < arr.length; j++) {
                const index = arr[j];

                const string = s.slice(i, index + 1);

                const revString = string.split('').reverse().join('');

                if (
                   ( string === revString) && string != '' && !list.includes(string)
                ) {
                    list.push(revString);
                }
            }
        }
    }

    if (list.length >= 1) {
        return list.sort((a, b) => b.length - a.length)[0]
    }

    return s[0];
};