let fruits=["Apple","Orange","Banana","Watermelon","Mango"];
console.log(fruits[2]);
let c = fruits.push("Papaya");
console.log(fruits);
let b = fruits.shift(1);
console.log(fruits);
console.log(fruits.length);
for(let i=0;i<fruits.length;i++)
{
    console.log(`Fruits ${i} : ${fruits[i]}`);
}
console.log(fruits.reverse());

//sum of numbers
let a=[1,2,2,3,4,5,6];
let sum = 0;
for(let i=0 ; i<a.length ; i++)
{
      sum = sum + a[i];
}
console.log("SUM OF ELEMENTS: " + sum);