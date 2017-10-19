'use strict';
// Obtenemos canvas desde HTML:
const canvas = document.getElementById("canvas");
// Obtenemo el contexto de canvas para trabajar con el:
const ctx = canvas.getContext("2d");
// Creamos un objeto bola.
let bola = new Bola(
    {X:canvas.width / 2, Y: canvas.height - 30}, //posicion
    10,                                         //radio
    "#2022B6",                                  //color
    {X:true,Y:true},                            //direccion
    2                                           //velocidad
);


// EVENTOS:
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let paleta = new Paleta(canvas.height/2, 70, 10, "#DB3341", {left: false, right: false});
                    

(() => {
    setInterval(draw, 10);
})();


function draw() {   
    //Iniciamos dibujo 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bola.draw(ctx);
    paleta.draw(ctx);

    //terminamos dibujo

    bola.move(canvas);
    paleta.move(canvas);
}

function keyDownHandler(e){
    if(e.keyCode == 39){
        paleta.direction.right = true;
    }else if(e.keyCode == 37){
        paleta.direction.left = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39){
        paleta.direction.right = false;
    }else if(e.keyCode == 37){
        paleta.direction.left = false;
    }
}