document.write("<br><br>  Question no#06: <br>")
var sub1= prompt("Enter Subject1 Name: ")
var sub2= prompt("Enter Subject2 Name: ")
var sub3= prompt("Enter Subject3 Name: ")
var mark1= +prompt("Enter " + sub1 + " Marks: ")
var mark2= +prompt("Enter " + sub2 + " Marks: ")
var mark3= +prompt("Enter " + sub3 + " Marks: ")
var total=100;
var ttotal=300;
document.write("Subjects --- Total Marks --- Obtained Marks --- Percentage% <br>")/
document.write(sub1 +"--------" + total +"------------------"  + mark1 +"----------------" + mark1/total*100 + "% <br>")
document.write(sub2 +"--------" + total +"------------------"  + mark2 +"----------------" + mark2/total*100 + "% <br>")
document.write(sub3 +"--------" + total +"------------------"  + mark3 +"----------------" + mark3/total*100 + "% <br>")
var tmarks=mark1+mark2+mark3;
var tper=tmarks/ttotal*100;
document.write("---------------------------------------------------------------------<br>")
document.write("-------------- 300 -----------------" + tmarks + " ------------- " + tper + "% <br>")

