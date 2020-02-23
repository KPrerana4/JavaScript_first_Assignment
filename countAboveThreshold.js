function aboveThresholdCount(list, threshold)
{
    let count = 0;
    for(let number of list)
    {
        if(number > threshold)
            count++;
    }
    return count;
}

function aboveThresholdCount(list, threshold)
{
    let numbersAboveThreshold = list.filter(function(element){
           return element > threshold;
    });
    return numbersAboveThreshold.length;
}

function main()
{
    let list = [3, 4, 5, 6, 1, 8, 2];
    let threshold = 2;
    let count = aboveThresholdCount(list, threshold);
    console.log("Count of numbers above threshold are : " + count);
}

main();