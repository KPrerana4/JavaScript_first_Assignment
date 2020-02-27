function findEvenIndexElements(list)
{
    let evenIndexElements = [];
    for(let index = 0 ; index < list.length ; index+=2){
         evenIndexElements.push(list[index]);
    }
    return evenIndexElements;
}

function getEvenIndexElements(list)
{
    let evenIndexElements = list.filter(isEven);
    return evenIndexElements;
}

function isEven(element, index)
{
    return index % 2 == 0;
}

function main()
{
    let list = [1, "a", 3.8, 'abcd', "ef"];
    console.log("Elements at even indices are : " + getEvenIndexElements(list));
}

main();