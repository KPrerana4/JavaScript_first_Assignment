function myFilter(functionName, list){
    let element, newList = [];
    for(element of list){
        includeElement = functionName(element);
        if(includeElement == true){
            newList.push(element);
        }
    }
    return newList;
}

function numbersAbove30(element)
{
     return element > 30;
}

function evenNumbers(element)
{
    return element % 2 == 0;
}

function main()
{
    let list = [50, 61, 10, 21, 30, 40, 101, 99];
    let newList = myFilter(numbersAbove30, list);
    console.log("Numbers above 30 : " + newList);
    newList = myFilter(evenNumbers, list);
    console.log("Even numbers in the list : " + newList);
}

main();