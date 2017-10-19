class Paleta{
    constructor(positionX, width, height, color, direction){
        this.positionX = positionX;
        this.width = width;
        this.height = height;
        this.color = color;
        this.direction = direction;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.positionX, canvas.height-this.height,  this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(canvas){ 
        if(this.direction.right){
            this.positionX += 7;
        }
        else if(this.direction.left){
            this.positionX -= 7;
        }
    }
}