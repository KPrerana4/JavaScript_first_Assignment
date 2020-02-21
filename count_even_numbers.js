function countEvenNumbers(list)
{
    let evenCount = 0;
    for(let number of list)
    {
      if(number % 2 ==0)
      {
        evenCount++;
      }
    }
    return evenCount;
}

function main()
{
    let list = [0, 3, 4, 8, 11, 7, 9, 10, 120];
    let evenCount = countEvenNumbers(list);
    console.log(evenCount);
}

function main()
{
    let list = [0, 3, 4, 8, 11, 7, 9, 10, 120, 199, 220];
    let evenNumbers = list.filter(element => element % 2 == 0);
    console.log("Number of even numbers in list : " + evenNumbers.length);
}

main();