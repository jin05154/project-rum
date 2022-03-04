var today = new Date();
var currentyear = parseInt(today.getFullYear());
var startyear = currentyear;
var endyear = currentyear - 90;

document.write("<select name=year> ");
document.write("<option value='2020' selected>");
for (i = startyear; i >= endyear; i--) document.write("<option>" + i);
document.write("</select>년  ");

document.write("<select name=month>");
document.write("<option value='' selected>");
for (i = 1; i <= 12; i++) document.write("<option>" + i);
document.write("</select>월  ");

document.write("<select name=day>");
document.write("<option value='' selected>");
for (i = 1; i <= 31; i++) document.write("<option>" + i);
document.write("</select>일  ");

// YYYY-MM-DD format
var signup_birthday = year.concat("-", month, "-", day);
document.write(signup_birthday);