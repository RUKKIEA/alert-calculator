alert("welcome to my alert CALCULATOR , enter the numbers to perform operation")
var num1= parseInt(prompt("Enter the first number?"))
var op = prompt("enter the preferred operator: operators can be any one of the following * / + -")
var num2= parseInt(prompt("Enter the second number?") )


if (op==="+") { alert ((num1)+ "+" + (num2) + "=" + ((num1)+(num2)))} 

else if (op==="-") { alert ((num1)+ "-" + (num2) + "=" + ((num1)-(num2)))} 
else if (op==="*") { alert ((num1)+ "*" + (num2) + "=" + ((num1*num2)))} 
 
else if (op==="/") { alert ((num1)+ "/" + (num2) + "=" + ((num1)/(num2)))} 

else alert("Invalid input, use any of the following OPERATORS * / + - " )


