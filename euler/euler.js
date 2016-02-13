// Sum of numbers that are multply of 3 and 5
// Function to get a list of multiplies by a number
function multOf (base, limit) {
    var sol = [];
    for (var i = 1; base * i < limit; i++) {
        sol.push(base * i);
    }

    return sol;
}

// Use bind method to get a multiplier by 3 and 5
var multOfFive = multOf.bind(this, 5);
var multOfThree = multOf.bind(this, 3);

// Utility function to convert an array in a string.
function setToStr(array) {
    var listStr = "";
    for (value in array) {
        listStr = listStr + array[value] + ', ';
    }
    return listStr;
}

function sumArray(array) {
    tot = 0;
    for (value in array) {
        tot = tot + Number(array[value]);
    }

    return tot;
}

// Bind submit button to computation code using jQuery.
$("#pr1submit").click(function(){

    var resOf3 = multOfThree($("#pr1limit").val());
    var resOf5 = multOfFive($("#pr1limit").val());


    joined = resOf3.concat(resOf5);

    // Remove duplicates
    set = new Set(joined);

    // Return to array and sort the values. It is better to sort
    // this array than the original one since is shorter.
    // A sorting function is passed because by default .sort()
    // sorts values alphabetically.
    result = Array.from(set.values()).sort(function(a, b){
        return a - b;
    });

    $("#pr1solution").html('<strong>Solution:</strong> ' + sumArray(result) + '<br>('+ setToStr(result) + ')');
});





// Sum of even Fibonacci's numbers that do not exceed 4M

// Brute force solution
var fibonacci = function (n) {
    if (n === 1)
        return 1;
    if ( n=== 2)
        return 2;
    return fibonacci(n - 1) + fibonacci (n - 2);
}

var fibonacci2 = function(term, val, prev) {
    val = val || 1;
    prev = prev || 0;
    if (term === 0) return prev;
    if (term === 1) return val;
    return fibonacci2(term - 1, prev + val, val);
}

var fiboSum = function(limit) {
    series = [];
    even = [];
    sum = 0;
    for (var i = 1; fibonacci2(i) < limit; i++) {
        f = fibonacci2(i);
        series.push(f);
        if (f % 2 == 0) {
            even.push(f);
            sum += f;
        }
    }

    return [sum, series, even];
}

$('#pr2submit').click(function() {
    var res = fiboSum($('#pr2limit').val());

    $('#pr2solution').html('<strong>Solution: </strong>' + res[0]);
});
