function maximumOfList(list)
{
    let element, maximum = list[0];
    for(element of list){
        if(maximum < element){
            maximum = element;
        }
    }
    return maximum;
}

function main()
{
    let list = [1, 10, 8, 180, 25, 100, 88, 120, 160];
    let maximum = maximumOfList(list);
    console.log("Maximum value : " + maximum);
}

main();