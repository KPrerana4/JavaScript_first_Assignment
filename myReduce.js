function myReduce(callBack, list, initialValue){
    if(initialValue != undefined){
        list.unshift(initialValue);
    }
    let accumulater = list[0];
    for(let index = 1;index < list.length; index++){
        accumulater = callBack(accumulater, list[index], index, list);
    }
    return accumulater;
}

function sumOfListElements(accumulater, currentValue, index, list)
{
    return accumulater + currentValue;
}

function minimumOfList(accumulater, currentValue, index, list)
{
    return Math.min(accumulater, currentValue);
}

function main()
{
    let list = [10, 20, 99, 1, 100];
    let sum = myReduce(sumOfListElements, list, 10);
    console.log("Sum of elements of the array : " + sum);
    let minimumValueOfList = myReduce(minimumOfList, list);
    console.log("Minimum value of the array : " + minimumValueOfList);
}

main();