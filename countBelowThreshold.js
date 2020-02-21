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

function main()
{
    let list = [3, 4, 5, 6, 1, 8, 2];
    let threshold = 4;
    let count = belowThresholdCount(list, threshold);
    console.log(count);
}

function main()
{
    let list = [3, 4, 5, 6, 1, 8, 2, 9];
    let threshold = 5;
    let numbersBelowThreshold = list.filter(element => element > threshold);
    let length = numbersBelowThreshold.length;
    console.log("numbers Count (below threshold) : " + length);
}

main();