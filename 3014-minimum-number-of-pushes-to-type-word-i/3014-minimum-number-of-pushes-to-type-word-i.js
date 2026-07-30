/**
 * @param {string} word
 * @return {number}
 */

var minimumPushes = function(word) {
    let pushes = 0;

    for (let i = 0; i < word.length; i++) {
        switch (Math.floor(i / 8)) {
            case 0:
                pushes += 1;
                break;
            case 1:
                pushes += 2;
                break;
            case 2:
                pushes += 3;
                break;
            default:
                pushes += 4;
        }
    }

    return pushes;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna