// chapter 31 to 34 pdf work

var dt = new Date();
document.write (dt);


// var months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
// var currentmonth = new Date();

// var dtmonth = currentmonth.getMonth();
// alert (months[dtmonth]);


// var day = ["sun","mon","tue","wed","thus","fri","sat",];
// var dayys = new Date();

// var weekday = dayys.getDay();
// if (weekday == [0]){
//     alert("today is sun");
// }else if (weekday ==[1]){
//     alert ("today is mon")
// }else if (weekday ==[2]){
//     alert ("today is tue")
// }else if (weekday ==[3]){
//     alert ("today is wed")
// }else if (weekday ==[4]){
//     alert ("today is thus")
// }else if (weekday ==[5]){
//     alert ("today is fri")
// }else if (weekday ==[6]){
//     alert ("today is sat")
// }


// var days = ["sun","mon","tue","wed","thus","fri","sat",];
// var dayy = new Date();

// var weekdays = dayy.getDay();
// if (weekdays == [0]){
//     alert("Its fun day");
// }else if (weekdays ==[6]){
//     alert ("its fun day")
// }

document.write ("<br>");
document.write ("<br>");


var date = new Date();
var datedate = date.getDate();

if (datedate < 16){
    document.write ("First Fifteen Days Of Months")
}else{
    document.write ("Last Fifteen Days Of month")
}

document.write ("<br>");
document.write ("<br>");

var dt1 = new Date();
var dt2 = new Date("1-01-1970")
document.write("Current Date:" + dt1)


document.write ("<br>");
document.write ("<br>");

var dt1Milliseconds = dt1.getTime();
var dt2Minutes = dt2.getTime();

document.write("Elapsed Milliseconds since January 1,1970 : " +  dt1Milliseconds);
document.write ("<br>");
document.write ("<br>");


document.write("Elapsed Minutes since January 1,1970 : " +  dt2Minutes);


document.write ("<br>");
document.write ("<br>");

var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c === "12:"){
    document.write("It,s PM")
}else if(c === "13:"){
    document.write("It,s PM")
}else if(c === "14:"){
    document.write("It,s PM")
}else if(c === "15:"){
    document.write("It,s PM")
}else if(c === "16:"){
    document.write("It,s PM")
}else if(c === "17:"){
    document.write("It,s PM")
}else if(c === "18:"){
    document.write("It,s PM")
}else if(c === "19:"){
    document.write("It,s PM")
}else if(c === "20:"){
    document.write("It,s PM")
}else if(c === "21:"){
    document.write("It,s PM")
}else if(c === "22:"){
    document.write("It,s PM")
}else if(c === "23:"){
    document.write("It,s PM")
}else if(c === "24:"){
    document.write("It,s PM")
}else if(c === "01:"){
    document.write("It,s AM")
}else if(c === "02:"){
    document.write("It,s AM")
}else if(c === "03:"){
    document.write("It,s AM")
}else if(c === "04:"){
    document.write("It,s AM")
}else if(c === "05:"){
    document.write("It,s AM")
}else if(c === "06:"){
    document.write("It,s AM")
}else if(c === "07:"){
    document.write("It,s AM")
}else if(c === "08:"){
    document.write("It,s AM")
}else if(c === "09:"){
    document.write("It,s AM")
}else if(c === "10:"){
    document.write("It,s AM")
}else if(c === "11:"){
    document.write("It,s AM")
}

document.write ("<br>");
document.write ("<br>");

var later = new Date("12-31-2020");
document.write("Later Time : " + later); 

document.write ("<br>");
document.write ("<br>");

var ramadan = new Date();
var ramadan2 = new Date ("6-18-2015");

var ramad1 = ramadan.getTime();
var ramad2 = ramadan2.getTime();

var pastdays = ramadan - ramadan2
var d = pastdays/(1000*60*60*24);
document.write(Math.round( +d ) + " days have passed since 18 June,2015");

document.write ("<br>");
document.write ("<br>");

var No_of_units = 410;
var Charges_per_unit  = 16;
var late_payment = 350

document.write("Customer Name:"+ " "+"ABC");
document.write("<br>");
document.write("Month:"+ " " + months$[current_months]) ;

document.write("<br>");

document.write("No.of Units:"+ " "+ "410");
document.write("<br>");

document.write("Charges per Unit:"+ " "+ "16");

document.write("<br>");

document.write("Net Amount Payable (Within Due Date):"+ " "+ (No_of_units*Charges_per_unit));


document.write("<br>");

document.write("Late Payment surcharge:" +" " + late_payment);


document.write("<br>");

document.write("Gross Amount Payable (after Due Date):"+ "" + (No_of_units*Charges_per_unit+late_payment));

document.write("<br>");
document.write("<br>");

var ramadan1 = new Date();
var ramadan2 = new Date("06-18-2015");

var ramadan1_time = ramadan1.getTime();
var ramadan2_time = ramadan2.getTime();

var past_days = ramadan1-ramadan2;

var days_ = past_days/(1000*60*60*24);
document.write(Math.floor(days_)+ " " + "days have passed since 1st Ramadan,2015");

document.write("<br>");
document.write("<br>");



// FUNCTION

function greets(fist_name,last_name){
    document.write("Hello"+""+ fist_name + last_name ,"<br>")

}
greets("Sufyan","Sohail");

function telltime(){
    var now = new Date();
    document.write(now,"<br>","<br>");
}
telltime();

function add(){
    var a = +prompt("Input 1st No");
    var b = +prompt("Input 2nd No.");
    alert(a+b);
    
}
add();

function calculate (no_1,no_2,operators){
    var First_no = no_1;
    var second_no = no_2;
    var total = First_no+second_no;
    document.write(total);
}
calculate(10,20, "-");

var latter = prompt("Enter Word");
var capital_latter = latter.toUpperCase();

alert(capital_latter);

var latter$ = prompt("Enter Any Word i'll Show You last character of this word");
var last_latter = latter$.charAt();

alert(last_latter);
 
var user$ = prompt("Enter Your Name");

if(user$ === "!"|| "@"||"$"){
    alert("Enter Valid User Name")
}else{
    alert("Correct")

}

document.write("<br>");

var number1 = Math.round(3.45214);
var number2 = Math.floor(3.45214);
var number3 = Math.ceil(3.45214);

document.write(number1);
document.write("<br>");


document.write(number2);
document.write("<br>");


document.write(number3);
document.write("<br>");
document.write("<br>");

 var random_no = Math.random();
// console.log(random_no);
var random_no = random_no*2;

var toss = Math.ceil(random_no);
console.log(toss);

if(toss== ("1")){
    alert("Head");
}
else if(toss == ("2")){
    alert("Tail");
}

var secret_no = 7;
var ask = +prompt("Input one No from 1 to 10");

if (ask === secret_no){
    alert("Congratulations You Win")
}else{
    alert("You Lost")
}



