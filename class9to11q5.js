document.write("<br><br>  Question no#05(a): <br>")
 var a = 4; 
 if (++a === 5){ document.write("given condition for variable a is true"); }
 else {
     document.write("given condition for variable a is not true");
 }
 document.write("<br><br>  Question no#05(b): <br>")
 var b = 82; 
 if (b++ === 83){ alert("given condition for variable b is true"); }
 else {
     document.write("given condition for variable a is not true");
 }

 document.write("<br><br>  Question no#05(c): <br>")
 var c = 12;
  if (c++ === 13){ document.write("condition 1 is true"); }
  else if (c === 13){ document.write("condition 2 is true"); }
  else if (++c < 14){ document.write("condition 3 is true"); }
  else if(c === 14){ document.write("condition 4 is true"); }
  else{document.write("Condition is not satisfy");} 

  document.write("<br><br>  Question no#05(d): <br>")
 var materialCost = 20000; 
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){ document.write("The cost equals"); } 
 else{document.write("The cost not equal");}