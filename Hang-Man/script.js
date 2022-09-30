let inputText = document.querySelector("#input-text");
var words = ["JOEY","MECHE","POD","KITTIE"];
// Asociando la etiqueta canvas (junto con su id) a la variable tablero y dandole contexto de 2d  
let board = document.getElementById("canvas").getContext("2d");
// string vacía porque no tenemos aún palabra secreta
let secretWord = "";
// Almacena las letras temporalmente
let letters =[];


// Alerta cuando la palabra ha sido guardada
function savedWordAlert() {
    alert(inputText.value + " saved!");
    }

// Esta función solo nos ayuda a imprimir en consola, la letra seleccionada
function checkLetter(key){
    let status = false;
    // en ASCI del 65 al 90 se encuentran las letras de la A a la Z
    // indexOf hace una búsqueda y encuentra la primera ocurrencia
    if (key >= 65 && letters.indexOf(key) || key <= 90 && letters.indexOf(key)){
        letters.push(key);
        return status
    }
    else{
        status = true;
        return status
    }
}

function pickSecretWord(){
    //Escoje una palabra dentro de las palabras
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(secretWord);
}

// Función para checar si dos listas son iguales
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    x = a.sort();
    y = b.sort();
    for (var i = 0; i < x.length; ++i) {
      if (x[i] !== y[i]) return false;
    }
    return true;
  }


function startGame(){
    // Errores maximos
    let errors = 10;
    console.log(words);
    // Bolsa de palabras incorrectas que han sido ingresadas
    let bagOfSucesses = [];
    // Bolsa de palabras incorrectas que han sido ingresadas
    let bagOfErrors = [];
    // DOM, lo usamos para modificar el estilo mediante javascript. En este caso cuando inicia el juego el boton Start Game y Add New Word desaparezca
    document.getElementById("start-game").style.display = "none";
    document.getElementById("logo").style.display = "none";
    //document.getElementById("save-word").style.display = "none";
    // document.getElementById("input-text").style.display = "none";
    // document.getElementById("erase-input").style.display = "none";
    // document.getElementById("cancel").style.display = "none";
    document.getElementById("add-new-word").style.display = "none";
    document.getElementById("new-game").style.display = "block";
    document.getElementById("desist").style.display = "block";
    pickSecretWord();
    drawCanvas();
    drawLine();
    // onkeydown se corresponde con el hecho de pulsar una tecla y no soltarla
    // "e" es la variable de evento
    // funcion flecha son funciones que no necesitan parametros
    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase();
        // Para imprimir abajo de los guiones si la letra es incorrecta y arriba si la letra es correcta
        if(checkLetter(letter) && secretWord.includes(letter) && !bagOfSucesses.includes(letter)){
            let arrsecretWord = secretWord.split('');
            for(let i = 0; i < secretWord.length; i++){
                if(secretWord[i] == letter){
                    drawCorrectLetter(i);
                    bagOfSucesses.push(secretWord[i]);
                    console.log("bag of Successes: ",bagOfSucesses);
                    console.log("secret Word: ",arrsecretWord);
                    if (arraysEqual(bagOfSucesses, arrsecretWord)){
                        alert("You won! congratulations!! You rock!");
                    }
                }
            }
        }
        // Verificación para no aparecer repetidas las palabras incorrectas
        else{
            //Si la palabra ingresada ya está en una bag of Errors y que no dibuje de nuevo una parte del hang man si la letra es correcta (dentro de bag of Successes)
            if (!bagOfErrors.includes(letter) && !bagOfSucesses.includes(letter)){
                errors -= 1;
                drawWrongLetter(letter, errors);
                drawHangman(errors);
                bagOfErrors.push(letter);
                console.log("bag of Successes: ",bagOfSucesses);
                // console.log("bag Errors", bagOfErrors);
                // console.log("errors left: ",errors);
                if (errors == 0){
                    alert("Game Over, the secret word was " + secretWord);
                    return
                }
            }
            //Si la palabra ingresada no está en la bag of words de palabras incorrectas, entonces ingresa dicha palabra al bag of words para que no aparezca repetida
            else if (!bagOfSucesses.includes(letter)){
                errors -= 1;
                drawHangman(errors);
                console.log("bag of Successes: ",bagOfSucesses);
                // console.log("bag Errors", bagOfErrors);
                // console.log("errors left: ",errors);
                if (errors == 0){
                    alert("Game Over :(");
                    return
                }
            }
        }
    }
}

