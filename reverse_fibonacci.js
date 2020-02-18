function reverse()
{
    let index;
    let reverseFibonacci = [];
    for(index = fibonacciLength - 1; index >= 0; index--)
    {
        reverseFibonacci.push(series[index]);
    }
    return reverseFibonacci;
}

function fibonacci()
{
    let nextIndex = 2;
    while(series.length != fibonacciLength)
    {
        addNextElement(nextIndex);
        nextIndex++;
    }
}

function addNextElement(nextIndex)
{
    let nextElement = series[nextIndex - 1] + series[nextIndex - 2];
    series.push(nextElement);
}

var series = [0,1];
var fibonacciLength = 10;
fibonacci(fibonacciLength);
var reverseFibonacci = reverse()
console.log(reverseFibonacci);
