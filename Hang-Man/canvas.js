//FUNCIONES RELACIONADAS AL CANVAS (TABLERO O BOARD), SOLO PARA IMPONER UN ORDEN
function drawCanvas(){
    // sets the thickness of lines.
    board.lineWidth = 8;
    // determina la forma usada para dibujar los puntos finales de las líneas
    board.lineCap = "round";
    // determines the shape used to join two line segments where they meet.
    board.lineJoin = "round";
    // specifies the color, gradient, or pattern to use inside shapes
    board.fillStyle = "#F3F5F6";
    // specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes
    board.strokeStyle ="#8A3871";
    // dibuja un rectángulo relleno en la posición ( x, y )
    board.fillRect(0,0,1220,368);
    // comienza una nueva ruta vaciando la lista de sub-rutas. Invoca este método cuando quieras crear una nueva ruta.
    board.beginPath();
    // // begins a new sub-path at the point specified by the given (x, y)
    // board.moveTo(650, 500);
    // // adds a straight line to the current sub-path by connecting the sub-path's last point to the specified (x, y)
    // board.lineTo(900, 500);
    // // to draw the path
    board.stroke();
    // // connects the current path, or sub-path, position with the first point on that path created either with beginPath() or moveTo()
    board.closePath();
}
function drawLine(){
    // sets the thickness of lines.
    board.lineWidth = 6;
    // determina la forma usada para dibujar los puntos finales de las líneas
    board.lineCap = "round";
    // determines the shape used to join two line segments where they meet.
    board.lineJoin = "round";
    // specifies the color, gradient, or pattern to use inside shapes
    board.fillStyle = "#F3F5F6";
    // specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes
    board.strokeStyle ="#8A3871"; 
    // Establecemos la propia anchura de la función dibujar linea
    let width = 600/secretWord.length;
    // dibuja las lineas por cada letra de la palabra secreta
    for (let i = 0; i < secretWord.length; i++){
        board.moveTo(300 + (width * i), 290);
        board.lineTo(330 + (width * i), 290);
    }
    board.stroke();
    // connects the current path, or sub-path, position with the first point on that path created either with beginPath() or moveTo()
    board.closePath();

}

function drawCorrectLetter(index){
    board.font = 'bold 40px Montserrat';
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "cornflowerBlue";
    // Establecemos la propia anchura de la funcion dibujar letra
    let width = 600/secretWord.length;
    // Imprime la letra de la palabra secreta, en la posición 300, 230
    board.fillText(secretWord[index], 300 + (width * index), 280);
    board.stroke();
}

function drawWrongLetter(letter, errorsLeft){
    board.font = 'bold 30px Montserrat';
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "cornflowerBlue";
    board.fillText("Incorrectas --> ", 50 , 350, 150);
    // Imprime la letra ingresada, en la posición 200 + el espacio recorrido conforme la cantidad de errores cometidos, 350 con espacio para una fuente de tamaño 30, como establecimos en board.font y un margen de 10 - errorsLeft
    board.fillText(letter, 200 + (30 * (10 - errorsLeft)), 350, 30);
}

function drawHangman(errorsLeft){
    board.lineWidth = 4;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5F6";
    board.strokeStyle ="#8A3871"; 
    board.beginPath();
    // FLOOR
    if(errorsLeft == 9){
        board.moveTo(500, 225);
        board.lineTo(650, 225);
    // STICK
    }
    if(errorsLeft == 8){
        board.moveTo(550, 20);
        board.lineTo(550, 225);
    // CROSSBAR
    }
    if(errorsLeft == 7){
        board.moveTo(550, 20);
        board.lineTo(620, 20);
    // ROPE & KNOT
    }
    if(errorsLeft == 6){
        board.moveTo(620, 20);
        board.lineTo(620, 90);
        board.moveTo(610, 100);
        board.lineTo(625, 85);
    }
    // CIRCLE (HEAD)
    if(errorsLeft == 5){
        board.arc(602,85,15,0,2*Math.PI,false);
    }
    // DORSAL
    if(errorsLeft == 4){
        board.moveTo(620, 90);
        board.lineTo(620, 150);
    }
    // RIGHT LEG
    if(errorsLeft == 3){
        board.moveTo(620, 150);
        board.lineTo(605, 185);
    }
    // LEFT LEG
    if(errorsLeft == 2){
        board.moveTo(620, 150);
        board.lineTo(635, 185);
    }
    // RIGHT ARM
    if(errorsLeft == 1){
        board.moveTo(620, 95);
        board.lineTo(605, 125);
    }
    // LEFT ARM
    if(errorsLeft == 0){
        board.moveTo(620, 95);
        board.lineTo(635, 125);
    }
    board.stroke();
    board.closePath();
}

