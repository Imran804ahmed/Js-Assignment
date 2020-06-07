document.write("<br><br>  Question no#11: <br>");
 var num1 = +prompt("Enter the first number: ");
 var num2 = +prompt("Enter the second number: ");
 var oper = prompt("Enter the operator like '+' , '-' , '*' , '/' ");
 if (oper=="+"){document.write(num1+num2)}
 else if (oper=="-"){document.write(num1-num2)}
 else if (oper=="*"){document.write(num1*num2)}
 else if (oper=="/"){document.write(num1/num2)}
 else{document.write("Please Enter the right operator")
}
 