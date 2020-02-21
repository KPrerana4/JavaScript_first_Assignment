list = [1, 10.2, 20, 30.4, 2, 3, 9, 44];
var number;
var sumOfArray = 0;
for(number of list)
{
    sumOfArray += number;
}

function main()
{
    let list = [1, 10.2, 20, 30.4, 2, 3, 9, 44];
    let sumOfList = list.reduce(sum);
    console.log("Sum of numbers in list : " + sumOfList);
}

function sum(accumulator, currentValue)
{
    return accumulator + currentValue;
}

main();