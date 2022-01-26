const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/

function doesCartWinPrize(cartItemsPrices) {
    const result = cartItemsPrices.reduce((acc, item) => {
        return Number(acc) + Number(item);
    })
    if(Math.round(result * 100) / 100 === WINNING_SUM){
        return true;
    }
    return false;
}

module.exports = doesCartWinPrize;
