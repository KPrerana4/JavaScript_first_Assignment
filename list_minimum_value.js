function minimumOfList(list)
{
    let element, minimum = list[0];
    for(element of list){
        if(minimum > element){
            minimum = element;
        }
    }
    return minimum;
}

function main()
{
    let list = [1, 10, 8, 180, 25, 100, 88, -2, 160];
    let minimum = minimumOfList(list);
    console.log("Minimum value : " + minimum);
}

main();