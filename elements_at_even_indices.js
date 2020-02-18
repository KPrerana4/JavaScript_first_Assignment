var array = new Array(1, "a", 3.8, 'abcd', "ef");

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

console.log(getList())