function getStringLengths(list)
{
    let string, stringLengths = []
    for(string of list)
    {
      stringLengths.push(string.length);
    }
    return stringLengths;
}

function getStringLengths(list)
{
    return list.map(function(element){
        return element.length;
    });
}

function main()
{
    let list = ["abcd", 'a', "uvwxyz", "1234", '1234.689'];
    console.log("Lengths of strings : " + getStringLengths(list));
}

main();