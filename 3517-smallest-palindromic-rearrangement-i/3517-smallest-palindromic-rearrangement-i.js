/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const freq = new Array(26).fill(0); 
    for(const ch  of s ){ 
        freq [ch.charCodeAt(0) - 97]++;
    }
    
    let left = ""; 
    let middle = ""; ;

    for(let i =0 ; i < 26; i++ ){ 
        const ch =String.fromCharCode(i+97); 
    
    left += ch.repeat(Math.floor(freq[i]/2)); 
    
    if(freq[i] % 2 === 1 ){ 
        middle =ch; 
    }
    }
    const right =  left.split("").reverse().join(""); 

    return  left + middle + right; 
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna