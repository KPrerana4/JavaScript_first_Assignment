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

function countEvenNumbers(list)
{
    let evenNumbers = list.filter(element => element % 2 == 0);
    return evenNumbers.length;
}

function main()
{
    let list = [0, 3, 4, 8, 11, 7, 9, 10, 120];
    let evenCount = countEvenNumbers(list);
    console.log(evenCount);
}

main();