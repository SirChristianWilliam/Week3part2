console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this? A. The conditional value, expression 2. 
console.log('count from 0 to 5');
for(let i=0;i<6;i++) {
  console.log(i);
 }
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this? A. The starting value expression 1. 
console.log('count from 3 to 5');
for(let i=3;i<6;i++) {
  console.log(i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this? A. Expression 3, the increment. 
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for(let i = 2; i<12; i=i+2) {
  console.log(i);
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for(let i = 5;i>-1;i--) {
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for(star of stars) {
  console.log(star);
}
 //2nd example with the index value(+1):
for(let star in stars) {
x = stars[star];
for(let indeX of star) {
  xy = indeX;
}
console.log(x + ", " + Number(xy-1+2));
}
// end of 2nd example. This took me like 3 hours to figure out, I'd seen the example of nesting
// "of" and "in" loops before in my studies, but it was with an object. It took some thinking
// to figure out how to do it here but I knew it was possible. I'm not used to console.log() 
// as much as I am to "document.getElementById", so that made a big difference in going about
// this problem. Got it done though so it'll be a lot easier next time. 
// Also, I thought it was possible to add a value to one of the index variables in the loops
// in order to visually start the array at "1", rather than "0". You'll see since it is a string,
// adding concatenates, not adds, so I subtracted then added to get the desired result, while
// forcing that variable into a number value. 
// How could I have done this differently? Thanks!
  
// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let h = 0;
 while(h < stars.length) {
  console.log("Using 'while':",stars[h] + " " + stars.indexOf(stars[h]));
   h++;
  
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let zero = 0;
let max = 5;
while(zero <= max) {
console.log(zero++)
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let fiver = 5;
let tenner = 10;
while(tenner >= fiver) {
  console.log(tenner--)
}
