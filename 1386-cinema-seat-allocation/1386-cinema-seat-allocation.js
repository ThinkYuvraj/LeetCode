/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    let rows = new Map();

    for (let [row, seat] of reservedSeats) {
        if (!rows.has(row)) {
            rows.set(row, new Set());
        }
        rows.get(row).add(seat);

    }
    let answ = (n - rows.size) * 2;
    for (let seats of rows.values()) {
        let left = ![2, 3, 4, 5].some(s => seats.has(s));
        let middle  = ![4, 5, 6, 7].some(s => seats.has(s));
        let right = ![6, 7, 8, 9].some(s => seats.has(s));

        if (left && right) {
            answ += 2;
        } else if (left || middle || right) {
            answ += 1;
        }
    }
    return answ
};