var buyPrice = document.querySelector("#initial-price")
var currentPrice = document.querySelector("#current-price")
var quantity = document.querySelector("#quantity")

const calculateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output-msg")

function clickHandler(){
    if(buyPrice.value === "" || currentPrice.value === "" || buyPrice.value < 0 || currentPrice.value < 0 || quantity.value < 0){
        output.innerText = "Invalid Input!!!"
    }else{
        var costPrice = buyPrice.value;
        var sellPrice = currentPrice.value; 
        var profitPerStock = sellPrice - costPrice;
        var absProfit = computeAbsoluteProfit(profitPerStock,quantity.value);
        var profitPercent = computeProfitPercent(costPrice,sellPrice);
        displayOutput(absProfit,profitPercent);
    }
}

function displayOutput(absProfit,profitPercent){
    if(absProfit == 0){
        output.innerText = "No Profit No Loss"
    } 
    else if(absProfit < 0){
        output.innerText = `Currently Loss is (INR).${-1*absProfit} and loss percent is ${-1*profitPercent}%`
    }
    else{
        output.innerText = `Currently Profit is (INR) ${absProfit} and gain percent is ${profitPercent}%`
    }
    
}

function computeAbsoluteProfit(profitPerStock,quantity){
    return profitPerStock*quantity;
}

function computeProfitPercent(cost,sell){
    return (sell-cost)*100/cost;
}

calculateBtn.addEventListener("click",clickHandler);