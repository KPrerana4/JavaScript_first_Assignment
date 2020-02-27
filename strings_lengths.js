function getStringsLengths(strings)
{
    let string, stringsLengths = []
    for(string of list)
    {
      stringLengths.push(string.length);
    }
    return stringsLengths;
}

function findStringsLengths(strings)
{
    return strings.map(function(element){
        return element.length;
    });
}

function main()
{
    let strings = ["abcd", 'a', "uvwxyz", "1234", '1234.689'];
    console.log("Lengths of strings : " + findStringsLengths(strings));
}

main();