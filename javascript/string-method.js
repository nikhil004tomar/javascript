let str1='    nikhil tomar    '
str2=str1.toLowerCase()
str3=str2.trim()
str4=str3.slice(1,4)
str5=str1.concat(str3)
console.log(str1.toUpperCase());
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
// practice question : prompt the user to enter their full name generate a username for them based on the input .Start username with @ followed by their full name and ending the fullname length.
let fullname=document.writeln('enter the your name:');
let username="@"+fullname+fullname.length;
console.log(username);

// This cod eis execute at browser or chrome
