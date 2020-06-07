document.write("<br><br>  Question no#03: <br>")
 var signal = prompt("Enter the signal color:")
 if (signal=="Red" || signal=="red" || signal=="RED"){
     document.write(signal + " For Must Stop")
 }
 else if (signal=="Yellow" || signal=="yellow" || signal=="YELLOW"){
     document.write(signal + " For Ready To Move")
 }
 else if (signal=="Green" || signal=="green" || signal=="GREEN"){
     document.write(signal + " For Move Now")
 }
 else{
     document.write("Only enter the signal color!!")
 }