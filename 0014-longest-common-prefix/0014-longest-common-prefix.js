/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ===0 ) return  ""; 

    let String1 =  strs[0]; 

    for(let i =0;  i <String1.length ; i++){ 
        let ch = String1[i]; 
        for (let j = 1;  j<strs.length ; j++){ 
        if (i >=  strs[j].length ||  strs [j][i] !==ch ){ 
            return  String1.substring(0,i ); 
        }}
    }
    return String1; 
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna