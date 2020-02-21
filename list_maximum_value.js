var getMaximumValue = function(){
    maximum = list[0];
    for(let element of list)
    {
        if(element > maximum)
        {
            maximum = element;
        }
    }
}

var list = new Array(1, 10, 8, 30, 25, 100, 88);
var maximum;
getMaximumValue();
//console.log(maximum);

function main()
{
    let list = [1, 10, 8, 30, 25, 100, 88, 120, 160];
    let maximum = list.reduce(function(accumulator, currentValue){
            return Math.max(accumulator, currentValue);
    });
    console.log("Maximum value of list : " + maximum);
}

main();