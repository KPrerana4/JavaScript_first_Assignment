function findIndexOfNumber(list, number)
{
    for(let index = 0;index < list.length; index++)
    {
        if(list[index] == number)
            return index;
    }
    return -1;
}

function getIndexOfNumber(list, number)
{
    return list.indexOf(number);
}

function main()
{
    let index = getIndexOfNumber([1, 2, 3, 4, 100, 99, 98, 97, 4, 98], 100);
    if(index == -1){
       console.log("Not found");
    }
    else{
       console.log("number found at "+index);
    }
}

main();