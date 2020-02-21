var numbersList = [1, 3, 5, 2, 4, 6, 7, 8, 99, 100];
var number;
var evenNumbers = [];
for(number of numbersList)
{
    if(number % 2 == 0)
    {
        evenNumbers.push(number);
    }
}

function main()
{
    let list = [1, 3, 5, 2, 4, 6, 7, 8, 99, 100];
    let evenNumbers = list.filter(element => element % 2 == 0);
    console.log("Even numbers in the list : " + evenNumbers);
}
main();