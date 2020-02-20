function myMap(functionName, list)
{
    let element, newList = [];
    for(element of list)
    {
        newElement = functionName(element);
        newList.push(newElement);
    }
    return newList;
}

function sum(element)
{
    element += 10;
    return element;
}

function multiply(element)
{
    element *= 4;
    return element;
}

function main()
{
    let list = [1,2,3,4];
    let newList = myMap(sum, list);
    console.log("Sum of array elements:" + newList);
    newList = myMap(multiply, list);
    console.log("Product of array elements:" + newList);
}

main();