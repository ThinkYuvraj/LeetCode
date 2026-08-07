/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
 
 var smallestNumber = function(num, t) {
    let bigT = BigInt(t);
    const getPrimeCount = (val) => {
        let count = { 2: 0, 3: 0, 5: 0, 7: 0 };
        for (let p of [2, 3, 5, 7]) {
            let pBig = BigInt(p);
            while (val % pBig === 0n) {
                count[p]++;
                val /= pBig;
            }
        }
        if (val > 1n) return [null, false];
        return [count, true];
    };

    let [primeCount, isValid] = getPrimeCount(bigT);
    if (!isValid) return "-1";

    const kFactorCounts = {
        0: {}, 1: {}, 2: {2: 1}, 3: {3: 1}, 4: {2: 2}, 
        5: {5: 1}, 6: {2: 1, 3: 1}, 7: {7: 1}, 8: {2: 3}, 9: {3: 2}
    };

    const getFactorCount = (pc) => {
        let c2 = pc[2], c3 = pc[3], c5 = pc[5], c7 = pc[7];
        let count8 = Math.floor(c2 / 3);
        let rem2 = c2 % 3;
        let count9 = Math.floor(c3 / 2);
        let count3 = c3 % 2;
        let count4 = Math.floor(rem2 / 2);
        let count2 = rem2 % 2;
        let count6 = 0;
        if (count2 === 1 && count3 === 1) {
            count2 = 0; count3 = 0; count6 = 1;
        }
        if (count3 === 1 && count4 === 1) {
            count2 = 1; count6 = 1; count3 = 0; count4 = 0;
        }
        return { 2: count2, 3: count3, 4: count4, 5: c5, 6: count6, 7: c7, 8: count8, 9: count9 };
    };

    const sumValues = (fc) => Object.values(fc).reduce((a, b) => a + b, 0);

    const construct = (fc) => {
        let res = [];
        for (let digit = 2; digit <= 9; digit++) {
            let freq = fc[digit] || 0;
            for (let k = 0; k < freq; k++) res.push(digit);
        }
        return res.join('');
    };

    const subtract = (a, b) => {
        let res = { 2: 0, 3: 0, 5: 0, 7: 0 };
        for (let p of [2, 3, 5, 7]) {
            res[p] = Math.max(0, (a[p] || 0) - (b[p] || 0));
        }
        return res;
    };

    const isSubset = (a, b) => {
        for (let p of [2, 3, 5, 7]) {
            if ((b[p] || 0) < (a[p] || 0)) return false;
        }
        return true;
    };

    const getPrimeCountFromString = (s) => {
        let count = { 2: 0, 3: 0, 5: 0, 7: 0 };
        for (let ch of s) {
            let fc = kFactorCounts[ch - '0'];
            for (let p in fc) count[p] = (count[p] || 0) + fc[p];
        }
        return count;
    };

    let factorCount = getFactorCount(primeCount);
    if (sumValues(factorCount) > num.length) {
        return construct(factorCount);
    }

    let primeCountPrefix = getPrimeCountFromString(num);
    let firstZeroIndex = num.indexOf('0');
    if (firstZeroIndex === -1) {
        firstZeroIndex = num.length;
        if (isSubset(primeCount, primeCountPrefix)) return num;
    }

    for (let i = num.length - 1; i >= 0; --i) {
        let d = num.charCodeAt(i) - 48;
        let fc = kFactorCounts[d];
        for (let p in fc) primeCountPrefix[p] -= fc[p];
        let spaceAfterThisDigit = num.length - 1 - i;
        if (i > firstZeroIndex) continue;

        for (let biggerDigit = d + 1; biggerDigit < 10; ++biggerDigit) {
            let needed = subtract(primeCount, primeCountPrefix);
            let bigFc = kFactorCounts[biggerDigit];
            let bigPrime = {2:0, 3:0, 5:0, 7:0};
            for (let p in bigFc) bigPrime[p] += bigFc[p];
            needed = subtract(needed, bigPrime);
            
            let factorsAfterReplacement = getFactorCount(needed);
            if (sumValues(factorsAfterReplacement) <= spaceAfterThisDigit) {
                let fillOnes = spaceAfterThisDigit - sumValues(factorsAfterReplacement);
                return num.substring(0, i) + biggerDigit + '1'.repeat(fillOnes) + construct(factorsAfterReplacement);
            }
        }
    }

    let factorsAfterExtension = getFactorCount(primeCount);
    return '1'.repeat(num.length + 1 - sumValues(factorsAfterExtension)) + construct(factorsAfterExtension);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna