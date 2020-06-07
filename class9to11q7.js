document.write("<br><br>  Question no#07: <br>");
var gues = +prompt("Enter a guess number (ranging from 1 to 10)");
if (gues===7){document.write(" “Bingo! Correct answer” ");}
else if (gues===+1){document.write(" “Close enough to the correct answer” ");}
else{document.write(" 'It's not a correct answer!!' ")}