/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  Using brute force methods

//  so player will add the no he takes from the into his current deck. 
// score =  player1 = true 
// score ==  player1 =  player 2 =  true 
// Score = player2 wins =  false 

var predictTheWinner = function(nums) {

    function  solve (left, right ){ 
        if(left  ===  right ){ 
            return  nums[left ]; 
        }
        let pickLeft =  nums[left] -solve(left + 1 ,  right ); 
        let pickRight =  nums[right] -solve(left ,  right -1 );
        return Math.max(pickLeft ,  pickRight); 
    }
    return solve(0, nums.length -1) >= 0 
};


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna