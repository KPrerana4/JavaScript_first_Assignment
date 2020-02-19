function checkDescendingOrder(list)
{
    let index = 0,order;
    do{
        order = list[index] > list[index + 1];
        index++;
    }
   while(order && index < list.length - 1);
   return order;
}

function main()
{
    let list = [2,4,1,6,5];
    console.log(list+" is in descending order:"+checkDescendingOrder(list));
    list = [40,30,20,10];
    console.log(list+" is in descending order:"+checkDescendingOrder(list));
}

main();