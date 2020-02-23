function findEvenNumbers(list)
{
    let evenNumbers = [];
    for(let element of list){
        if(element % 2 == 0){
            evenNumbers.push(element);
        }
    }
    return evenNumbers;
}

function checkEven(element)
{
    return element % 2 == 0;
}

function findEvenNumbers(list)
{
    let evenNumbers = list.filter(checkEven);
    return evenNumbers;
}

function main()
{
    let list = [1, 0, -3, "11", 56, 101, 98, "12"];
    let evenNumbers = findEvenNumbers(list);
    console.log("Odd numbers in the list : " + evenNumbers);
}

main();