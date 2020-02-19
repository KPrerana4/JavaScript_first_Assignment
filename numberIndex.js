function findIndex(list, number)
{
    for(let index = 0;index < list.length; index++)
    {
        if(list[index] == number)
            return index;
    }
    return -1;
}

function main()
{
    let list = [1,2,3,4,100,99,98,97];
    let number = 4;
    let index = findIndex(list, number);
    if(index == -1)
       console.log("Not found");
     else
       console.log("number found at "+index);
}

main();