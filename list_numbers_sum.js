function sumOfList(list)
{
    let sum = 0;
    for(let element of list)
    {
        sum += element;
    }
    return sum;
}

function sumOfList(list)
{
    let sum = list.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    return sum;
}

function main()
{
    let list = [1, 10.2, 20, 30.4, 2, 3, 9, 44];
    console.log("Sum of numbers : " + sumOfList(list));
}

main();