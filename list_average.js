function average()
{
    let number, listLength = list.length, sum = 0;
    for(number of list)
    {
        sum += number;
    }
    let average = sum/listLength;
    return average;
}

//var list = [2, 6, 8.4, 10, 88, 44];
//console.log(average());

function main()
{
    let list = [2, 6, 8.4, 10, 88, 44];
    let sumOfList = list.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    let average = sumOfList/list.length;
    console.log(average);
}

main();