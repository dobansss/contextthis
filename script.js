





'use strict'
//
// //
// // function showThis(a,b) {
// //     console.log(this);
// //     function sum() {
// //         return  a + b;
// //     }
// //
// //     console.log(sum());
// // }
// // showThis(4,5);
// //
// // const obj = {
// //   a: 20,
// //   b: 15,
// //   sum:function (){
// //       // console.log(this);
// //       function shout() {
// //           console.log(this);
// //       }
// //       shout();
// //   }
// // };
// // obj.sum();
// //
// // function User(name,id) {
// //     this.name = name;
// //     this.id = id;
// //     this.human = true;
// // }
// //
// // let ivan = new User('ivan',23);
// //
//
//
// function sayname(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//   name:'jhon'
//
// };
//
// sayname.call(user,'Bos');
// sayname.apply(user,['bos2']);
//
// function count(num) {
//     return this*num;
// }
//
// const doble = count.bind(2);
// console.log(doble(3));
//1 /this as fie window daca sta use strict as fie undefaind

//2  /Context u metodov obecta budet sam obect

//3 this in constructor si in class astai nou exemplar la obiect

//4 Rucinaia priviaska this call applay bind;


const btn = document.querySelector('button');


btn.addEventListener('click', function () {
    console.log(this); //this e ca event target
    this.style.backgroundColor ='red';

});

const obj = {
  num: 5,
    saynumber: function () {
       const say = ()=>{
           console.log(this);
       };
       say();
  }
};

obj.saynumber();

