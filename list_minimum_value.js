function minimumOfList(list)
{
    let element, minimum = list[0];
    for(element of list){
        if(minimum > element){
            minimum = element;
        }
    }
    return minimum;
}

function lowestNumberOfList(list)
{
    let minimum = list.reduce(function(accumulator, currentValue){
        return Math.min(accumulator, currentValue);
    });
    return minimum;
}

function main()
{
    let list = [12, 10, 8, 180, 25, 100, 88, 2, 160];
    console.log("Minimum value : " + lowestNumberOfList(list));
}

main();