// first assignment
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// second assignment
function bmi(weight, height) {
  var bmi = weight / (height**2);

  if(bmi < 18.5){
    return "Underweight";
  }else if (bmi < 25){
    return "Normal";
  }else if (bmi < 30){
    return "Overweight";
  }else{
    return "Obese";
  }
}

// third assignment
var arr = ["apple", "bannana", "orange", "apple", "orange"];

arr = arr.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

// fourth assignment
function getSecondLargest(arr) {
    var sorted_arr = arr.sort(function(a, b){return a - b});
    return sorted_arr[sorted_arr.length - 2]
}
