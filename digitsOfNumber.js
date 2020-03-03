function getDigits(number)
{
    let digits = [];
    while(number > 0)
    {
        let lastDigit = number % 10;
        digits.unshift(lastDigit);
        number = Math.floor(number / 10);
    }
    return digits;
}

function main()
{
    let number = 14250;
    console.log("Digits of a number : " + getDigits(number));
}

main();
