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

list = ["abcd", 'a', "uvwxyz", "1234", '1234.68'];
console.log(getStringLengths(list));
