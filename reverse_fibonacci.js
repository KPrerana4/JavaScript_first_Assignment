function findFibonacciSeries(fibonacciLength)
{
    if(fibonacciLength < 3){
        return getSeriesOfSizeLessThan3(fibonacciLength);
    }
    else{
        return findSeries(fibonacciLength);
    }
}

function getSeriesOfSizeLessThan3(fibonacciLength)
{
    if(fibonacciLength == 1)
        return [0];
    else if(fibonacciLength == 2)
        return [0,1];
    return [];
}

function findSeries(fibonacciLength)
{
    let series = [0,1], nextIndex = 2;
    while(fibonacciLength != nextIndex){
          let nextElement = series[nextIndex - 1] + series[nextIndex - 2];
          series.push(nextElement);
          nextIndex++;
    }
    return series;
}

function reverseTheList(list)
{
     let listLength = list.length, temporaryContainer;
     for(let index = 0 ; index < listLength/2 ; index++){
            temporaryContainer = list[index];
            list[index] = list[listLength - index - 1];
            list[listLength - index - 1] = temporaryContainer;
     }
     return list;
}

function main()
{
    let reverseFibonacciSeries = reverseTheList(findFibonacciSeries(8));
    console.log("Fibonacci series in reverse order:" + reverseFibonacciSeries);
}

main();