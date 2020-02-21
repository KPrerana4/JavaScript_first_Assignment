//var list = [1, 'a', "abcd", "b", 3.6, 'wxyz'];
//reverseList();

function reverseList()
{
    let listLength = list.length;
    for(let index = listLength-1; index >= listLength/2; index--)
    {
        let element = list[index];
        list[index] = list[listLength - index - 1];
        list[listLength - index - 1] = element;
    }
}

function main()
{
    let list = [1, 'a', "abcd", "b", 3.6, 'wxyz'];
    console.log("List in the revrse order : " + list.reverse());
}

main();