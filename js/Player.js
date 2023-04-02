import { TurningDown, TurningLeft, TurningRight, TurningUp } from "./states.js";

export default class Player{
    constructor(game){
        this.game = game;
        this.image = new Image();
        this.image.src = '../Images/playerDown.png';
        this.spriteWidth = 48;
        this.spriteHeight = 68;
        this.frameX = 0;
        this.maxFrame = 0;
        this.x = this.game.width / 2;
        this.y = this.game.height / 2;
        this.fps = 20;
        this.timeInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.states = [new TurningDown(this , this.game),new TurningRight(this , this.game), new TurningLeft(this , this.game) , new TurningUp(this , this.game)];
    }

    update(deltaTime,input){
        this.currentState.handleInput(input);
       
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
        ctx.drawImage(this.image , this.spriteWidth * this.frameX , 0 , this.spriteWidth , this.spriteHeight , this.x , this.y , this.spriteWidth , this.spriteHeight);
    }

    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}