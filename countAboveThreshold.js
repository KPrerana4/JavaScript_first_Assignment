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

function main()
{
    let list = [3, 4, 5, 6, 1, 8, 2];
    let threshold = 4;
    let count = aboveThresholdCount(list, threshold);
    console.log(count);
}

main();