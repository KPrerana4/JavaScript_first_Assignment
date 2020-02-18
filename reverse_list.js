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

var list = [1, 'a', "abcd", "b", 3.6, 'wxyz'];
reverseList();
console.log(list);