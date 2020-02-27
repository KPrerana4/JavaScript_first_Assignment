function getAboveThresholdCount(list, threshold)
{
    let count = 0;
    for(let number of list)
    {
        if(number > threshold)
            count++;
    }
    return count;
}

function findAboveThresholdCount(list, threshold)
{
    let numbersAboveThreshold = list.filter(function(element){
           return element > threshold;
    });
    return numbersAboveThreshold.length;
}

function main()
{
    console.log(findAboveThresholdCount([3, 4, 5, 6, 1, 8, 2], 2));
}

main();