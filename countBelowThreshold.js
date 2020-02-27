function getBelowThresholdCount(list, threshold)
{
    let count = 0;
    for(let number of list)
    {
        if(number > threshold)
            count++;
    }
    return count;
}

function findBelowThresholdCount(list, threshold)
{
    let numbersBelowThreshold = list.filter(element => element < threshold);
    return numbersBelowThreshold.length;
}

function main()
{
    console.log(findBelowThresholdCount([3, 4, 5, 6, 1, 8, 2, 0, 3], 4));
}

main();