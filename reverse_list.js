function reverseTheList(list)
{
    let listLength = list.length, temporary;
    for(let index = 0 ; index < listLength/2 ; index++){
        temporary = list[index];
        list[index] = list[listLength - index - 1];
        list[listLength - index - 1] = temporary;
    }
    return list;
}

function listReverse(list)
{
    list.reverse()
}

function main()
{
    let list = [1, 'a', "abcd", "b", 3.6, 'wxyz', 98, 120.86];
    listReverse(list)
    console.log("List in reverse order : " + list);
}

main();