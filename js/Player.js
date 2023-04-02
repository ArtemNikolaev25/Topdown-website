import { TurningDown, TurningLeft, TurningRight, TurningUp } from "./states.js";

export default class Player{
    constructor(game){
        this.game = game;
        this.image = new Image();
        this.image.src = '../Images/playerDown.png';
        this.spriteWidth = 48;
        this.spriteHeight = 68;
        this.width = 50;
        this.height = 50;
        this.frameX = 0;
        this.maxFrame = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 5;
        this.x = this.game.width / 2;
        this.y = this.game.height / 2;
        this.fps = 20;
        this.timeInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.states = [new TurningDown(this),new TurningRight(this), new TurningLeft(this) , new TurningUp(this)];
    }

    update(deltaTime,input){
        this.currentState.handleInput(input);
        //horizontal movement
        this.x += this.speedX;
        if(input.includes('d')) this.speedX = this.maxSpeed;
        else if(input.includes('a')) this.speedX = -this.maxSpeed;
        else this.speedX = 0;

        //vertical movement
        this.y += this.speedY;
        if(input.includes('s')) this.speedY = this.maxSpeed;
        else if(input.includes('w')) this.speedY = -this.maxSpeed;
        else this.speedY = 0;

        //sprite animation
        if(this.frameTimer > this.timeInterval){
            this.frameTimer = 0;
            if(this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }else{
            this.frameTimer += deltaTime;
        }
    }

    draw(ctx){
        ctx.drawImage(this.image , this.spriteWidth * this.frameX , 0 , this.spriteWidth , this.spriteHeight , this.x , this.y , this.width , this.height);
    }

    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}