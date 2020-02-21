function getStringLengths(list)
{
    let string;
    let stringLengths = []
    for(string of list)
    {
      stringLengths.push(string.length);
    }
    return stringLengths;
}

//list = ["abcd", 'a', "uvwxyz", "1234", '1234.689'];
//console.log(getStringLengths(list));

function main()
{
    let strings = ["abcd", 'a', "uvwxyz", "1234", '1234.689'];
    let stringLengths = strings.map(element => element.length);
    console.log("Lengths of strings : " + stringLengths);
}

main();