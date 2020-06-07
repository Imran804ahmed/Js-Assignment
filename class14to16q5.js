var myArray    = new Array();
    myArray[0] = "1";

    myArray[1] = "2";
 
    myArray[2] = "3";
   
    myArray[3] = "4";
  
    myArray[4] = "5";
  

for (var i=0; i<5; i++) {
  document.write("<tr><td>Number " + i + " is:</td>");
  document.write("<td>" + myArray[i] + "</td></tr>");
}
