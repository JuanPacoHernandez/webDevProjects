//constantes
const inputText = document.querySelector("#input-text");
const message = document.querySelector("#mensaje");

// Ctrl + k + c para comentar bloques de codigo
// "e" = "enter"
// "i" = "imes"
// "a" = "ai"
// "o" = "ober"
// "u" = "ufat"

function btnEncriptar(){
    const encrypted = Encriptar(inputText.value);
    message.value = encrypted;
    inputText.value = "";
}

function btnDesencriptar(){
    const text = Desencriptar(inputText.value);
    message.value = text;
    inputText.value = "";
}

function Encriptar(Unencrypted){
    //Matriz con alcance local (let)
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    Unencrypted = Unencrypted.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        //Si en la posición [i], elemento de la lista matrizCodigo y [0], la vocal en la posición 0 de cada elemento de la matrizCodigo
        if(Unencrypted.includes(matrizCodigo[i][0])){
            //replaceAll reemplaza todas las letras y no solo la primer ocurrencia
            Unencrypted = Unencrypted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return Unencrypted;
}

function Desencriptar(Encrypted){
    //Matriz con alcance local (let)
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    Encrypted = Encrypted.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        //Si en la posición [i], elemento de la lista matrizCodigo y [0], la vocal en la posición 0 de cada elemento de la matrizCodigo
        if(Encrypted.includes(matrizCodigo[i][1])){
            //replaceAll reemplaza todas las letras y no solo la primer ocurrencia
            Encrypted = Encrypted.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return Encrypted
}

function copiar() {
  let copyText = document.querySelector("#mensaje");
  copyText.select();
  document.execCommand("copy");
}
document.querySelector("#copiar").addEventListener("click", copiar);

function borrar_output(){
    message.value = "";
}

function borrar_input(){
    inputText.value = "";
}








