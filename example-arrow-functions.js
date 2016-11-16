// var names = ['Aaryn', 'Take', 'Jen'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
//   var x = 'something';
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Aaryn'));
//
//
// var person = {
//   name: 'Aaryn',
//   greet: function () {
//       names.forEach((name) => {
//         console.log(this.name + ' says hi to ' + name)
//       });
//   }
// };
//
// person.greet();
//
// function add (a,b) {
//   return a + b
// }

var addStatement = (a,b)  => {
  return a + b;
}
console.log(addStatement(4,7));

var addExpression = (a,b) => a + b;

console.log(addExpression(4,3));
