/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = x.toString(), reversed = "";
    let sign = '+';
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[0] === '-') {
            sign = '-';
        }
        reversed += result[i];
    }
    let final = parseInt(sign + reversed);
    // if (final > Math.pow(2, 31) - 1 || final < Math.pow(-2, 31)) {
    //     return 0;
    // }
    // else {
    //     return final;
    // }
    return (final > Math.pow(2, 31) - 1 || final < Math.pow(-2, 31))? 0 : final;
};



