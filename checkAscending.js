function checkAscendingOrder(list)
{
    let index = 0,order;
    do{
        order = list[index] < list[index + 1];
        index++;
    }
   while(order && index < list.length - 1);
   return order;
}

function checkAscendingOrder(list)
{
    let newList = list.filter(function(element, index, list){
       return list[index] < list[index + 1];
    });
    return newList.length + 1 == list.length;
}

function main()
{
    let list = [2, 4, 1, 6, 5];
    console.log(list+" is in ascending order:"+checkAscendingOrder(list));
    list = [10, 20, 30, 40];
    console.log(list+" is in ascending order:"+checkAscendingOrder(list));
    list = [10, 20, 30, 26, 36];
    console.log(list+" is in ascending order:"+checkAscendingOrder(list));
}

main();