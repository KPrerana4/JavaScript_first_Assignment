//var array = new Array(1, "a", 3.8, 'abcd', "ef");

var getList = function(){
    let list = [];
    let index, k = 0;
    let arrayLength = array.length;
    for(index = 0; index < arrayLength; index+=2)
    {
        list[k++] = array[index];
    }
    return list;
}

function main()
{
    let list = [1, "a", 3.8, 'abcd', "ef"];
    let newList = list.filter((element, index) => index % 2 == 0);
    console.log("Numbers at even indices : " + newList);
}

main();