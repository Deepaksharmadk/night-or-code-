//declaration of string
let names ='deepaksharma'
//or
let nzme =new String('deepaksharma')
 //both above declaration are same
 //---------- access of string  indexs
console.log(names[0] )
//expected output d
console.log(names[1] )
//expected output e
console.log(names[2] )
//expected output e
console.log(names[3] )
//expected output p
console.log(names[4] )
//expected output a
console.log(names[5] )
//expected output k
console.log(names[6] )
//expected output s
//string iindex access through square bracket
//string in how many word access through .lenght property
console.log(names.length);
//expected output 12
// use anchor property
console.log(names.anchor('hello'));
//expected output <a name ='hello'>deepaksharma</a>
//use at property
console.log(names.charAt(5));
//expected output k
let nameq='dee'
console.log(nameq.concat(nzme));
//expected output deedeepaksharma
