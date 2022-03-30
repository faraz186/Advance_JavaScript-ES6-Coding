// var a = "abc"
// console.log(a);


// console.log(a);
// var a = "abc"


// let b = "abc"
// console.log(b);


// console.log(b);
// let b = "abc"


// const c = "abc"
// console.log(c);


// console.log(c);
// const c = "abc"


// const a = [];
// a[0] = "Mohammad"
// console.log(a);


// const a = [];
// a[2] = "Mohammad"
// console.log(a);


// const a = {}
// a['name'] = "Mohammad Faraz"
// console.log(a);


// const a = {}
// a['name'] = "Mohammad Faraz"
// console.log(a.name);


// const a = 12

// function s()
// {
//     a = 15
// }

// s()
// console.log(a);



// let b = "faraz"

// function s()
// {
//     b = "Mohammad"
// }

// s()
// console.log(b);



// if(true){
//     var a = 12
// }

// console.log(a);


// if(true)
// {
//     let a = 12
//     console.log(a);
// }


// console.log(a);
// if(true)
// {
//     var a = 12
// }



// const a = ["Mohammad"]
// a[1] = 123
// console.log(a);


// const a = {}
// a["age"] = 123
// console.log(a);


// const a = {}
// a.name = "Mohammad Faraz"
// console.log(a);


// var c = 156;

// function names(){
//     c = 50
// }

// console.log(c);
// names();


// 0 false
// "" false
// -1 true
// [] true
// {} true
// null false
// undefined false
// true true
// false false


// var
// block scope = false
// re declareable = true
// re assible = true
// hoisting = true

// let
// block scope = true
// redeclareable = false
// re assible = true
// hoisting = false

// const
// block scope = true
// redeclareable = false
// re assible = false
// hoisting = false


// let a = [1,2,3,4,5,6,7,8,9,10];
// let b = [
//   {
//     id: 1,
//     name: "Muhammad Ali",
//     category: "a",
//   },
//   {
//     id: 2,
//     name: "Abdul Basit",
//     category: "a",
//   },
//   {
//     id: 3,
//     name: "Muhammad Ahmed",
//     category: "b",
//   },
//   {
//     id: 4,
//     name: "Ahmed Ali",
//     category: "a",
//   },
//   {
//     id: 5,
//     name: "Yaseen Ahmed",
//     category: "b",
//   },
//   {
//     id: 6,
//     name: "Muhammad Furqan",
//     category: "a",
//   },
// ];


// for(var i = 0 ; i < a.length; i++){
//     console.log(a[i]);
// }



// a.forEach(function(x){
//     console.log(x);
// })



// let filterItems = a.filter(function(z){
//     if(z <= 6){
//         return z
//     }
// }) 

// console.log(filterItems);



// let selectedObj = b.find(function(v){
//     if(v.id == 4){
//         return v
//     }
// })

// console.log(selectedObj);



// let filterItem = b.filter(function(x){
//     if(x.name.includes("Muhammad")){
//         return x
//     }
// })

// console.log(filterItem);


// ************************Templates Literals***********************


// let string1 = "Mohammad"
// let string2 = "Faraz"

// let c = `Hello My name is ${string1} ${string2}`

// console.log(c);



// let string1 = 211.5151
// let string2 = 25.5151

// let c = `The Sum of ${string1} and ${string2} is ${(string1 + string2).toFixed(2)}`

// console.log(c);



// ************************Ternary Operators***********************

// let bool = true;

// bool?console.log("Equal"):console.log("Not Equal");


// let bo = false;

// bo?console.log("Equal"):console.log("Not Equal");


// ******************************Practice Session***************************

// let a = [1,2,3,4,5,6,7,8,9,10];
// let b = [
//   {
//     id: 1,
//     name: "Muhammad Ali",
//     category: "a",
//   },
//   {
//     id: 2,
//     name: "Abdul Basit",
//     category: "a",
//   },
//   {
//     id: 3,
//     name: "Muhammad Ahmed",
//     category: "b",
//   },
//   {
//     id: 4,
//     name: "Ahmed Ali",
//     category: "a",
//   },
//   {
//     id: 5,
//     name: "Yaseen Ahmed",
//     category: "b",
//   },
//   {
//     id: 6,
//     name: "Muhammad Furqan",
//     category: "a",
//   },
// ];


// for(var i = 0 ; i < a.length; i++)
// {
//   console.log(a[i]);
// }

// a.forEach(function(k){
//   console.log(k);
// })


// let filterItem = a.filter(function(x)
// {
//   if(x <= 7)
//   {
//     return x
//   }
// })
// console.log(filterItem);



// let filterItem2 = b.filter(function(y)
// {
//   if(y.category == 'b')
//   {
//     return y
//   }
// })

// console.log(filterItem2);



// let filterItem3 = b.find(function(z)
// {
//   if(z.id == 4)
//   {
//     return z
//   }
// })

// console.log(filterItem3);



// let filterItem4 = b.filter(function(v)
// {
//   if(v.name.includes("Muham"))
//   {
//     return v
//   }
// })

// console.log(filterItem4);


// var pattern = true;


// pattern?console.log("Success"):console.log("Incorrect");


// var num = 20


// num <12?console.log("Success"):console.log("Incorrect");


// ***********************DeStructuring Of Array***********************

// let arr = ["Mohammad",12,true,{
//   name:"Faraz",
//   age: 21,
//   address: "karachi",
// },"Ahmed",[1,2,"10",false]]

// let [string1] = arr

// let {name,address} = arr[3]

// let [,,string2] = arr[5]



// console.log(string2);

// console.log(name,address);

// console.log(string1);


// ***********************DeStructuring Of Object***********************

// let obj = {
//   course : "Web and Mobile Development",
//   Module: "B",
//   Section: "Tues-Fri",
//   arr1:["Saims",154,true,{
//     Teacher: "Sir Basit Ayaz",
//     age: 22,
//     Profession : "Teacher",
//   },44]
// }

// let {Module} = obj

// let {age} = obj.arr1[3]

// let [,,,,num] = obj.arr1

// console.log(num);

// console.log(age);

// console.log(Module);


// ***********************Spread Operator Using Array***********************


// let arr = ["Mohammad",12,true,"152"]

// let arr2 = arr

// arr.push(100)

// console.log(arr);
// console.log(arr2);


// let arr = ["Mohammad",12,true,"152"]

// let arr2 = [...arr]

// arr.push(100)

// console.log(arr);
// console.log(arr2);



// ***********************Spread Operator Using Objects***********************


// let masterDetail = {
//   Institute : "SAIMS",
//   batch : 4,
// }



// let obj = {
//   name: "Mohammad Faraz",
//   age: 21,
//   address : "Karachi",
// }


// console.log(obj);



// let obj = {
//   name: "Mohammad Faraz",
//   age: 21,
//   address : "Karachi",
//   ...masterDetail
// }

// console.log(obj);




