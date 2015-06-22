/**
 * Created by maida sanchez on 18/06/2015.
 */
var Calculator = function (){
    var memory = 0;
    this.getMemory = function() {
        return memory;
    }
    this.setMemory = function(newvalue) {
        memory = newvalue;
        return memory;
    }
}

Calculator.prototype.Add = function (ope1 , ope2) {
    if (!ope2)
        return this.setMemory(this.getMemory() + ope1);
    this.setMemory(ope1 + ope2)
    return this.getMemory();
}

Calculator.prototype.Subs = function (ope1 , ope2) {
    if (!ope2)
        return this.setMemory(this.getMemory() - ope1);
    this.setMemory(ope1 - ope2)
    return this.getMemory();
}

Calculator.prototype.Multiply = function (ope1 , ope2) {
    if (!ope2)
        return this.setMemory(this.getMemory() * ope1);
    this.setMemory(ope1 * ope2)
    return this.getMemory();
}
Calculator.prototype.Divide = function (ope1 , ope2) {
    if (!ope2)
        return this.setMemory(this.getMemory()/ope1);
    this.setMemory(ope1/ope2)
    return this.getMemory();
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

var calc = new Calculator();
console.log("Suma 1 + 2 = ", calc.Add(1,2));
console.log("Suma + 3 = ", calc.Add(3));