function getMinimumValue()
{
    minimum = list[0];
    for(let element of list)
    {
        if(element < minimum)
        {
            minimum = element;
        }
    }
}

var list = new Array(2, 10, 8, 30, 1, 100, 88);
var minimum;
getMinimumValue();
console.log(minimum);