function reverseArray(array)
{
    let reversedArray = [];
    let arrayLength = array.length;
    for(let index = arrayLength - 1; index>=0; index--)
    {
        reversedArray.push(array[index]);
    }
    return reversedArray;
}

function reverseArray(array)
{
   let reversedArray = array.map(function(element, index, array){
           return  array[array.length - index -1];
   });
   return reversedArray;
}

function main()
{
    let array = [1, "abcd", "1234", 12.4];
    console.log("Reverse order of array : " + reverseArray(array));
}

main();