let arr1 = [1, 32, 5, 90, 2];
let arr2 = [52, 83, 3];
let arr3 = arr1.concat(arr2);
console.log("Merging two arrays : " + arr3); 


// Splicing 2 elements starting at index 3
let m = arr3.splice(4 , 2);
console.log("Splicing of an array : " + m);     


// Sorting the modified arr3
let n = arr3.sort(function(a, b){return a - b});
console.log("Sorting of an array : "+ n);    


//specific item in array
let p=arr2.includes(3);
console.log("Specific array element: "+ p);

//indexof
let d= arr3.indexOf(3);
console.log("Index: "+ d);