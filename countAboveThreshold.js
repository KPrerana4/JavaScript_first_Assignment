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

function main()
{
    let list = [3, 4, 5, 6, 1, 8, 2];
    var threshold = 2;
    let numbersAboveThreshold = list.filter(function(element){
            return element > threshold;
        });
    let length = numbersAboveThreshold.length;
    console.log("Count of numbers above threshold : " + length);
}

main();