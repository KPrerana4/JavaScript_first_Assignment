function findEvenIndexElements(list)
{
    let evenIndexElements = [];
    for(let index = 0 ; index < list.length ; index++){
        if(index % 2 == 0){
            evenIndexElements.push(list[index]);
        }
    }
    return evenIndexElements;
}

function findEvenIndexElements(list)
{
    let evenIndexElements = list.filter(checkIndexEvenOrNot);
    return evenIndexElements;
}

function checkIndexEvenOrNot(element, index)
{
    return index % 2 == 0;
}

function main()
{
    let list = [1, "a", 3.8, 'abcd', "ef"];
    console.log("Elements at even indices are : " + findEvenIndexElements(list));
}

main();