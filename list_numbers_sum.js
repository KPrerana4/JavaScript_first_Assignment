function findSumOfList(numbers)
{
    let sum = 0;
    for(let element of numbers)
    {
        sum += element;
    }
    return sum;
}

function calculateSumOfList(numbers)
{
    let sum = numbers.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    return sum;
}

function main()
{
    let numbers = [1, 10.2, 20, 30.4, 2, 3, 9, 44];
    console.log("Sum of numbers : " + calculateSumOfList(numbers));
}

main();