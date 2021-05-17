module.exports = {
    sum_odd_5000
};

function sum_odd_5000() {
    var sum = 0;
    for (var i = 1; i < 5000; i+2){
        sum = sum + i;
    }
    return sum;
}
