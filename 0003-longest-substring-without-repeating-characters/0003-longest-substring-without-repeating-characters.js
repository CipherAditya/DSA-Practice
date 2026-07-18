/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    // Map to store the last seen index of each character
    const charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the character is already in the map and within the current window
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            // Move the left pointer to the right of the last seen duplicate character
            left = charMap.get(currentChar) + 1;
        }

        // Update/insert the last seen index of the current character
        charMap.set(currentChar, right);

        // Calculate the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};