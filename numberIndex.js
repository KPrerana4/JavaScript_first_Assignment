function findIndexOfNumber(list, number)
{
    for(let index = 0;index < list.length; index++)
    {
        if(list[index] == number)
            return index;
    }
    return -1;
}

function findIndexOfNumber(list, number)
{
    return list.findIndex(function(element){
        return element == number;
    });
}

function main()
{
    let list = [1, 2, 3, 4, 100, 99, 98, 97, 4, 98];
    let number = 4;
    let index = findIndexOfNumber(list, number);
    if(index == -1)
       console.log("Not found");
     else
       console.log("number found at "+index);
}

main();