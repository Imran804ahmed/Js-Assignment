document.write("<br><br>  Question no#06: <br>");
 var obtain = +prompt("Enter the obtain Marks:");
 var Total = +prompt("Enter the total marks");
 var percent = obtain/Total*100;
 var grade = 0;
 var remark = 0;
 if(percent >=80 ){grade="A-one";
 remark="Excellent"}
 else if (percent >=70){grade="A"
 remark="Good"}
 else if (percent >=60){grade="B"
 remark="You need to improve"}
 else{grade="Fail"
 remark="Sorry"}
 document.write("<br>MARKSHEET <br><br> Total Marks=" + Total + "<br> Marks Obtain=" + obtain + "<br> Percentage= " + percent + "%" + "<br> Grade=" + grade + "<br> Remarks=" + remark)
