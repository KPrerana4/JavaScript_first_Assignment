function reverseTheList(list)
{
    let listLength = list.length, temporaryContainer;
    for(let index = 0 ; index < listLength/2 ; index++){
        temporaryContainer = list[index];
        list[index] = list[listLength - index - 1];
        list[listLength - index - 1] = temporaryContainer;
    }
    return list;
}

function main()
{
    let list = [1, 'a', "abcd", "b", 3.6, 'wxyz', 98, 120.86];
    console.log("List in reverse order : " + reverseTheList(list));
}

main();