// const obj={a:1,b:{c:2}};
//const{a,b:{c:d},}=obj
/*function calculator(a,b) {
   let sum=a+b;
  let  diff=a-b;
  let  product=a*b
   let division=a/b;
   return [sum,diff,product,division];
}
const[sum,diff,product,division]=calculator(7,3);
console.log(sum);
console.log(diff);
console.log(product);
console.log(division);*/
const marks={sec1:{practical:15,viva:10},
             sec2:{practical:16,viva:11}}
const{sec1:{practical:practical1,viva:viva1},sec2:{practical:practical2,viva
:viva2}}=marks
console.log(practical1,viva1,practical2,viva2);