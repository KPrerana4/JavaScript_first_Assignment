var numbersList = [1, -3, 5, 2, 4, 6, 7, -8, 99, 100];
var number;
var oddNumbers = [];
for(number of numbersList)
{
    if(number % 2 != 0)
    {
        oddNumbers.push(number);
    }
}

function main()
{
    let list = [1, -3, 5, 2, 4, 6, 7, -8, 99, 100];
    let oddNumbers = list.filter(element => element % 2 != 0);
    console.log("Odd numbers in the list : " + oddNumbers);
}
main();