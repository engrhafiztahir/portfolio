function number(num)
{

console.log(num);
var Result=document.getElementById('Result');
Result.value += num;

}


function clearResult()
{

//console.log(num);
var Result=document.getElementById('Result');
Result.value =""
}



function getResult()
{

//console.log(num);
var Result=document.getElementById('Result');
Result.value =eval(Result.value);
}

function inverse()
{

//console.log(num);
var Result=document.getElementById('Result');
Result.value =Math.inverse(Result.value);
}






















