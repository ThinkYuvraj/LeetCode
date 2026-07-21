class Solution {
    public int maxActiveSectionsAfterTrade(String s) {
        int ones = 0;
        int prevZero = Integer.MIN_VALUE;
        int maxMerge = 0;
        int i = 0;
        while (i < s.length()) {
            int j = i;
            while (j < s.length() && s.charAt(j) == s.charAt(i)) {
                j++;
            }
            int len = j - i;

            if (s.charAt(i) == '1') {
                ones += len;
            } else {
                if (prevZero != Integer.MIN_VALUE) {
                    maxMerge = Math.max(maxMerge, prevZero + len);
                }
                prevZero = len;
            }
            i = j;
        }
        return ones + maxMerge;
    }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna