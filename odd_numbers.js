function findOddNumbers(list)
{
    let oddNumbers = [];
    for(let element of list){
        if(element % 2 != 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

function checkOdd(element)
{
    return element % 2 != 0;
}

function findOddNumbers(list)
{
    let oddNumbers = [];
    oddNumbers = list.filter(checkOdd);
    return oddNumbers;
}


function main()
{
    let list = [1, 0, -3, "11", 56, 101, 98, "12"];
    let oddNumbers = findOddNumbers(list);
    console.log("Odd numbers in the list : " + oddNumbers);
}

main();