function startGameInput(){
    // Errores maximos
    let errors = 10;
    console.log(words);
    // Bolsa de palabras incorrectas que han sido ingresadas
    let bagOfSucesses = [];
    // Bolsa de palabras incorrectas que han sido ingresadas
    let bagOfErrors = [];
    // DOM, lo usamos para modificar el estilo mediante javascript. En este caso cuando inicia el juego el boton Start Game y Add New Word desaparezca
    document.getElementById("start-game-input").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("save-word").style.display = "none";
    document.getElementById("input-text").style.display = "none";
    document.getElementById("erase-input").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("new-game-input").style.display = "block";
    document.getElementById("desist-input").style.display = "block";
    pickSecretWord();
    drawCanvas();
    drawLine();
    // onkeydown se corresponde con el hecho de pulsar una tecla y no soltarla
    // "e" es la variable de evento
    // funcion flecha son funciones que no necesitan parametros
    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase();
        // Para imprimir abajo de los guiones si la letra es incorrecta y arriba si la letra es correcta
        if(checkLetter(letter) && secretWord.includes(letter) && !bagOfSucesses.includes(letter)){
            let arrsecretWord = secretWord.split('');
            for(let i = 0; i < secretWord.length; i++){
                if(secretWord[i] == letter){
                    drawCorrectLetter(i);
                    bagOfSucesses.push(secretWord[i]);
                    console.log("bag of Successes: ",bagOfSucesses);
                    console.log("secret Word: ",arrsecretWord);
                    if (arraysEqual(bagOfSucesses, arrsecretWord)){
                        alert("You won! congratulations!! You rock!");
                    }
                }
            }
        }
        // Verificación para no aparecer repetidas las palabras incorrectas
        else{
            //Si la palabra ingresada ya está en una bag of Errors y que no dibuje de nuevo una parte del hang man si la letra es correcta (dentro de bag of Successes)
            if (!bagOfErrors.includes(letter) && !bagOfSucesses.includes(letter)){
                errors -= 1;
                drawWrongLetter(letter, errors);
                drawHangman(errors);
                bagOfErrors.push(letter);
                console.log("bag of Successes: ",bagOfSucesses);
                // console.log("bag Errors", bagOfErrors);
                // console.log("errors left: ",errors);
                if (errors == 0){
                    alert("Game Over :(");
                    return
                }
            }
            //Si la palabra ingresada no está en la bag of words de palabras incorrectas, entonces ingresa dicha palabra al bag of words para que no aparezca repetida
            else if (!bagOfSucesses.includes(letter)){
                errors -= 1;
                drawHangman(errors);
                console.log("bag of Successes: ",bagOfSucesses);
                // console.log("bag Errors", bagOfErrors);
                // console.log("errors left: ",errors);
                if (errors == 0){
                    alert("Game Over :(");
                    return
                }
            }
        }
    }
}

// Función para evitar entrada de numeros
function preventNumberInput(e){
    var keycode = (e.keycode ? e.keycode : e.which);
    if (keycode > 47 && keycode < 58 || keycode > 95 && key < 107){
        e.preventDefault();
    }
}

//Función que agrega la palabra escrita por el usuario a la bolsa de palabras por adivinar
function addNewWord(){
   words.push(inputText.value.toUpperCase());
   console.log(words);
}

//Funcion para borrar la palabra, antes de guardarla, en el cajon de "input"
function erase_input(){
    inputText.value = "";
}
