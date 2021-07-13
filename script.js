//first task
// let inp= document.createElement('input');
// inp.id='elem';
// inp.value='Привет';
// document.body.prepend(inp);
// let elem = document.getElementById('elem');

// function func (){
//     alert(this.value)
// }
// let funUser = func.call(elem,'value');

//second task
// let inp = document.createElement('input')
// inp.id = 'elem'
// inp.value = 'Привет'
// document.body.prepend(inp)
// let elem = document.getElementById('elem')

// function func(surname, name) {
// 	alert(this.value + ',' + surname + ' ' + name)
// }

// func.call(elem, 'Иванов', 'Иван')

//third task
// let funUser =func.apply(user,['name','surname']);
// let funUser = func.apply(elem,['value']);

// task 4
let inp = document.createElement('input')
inp.id = 'elem'
inp.value = 'Привет'
document.body.prepend(inp)

elem = document.getElementById('elem')

function func(name, surname) {
	alert(this.value + ' ' + name + ' ' + surname)
}
let bindfunc = func.bind(elem)

bindfunc('Иван', 'Иванов')
bindfunc('Nurperi', 'Mavlianbek')
