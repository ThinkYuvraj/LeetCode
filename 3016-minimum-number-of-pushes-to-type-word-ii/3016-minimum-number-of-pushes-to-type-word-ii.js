/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {

    var freq = new Array(26).fill(0);

    for (var i = 0; i < word.length; i++) {
        var index = word.charCodeAt(i) - 'a'.charCodeAt(0);
        freq[index]++;
    }

    freq.sort(function(a, b) {
        return b - a;
    });

    var ans = 0;

    for (var i = 0; i < 26; i++) {
        var pushes = Math.floor(i / 8) + 1;
        ans = ans + freq[i] * pushes;
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna