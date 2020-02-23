function belowThresholdCount(list, threshold)
{
    let count = 0;
    for(let number of list)
    {
        if(number > threshold)
            count++;
    }
    return count;
}

function belowThresholdCount(list, threshold)
{
    let numbersBelowThreshold = list.filter(element => element < threshold);
    return numbersBelowThreshold.length;
}

function main()
{
    let list = [3, 4, 5, 6, 1, 8, 2, '0', 0];
    let threshold = 4;
    let count = belowThresholdCount(list, threshold);
    console.log("Count of numbers below threshold : "+count);
}

main();