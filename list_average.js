function sumOfList(list)
{
    let sum = 0;
    for(let element of list)
    {
        sum += element;
    }
    return sum;
}

function calculateSumOfList(list)
{
    let sum = list.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    return sum;
}

function averageOfList(list)
{
    return calculateSumOfList(list) / list.length;
}

function main()
{
    let list = [1, 10.2, 20, 30.4, 2, 3, 9, 44];
    console.log("Average of numbers : " + averageOfList(list));
}

main();