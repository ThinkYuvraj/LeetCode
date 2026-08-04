/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {

    let min = Infinity;
    let max = -Infinity;

    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    const set = new Set(nums);
    const ans = [];

    for (let i = min + 1; i < max; i++) {
        if (!set.has(i)) {
            ans.push(i);
        }
    }
    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna