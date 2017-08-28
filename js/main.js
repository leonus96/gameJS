(()=>{
    // Obtenemos canvas desde HTML:
    var canvas = document.getElementById("canvas");
    // Obtenemo el contexto de canvas para trabajar con el:
    var ctx = canvas.getContext("2d");

    ctx.beginPath(); //Iniciamos dibujo
    ctx.rect(160, 50, 100, 50);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.closePath(); //Terminamo dibujo


})();