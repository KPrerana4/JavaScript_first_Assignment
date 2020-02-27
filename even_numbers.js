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

function getEvenNumbers(list)
{
    return list.filter(checkEven);
}

function checkEven(element)
{
    return element % 2 == 0;
}

function main()
{
    let list = [1, 0, -3, "11", 56, 101, 98, "12"];
    let evenNumbers = getEvenNumbers(list);
    console.log("Odd numbers in the list : " + evenNumbers);
}

main();