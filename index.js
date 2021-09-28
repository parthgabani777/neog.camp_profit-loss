const initialPrice = document.querySelector('#initial_price');
const quantity = document.querySelector('#quantity');
const currentPrice = document.querySelector('#current_price');

const calculateBtn = document.querySelector('#calculate');

const result = document.querySelector('#result');

calculateBtn.addEventListener('click',calculateProfitAndLoss);

function calculateProfitAndLoss(){
      let costPrice = initialPrice.value * quantity.value;

      let sellingPrice = currentPrice.value * quantity.value;

      if(costPrice>sellingPrice){
            let lossAmount = costPrice - sellingPrice;
            let lossPercentage = (lossAmount/costPrice) * 100;
            showResult(`Loss is ${lossAmount} and Loss percentage is ${lossPercentage}`);
      }
      else if (costPrice<sellingPrice){
            let profitAmount = sellingPrice - costPrice;
            let profitPercentage = (profitAmount/costPrice) * 100;
            showResult(`Profit is ${profitAmount} and  Profit percentage is ${profitPercentage}`);
      }
      else{
            showResult('No profit no loss');
      }
}

function showResult(msg){
      result.innerText = msg;
}