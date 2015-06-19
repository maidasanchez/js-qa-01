/**
 * Created by maida sanchez on 18/06/2015.
 */

var Calculator = function (){
    this.memory = 0;
}

Calculator.prototype.Add = function (a , b) {
    var result = sum(arguments);
    this.memory = this.memory + result;
    return this.memory;
}

Calculator.prototype.Subs = function (a , b) {
    var result;
    if (typeof b === 'undefined') {
        result = this.memory - a;
        this.memory = result;

    } else {
        result = a - b;
        this.memory = this.memory + result;
    }
    return this.memory;
}

Calculator.prototype.Sum = sum;
Calculator.prototype.Max = max;
Calculator.prototype.Min = min;
Calculator.prototype.Average = average;

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
    console.log('SUM:', sum(arguments));
    console.log('MAX:', max(arguments));
    console.log('MIN:', min(arguments));
    console.log('AVERAGE:', average(arguments));
};
