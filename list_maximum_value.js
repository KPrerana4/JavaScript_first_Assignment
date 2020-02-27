function maximumOfList(list)
{
    let element, maximum = list[0];
    for(element of list){
        if(maximum < element){
            maximum = element;
        }
    }
    return maximum;
}

function greatestOfList(list)
{
    let maximum = list.reduce(function(accumulator, currentValue){
        return Math.max(accumulator, currentValue);
    });
    return maximum;
}

function main()
{
    let list = [1, 10, 8, 180, 25, 100, 88, 120, 160];
    let maximum = greatestOfList(list);
    console.log("Maximum value : " + maximum);
}

main();