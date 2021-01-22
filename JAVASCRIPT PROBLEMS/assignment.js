//kilometerToMeter Converts problem solution
function kilometerToMeter(kilometer){
  
    var meter = kilometer * 1000;
    return meter;
}
var Meter = kilometerToMeter(-6);
console.log(Math.abs(Meter));
var Meter = kilometerToMeter(12);
console.log(Math.abs(Meter));




//budgetCalculator problem solution

function budgetCalculator(watch,phone,laptop){
    var num1 = watch * 50;
    var num2 = phone * 100;
    var num3 = laptop * 500;
    var total = num1 + num2 + num3 ;
    return total;
}
var total_budget = budgetCalculator(6,5,4);
console.log(Math.abs(total_budget));







//hotelCost problem solution

function hotelCost(everyNight){
    var n = everyNight;
    totalCost = 0;
  if( n>=1 && n<=10 ){
     var totalCost = n*100;
     return totalCost;
    
  }
  else if( n>=11 && n<=20 ){
    var firstPart = 10*100;
    var remaining = n-10;
    var secondPart = remaining*80;
    totalCost = firstPart + secondPart;
    return totalCost;
  
  }
  else{
      var firstPart = 10*100;
      var secondPart = 10*80;
      var remaining = n-20;
      var thirdPart = remaining*50;
      totalCost = firstPart + secondPart + thirdPart ;
      return totalCost;
    
  }

}
var TotalHotelCost = hotelCost(17);
console.log(TotalHotelCost);
var TotalHotelCost = hotelCost(25);
console.log(TotalHotelCost);
var TotalHotelCost = hotelCost(8);
console.log(TotalHotelCost);






//megaFriend array problem solution

function megaFriend(longName) {
    var max = longName[0].length;
    longName.map(v => max = Math.max(max, v.length));
    result = longName.filter(v => v.length == max);
    return result;
  }
  
  console.log(megaFriend(['Mampy sarowar','Mira','Borsha','sudipta','armin']));