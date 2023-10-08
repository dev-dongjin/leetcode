/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    //declare maxProfit as 0
    let maxProfit = 0;
    //iterate prices and calculate maxProfit
    for(let price of prices){
        if(price<minPrice){
            minPrice = price;
        }else if(price-minPrice>maxProfit){      
            maxProfit = price-minPrice;
        }
    }
    return maxProfit;
};