document.write("<h1>Counting</h1> <br>");
(function name(n, m) {
    // body...
    if (n <= m) {

    document.write(n+",");
      n++;
      name(n, m);
    }
  })(1, 15);

  document.write("<h1>Reverse Counting</h1> <br>");
(function name(n, m) {
    // body...
    if (n >= m) {

    document.write(n+",");
      --n;
      name(n, m);
    }
  })(15, 1);
  
 document.write("<h1>Even Number</h1> <br>");
var i;
for (i = 0; i < 22; i++)
if ((i % 2) == 0)
  document.writeln(i);

  document.write("<h1>Odd Number</h1> <br>");
var i;
for (i = 0; i < 22; i++)
if ((i % 2)!== 0)
  document.writeln(i);
  document.write("<h1>Series Number</h1> <br>");
  var i;
  for (i = 1; i < 22; i++)
  
  if ((i % 2)== 0)
  
    document.writeln(i);
  