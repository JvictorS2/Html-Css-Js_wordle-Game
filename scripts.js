/* let Name = 'Accud'
let Name2 = "axcdd"

let array2 = Name2.split('')

let array = Name.split('')

for (let i = 0; i < array.length; i++){
    if (array[i] == array2[i]) {
        console.log(array[i] + 's')
    } else {
        console.log(array2[i] + 'n')
    }
} */

/* let array1 = ['a', 'c', 'c', 'u', 'd'];
let array2 = ['d', 'c', 'a', 'c', 'c'];
let a = [...array1];
let b = [...array2]


let oi = 'accud';

let index = AnswerSplittedEco.indexOf(AnswerSplittedEco[i]);
AnswerSplittedEco[index] = '';
for (let i = 0; i < array1.length; i++){
    if (array2.find(value => value == a[i]) != undefined) { 
       console.log('line: ' + i + ' (achou)')
        console.log(array1)
        console.log(array2)
        let index = a.indexOf(a[i]);
        a[index] = ''
        console.log(a)

    } else {
        console.log('line: ' + i + ' (nao achou)')
        console.log(a)
    }
}
 */

/* O indexOf() vai retornar sempre o primeiro index do elemento entre parênteses. */

/* let array = [5, 1, 2, 3, 4, 5];

const haDuplicado = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            return true;
        }
    }

    return false;
}

console.log(haDuplicado(array));
 */

/* let teste = "333";
let oi = /[a-z]/ig;





if (teste.match(oi) != null) {
    console.log('tem as letras')
} else {
    console.log('não tem as letras')
} */