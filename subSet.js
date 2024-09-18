// Given a string s, find the length of the longest
// substring
//  without repeating characters.

function lengthOfLongestSubstring(s){
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;


    for( let i = 0 ; i < s.length ; i++){
        const char = s[i]// get current character

        if(charMap.has(char) && charMap.get(char) >= start){
            start = charMap.get(char) + 1 ;
        }
        
        charMap.set(char, i);

        maxLength = Math.max(maxLength , i - start + 1);
    }
    return maxLength;
}
