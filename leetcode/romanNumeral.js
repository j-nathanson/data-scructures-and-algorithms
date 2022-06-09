const normalCases = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const specialCases = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
}

function romanToInt(s) {
    let answer = 0;
    const array = s.split('');

    for (let i = array.length - 1; i >= 0; i--) {

        const specialKey = array[i - 1] + array[i];

        if (specialCases[specialKey]) {
            answer += specialCases[specialKey]
            i--;
        } else {
            answer += normalCases[array[i]]
        }
    }
    return answer
}

const romanToInt2 = function(s) {
    let hash ={I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let ans = 0, cur = 0, prev = 0, j = s.length - 1
    for( ; j >= 0; j-=1){
        cur = hash[s[j]]
        cur < prev ? ans -= cur : ans += cur
        prev = cur
    }
    return ans;    
};


console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MMMCMXCIX"));