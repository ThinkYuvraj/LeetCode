/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let left = 0;
    let maxLength = 0;
    let freq = new Map();

    for (let right = 0; right < nums.length; right++) {

        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

        while (freq.get(nums[right]) > k) {
            freq.set(nums[left], freq.get(nums[left]) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna