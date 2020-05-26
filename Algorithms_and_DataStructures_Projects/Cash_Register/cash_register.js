const REGISTER_STATUS = {closed: 'CLOSED', insufficientFunds: 'INSUFFICIENT_FUNDS', open: 'OPEN'};

function checkCashRegister(price, cash, cid) {
  var cashRegister = { status: '', change: cid };
  var changeToGive = parseFloat(cash - price).toFixed(2);
  var totalChangeAvailableInDrawer = getTotalChange(cid);
  cashRegister.status = getStatus(changeToGive, totalChangeAvailableInDrawer);

  if(cashRegister.status === REGISTER_STATUS.insufficientFunds)
  {
     cashRegister.change = [];
     return cashRegister;
  }

  cashRegister.change = getChange(changeToGive, cid);
  if(changeToGive > getTotalChange(cashRegister.change))
  {
    cashRegister.status = REGISTER_STATUS.insufficientFunds;
    cashRegister.change = [];
  }

  if(cashRegister.status === REGISTER_STATUS.closed)
  {
     cashRegister.change = [...cid];
  }

  return cashRegister;
  
}
function getStatus(changeToGive, totalChangeAvailableInDrawer)
{
  if(Number(changeToGive) > Number(totalChangeAvailableInDrawer))
  {
     return REGISTER_STATUS.insufficientFunds;
  }
  if(Number(changeToGive) < Number(totalChangeAvailableInDrawer))
  {
     return REGISTER_STATUS.open;
  }
  return REGISTER_STATUS.closed;
}
function getTotalChange(changeInDrawer)
{
  var total = 0;
  //for-in iterates through properties of an object                              
  //for-of iterates through values of an object
  for(var ele of changeInDrawer) 
  {
    total += ele[1];
  }
  return total.toFixed(2);
}
function getChange(changeToGive, cid)
{
  var change = [];
   const currencyDictionary = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.10,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
   };
   for(var i = cid.length - 1; i >= 0; i--)
   {
     var currencyName = cid[i][0];
     var currencyTotal = cid[i][1];
     var currencyValue = currencyDictionary[currencyName];
     let currencyCount = (currencyTotal / currencyValue).toFixed(2);
     let currencyToReturn = 0;
     while(changeToGive >= currencyValue && currencyCount > 0)
     {
       changeToGive -= currencyValue;
       changeToGive = changeToGive.toFixed(2);
       currencyCount--;
       currencyToReturn++;
     }
     if(currencyToReturn > 0)
       change.push([currencyName, currencyToReturn * currencyValue]);

   }
   return change;
}

