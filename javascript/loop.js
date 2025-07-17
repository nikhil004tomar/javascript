for(let i=1;i<=5;i++){
console.log("this is my number :",i);

}

for( let i=1;i<=5;i++){
    console.log("nikhil tomar");
    
}

//Now i am start while loop.
let a=1;
while (a<=4) {
    console.log("This is the while loop:",a);
a++    
    
}

//Now i am start the do while loop
let b=2
do {
    console.log("this is the do while loop:",b);
    b++
} while (b<=4);

// Now iam start the for_of loop. for_of loop is not use object . It is only used to hte array and String 
// syntex of for_of loop : for(let val of strvar){
// do something }
let str="NIKHIL TOMAR "
for (const c of str) {
    console.log("This is for_of loop example: ",c, str.length);
}
// NOW I AM for_in loop 
// NOTE:The for_in loop is used to be object and array
// syntax : for(let key in objVar ){ }
let student={
    name:"nikhil tomar ",
age:21,
cgpa:7.5,
};
for (const key in student ) {
    console.log("key=",key, "value is:",student[key]);
    
        
    }
// Some practic question :

// Print all even number of 100
for (let d =0; d<=100;d++) {
    if (d%2==0) {
        console.log("even number:",d);   
    }
}
// Create a game where you start with any random number ,ask the user to keep guessing the game number utill the user enter the number 
let guessnumber=20;
let usernumber=prompt("Enter the number");
while (usernumber!=guessnumber) {
    usernumber=prompt("you guess the wrong number.Please guess the right number:");
    }
    console.log("congrate");
    // This programe is run in chrom or browser 
    
