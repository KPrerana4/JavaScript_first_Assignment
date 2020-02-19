function countOddNumbers(list)
{
    let oddCount = 0;
    for(let number of list)
    {
      if(number % 2 !=0)
      {
        oddCount++;
      }
    }
    return oddCount;
}

function main()
{
    let list = [0, 3, 4, 8, '11', 7, 9, 10];
    let oddCount = countOddNumbers(list);
    console.log(oddCount);
}

main();