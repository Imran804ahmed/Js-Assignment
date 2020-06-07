document.write("<br><br>  Question no#02: <br>")
var gender =prompt("Enter the city name: ")
if (gender=="Male" || gender=="male" || gender=="MALE" ){
    document.write("Good Morning Sir")
}
else if (gender=="FEMALE" || gender=="Female" || gender=="female"  ){
    document.write("Good Morning Ma'am")
}
else{
    document.write("Your have to write only gender!!")
}