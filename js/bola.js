class Bola {
    constructor(position, radius, color, direction, speed) {
        this.position = position;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.direction = direction;
    }

    draw(ctx) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.arc(this.position.X, this.position.Y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();//cerramos dibujo
    }

    move(canvas){ // x:true-arriba, false-abajo | y:true-izquierda, false-derecha
        let dx, dy;
        if(this.direction.X)
            dx = -this.speed;
        else
            dx = this.speed;
        if(this.direction.Y)
            dy = -this.speed;
        else
            dy = this.speed;
        
        //Cambiamos la orientacion de la bola en Y
        if((this.position.Y + dy + this.radius/2) > canvas.height || (this.position.Y + dy - this.radius/2) < 0) {
            this.direction.Y = !this.direction.Y;
            return;
        }
        //Cambiamos la orientación d ela bola en X
        if((this.position.X + dx  + this.radius/2) > canvas.width || (this.position.X + dx - this.radius/2) < 0){
            this.direction.X = !this.direction.X;
            return;
        }

        this.position.X += dx;
        this.position.Y += dy;
    }
}