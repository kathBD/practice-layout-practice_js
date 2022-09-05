//tipo especial de funcion segun el algoritmo definido

function* iterate(array){

    for(let value  of array){
        yield value;
    }

}

const it = iterate(['Tsuki', 'Pedro', 'Sebastian', ' Ana'])

//recuerda su estado
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

const array = [5, 4, 3, 2, 1]
for (let numero of
 array) {
console.log(numero) // 5 4 3 2 1
}

const objeto = { a: 1, b: 2, c: 3 }

for (let elemento in objeto) {
  console.log(elemento) // 'a' 'b' 'c'
}


const array2 = [5, 4, 3, 2, 1]
for (let elemento in array2) {
  console.log(elemento) // '0' '1' '2' '3' '4'
}

/* const array = {
	'0': 5,
  '1': 4,
  '2': 3,
  '3': 2,
  '4': 1
}*/