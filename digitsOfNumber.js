function getDigits(number)
{
    let digits = [];
    while(number > 0)
    {
        let lastDigit = number % 10;
        digits.push(lastDigit);
        number = Math.floor(number / 10);
    }
    return digits;
}

function reverseList(digits)
{
    for(let index = 0;index < digits.length/2;index++)
    {
        let temporary = digits[index];
        digits[index] = digits[digits.length - index -1];
        digits[digits.length - index -1] = temporary;
    }
    return digits;
}

function main()
{
    let number = 14250;
    let digits = getDigits(number);
    console.log(reverseList(digits));
}

main();