// Input = [2, 3, 4, 6, 7]
// Output = [32, 243, 1024, 7776, 16807]

let a= [2, 3, 4, 6, 7];
let s=[];
a.forEach((element)=>{
  s.push(element**5);
})
console.log(s);
