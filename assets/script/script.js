/* Nós do DOM */
let rowItem = document.getElementsByClassName('row-item');
let keys = document.getElementsByClassName('keys');
let remover = document.getElementById('remover');
let enter = document.getElementById('enter');

/* Resposta correta */
let answer = 'Amcud';
let Answer = answer.toUpperCase();

/* Variaveis globais do enter */
let myAnswerSpllitted = [];
let AnswerSplitted = Answer.split('');

/* variaveis para controla a posiçao horizontal e vertical do 'board' respectivamente */
let columnBoard = 0; //j
let RowBoard = 0; //i



/* Functions */
/* verifica se há elementos repetidos */

const hasDuplicated = (arr) => {

    for (let i = 0; i < arr.length; i++) {   
        if (arr.indexOf(arr[i]) != i) {

            return true;
        }
    }
    return false;
}

/* vamos tentar fazer um switch com o boardItem[i] e colocar nos 'cases' que caso o boardItem tenha uma determinada classe a key[j] ganha essa classe */

const paintKeyboard = (boardItem) => {

    for (let i = 0; i < boardItem.length; i++){
        let content = boardItem[i].textContent;
        
        for (let j = 0; j < keys.length; j++){
            if (keys[j].textContent == content) {

                if (boardItem[i].classList.contains('Green')) {

                    keys[j].classList.add('Green');
                    keys[j].classList.remove('Yellow');
                    keys[j].classList.remove('Black')
            
                }
                if (boardItem[i].classList.contains('Yellow') && keys[j].classList.contains('Green') == false) {

                    keys[j].classList.add('Yellow')
                }
                if (boardItem[i].classList.contains("Black") && keys[j].classList.contains('Green') == false && keys[j].classList.contains('Yellow') == false) {

                    keys[j].classList.add('Black');
                }
            }
        }
    }
}

const check = (boardItem, myAnswerSpllitted ,AnswerSplittedEco) => {
    
    /* Verifica quais letras estão na posição correta*/
    for (let x = 0; x < answer.length; x++){
        if (myAnswerSpllitted[x] === AnswerSplittedEco[x]) { //A letra está na posição certa da palavra correta
            
            boardItem[x].classList.add('Green');
        }
    }
    
    if (hasDuplicated(AnswerSplittedEco)) {
        alert('Palavras com letras repetidas não funcionam!, desculpa :(');

    } else {
        //verifica quais letras pertencem a palavra
        for (let y = 0; y < answer.length; y++) {
            if (myAnswerSpllitted.find(value => value == AnswerSplittedEco[y]) != undefined) { /* A letra pertence a palavra correta*/
                
                if (boardItem[y].classList.contains('Green')) {
                    continue;
                } else {

                    let index = myAnswerSpllitted.indexOf(AnswerSplittedEco[y]);
                    boardItem[index].classList.add('Yellow');
                    AnswerSplittedEco[y] = 'y'

                }
            }
        }

        //verifica quais letras não pertencem a palavra
        for (let z = 0; z < answer.length; z++) {
            if (myAnswerSpllitted.find(value => value == AnswerSplittedEco[z]) == undefined) { /* A letra não pertence a palavra correta */

                if (boardItem[z].classList.contains('Green') || boardItem[z].classList.contains('Yellow')) {
                    continue;
                } else {
                    boardItem[z].classList.add('Black');
                }
            }
        }  
    }
}

//Função para testa a resposta

const Enter = () => {
    let boardItem = rowItem[RowBoard].children;
    let AnswerSplittedEco = [...AnswerSplitted];
    if (myAnswerSpllitted.length == 5) {
        check(boardItem, myAnswerSpllitted, AnswerSplittedEco);
        paintKeyboard(boardItem);
        RowBoard++;
        myAnswerSpllitted = [];
        columnBoard = 0;

    } else {
        console.log('Falta elementos'); /* Add */
    }
}

//Função para apgar uma letra

const Remove = () => {
    let boardItem = rowItem[RowBoard].children; /* O valor da variável j nunca será menor que 0 e numca consigirar chegar a um valor maior que 5 */

    if (columnBoard > 0 & columnBoard <= 5) {
        columnBoard--;
        boardItem[columnBoard].innerHTML = '';
        myAnswerSpllitted.pop();
    }
}


/* buttons */
// Submit 

enter.addEventListener('click', Enter);


// coletar  

for (let i = 0; i < keys.length; i++) {
    
    keys[i].addEventListener('click', () => {
        let key = keys[i].textContent;
        let boardItem = rowItem[RowBoard].children;

        switch (myAnswerSpllitted.length) {
            case 0:
                myAnswerSpllitted.push(key);
                boardItem[columnBoard].innerHTML = key;
                columnBoard++;
                break;
            case 1:
                myAnswerSpllitted.push(key);
                boardItem[columnBoard].innerHTML = key;
                columnBoard++;
                break;
            case 2:
                myAnswerSpllitted.push(key);
                boardItem[columnBoard].innerHTML = key;
                columnBoard++;
                break;
            case 3:
                myAnswerSpllitted.push(key);
                boardItem[columnBoard].innerHTML = key;
                columnBoard++;
                break;
            case 4:
                myAnswerSpllitted.push(key);
                boardItem[columnBoard].innerHTML = key;
                columnBoard++;
                break;
            default:
                console.log('está cheio')
        }
        
    });
}


document.addEventListener('keyup', 
    (e) => {
        let key = e.key;
        let KEY = key.toUpperCase();
        
        if (key == 'Backspace') {
            Remove();

        } else if (key == 'Enter') {
            Enter();

        } else if (key.match(/[a-z]/) != null && key.length == 1) {
            let boardItem = rowItem[RowBoard].children;

            switch (myAnswerSpllitted.length) {
                case 0:
                    myAnswerSpllitted.push(KEY);
                    boardItem[columnBoard].innerHTML = KEY;
                    columnBoard++;
                    break;
                case 1:
                    myAnswerSpllitted.push(KEY);
                    boardItem[columnBoard].innerHTML = KEY;
                    columnBoard++;
                    break;
                case 2:
                    myAnswerSpllitted.push(KEY);
                    boardItem[columnBoard].innerHTML = KEY;
                    columnBoard++;
                    break;
                case 3:
                    myAnswerSpllitted.push(KEY);
                    boardItem[columnBoard].innerHTML = KEY;
                    columnBoard++;
                    break;
                case 4:
                    myAnswerSpllitted.push(KEY);
                    boardItem[columnBoard].innerHTML = KEY;
                    columnBoard++;
                    break;
                default:
                    console.log('está cheio')
            }
        } else {
            console.log(`A tecla ${key} não é permitida`)
        }
    })

//Remover

remover.addEventListener('click', Remove);











