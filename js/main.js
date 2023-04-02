import InputHandler from "./input.js";
import Player from "./Player.js";
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;


class Game{
    constructor(width , height){
        this.width = width;
        this.height = height;
        this.input = new InputHandler();
        this.player = new Player(this);
        this.player.currentState = this.player.states[0];
        this.player.currentState.enter();
    }

    update(deltaTime){
        this.player.update(deltaTime,this.input.keys)
    }

    draw(ctx){
        this.player.draw(ctx);
    }

}

const game = new Game(canvas.width , canvas.height);
let lastTime = 0;

function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0 ,0 ,canvas.width , canvas.height);
    game.update(deltaTime);
    game.draw(ctx)
    requestAnimationFrame(animate)
}

animate(0);