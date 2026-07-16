/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    let prefixGcd = [];
    let mx = 0;

    // Construct prefixGcd
    for (let num of nums) {
        mx = Math.max(mx, num);
        prefixGcd.push(gcd(num, mx));
    }

    // Sort the array
    prefixGcd.sort((a, b) => a - b);

    let left = 0;
    let right = prefixGcd.length - 1;
    let ans = 0;

    // Pair smallest with largest
    while (left < right) {
        ans += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna