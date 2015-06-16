

/**
 * Created by jalatraining on 5/30/2015.
 */

var totalSum = 0;
var sum = function (numbers, pos) {
    if (!pos) pos = 0 ;
    if (pos == numbers.length - 1)
        return numbers[pos];
    return numbers[pos] + sum (numbers, pos + 1);
};

var max = function (numbers, pos, nummax) {
    if (!pos) pos = 0 ;
    nummax = nummax || 0 ;
    
     if (numbers[pos] > nummax)
     {
        nummax = numbers[pos];
     }
     if (numbers.length == pos +1)
     {
        return nummax;
     }
     else
     {
          return max(numbers, pos+1, nummax);    
     }
    
};


var min = function (numbers, pos, nummin) {
    if (!pos) pos = 0 ;
    nummin = nummin || 1222222 ;
    
     if (  numbers[pos] < nummin)
     {
        nummin = numbers[pos];
     }
     if (numbers.length == pos +1)
     {
        return nummin;
     }
     else
     {
          return min(numbers, pos+1, nummin);    
     }
    
};


var average = function (numbers, pos) {
    var total = sum(numbers);
    return total / numbers.length;
    
};




var calculateAll = function () {
    /*
    console.log(arguments);
    console.log('SUM:', sum(arguments, 0));
    //console.log('AVG:', average(arguments));
    
     */
    console.log('MAX:', max(arguments));
    console.log('MIN:', min(arguments));
    console.log('AVERAGE:', average(arguments));
    //console.log('MIN:', min(arguments));
};
