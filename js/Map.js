export default class Map{
    constructor(game){
        this.game = game;
        this.image = new Image();
        this.image.src = '../Tiled/Pellet_Town.png';
        this.x = 0;
        this.y = 0;
    }

    update(input){
          //horizontal movement
          this.x += this.game.speedX;
          if(input.includes('d')) this.game.speedX = -this.game.maxSpeed;
          else if(input.includes('a')) this.game.speedX = this.game.maxSpeed;
          else this.game.speedX = 0;

          if(this.x < -this.game.width)  this.x = -this.game.width;
          else if(this.x > this.game.width - this.image.width) this.x = this.game.width - this.image.width;
          //vertical movement
          this.y += this.game.speedY;
          if(input.includes('s')) this.game.speedY = -this.game.maxSpeed;
          else if(input.includes('w')) this.game.speedY = this.game.maxSpeed;
          else this.game.speedY = 0;

          if(this.game.height + this.y > this.game.height) this.y = 0;
          else if(this.y < -this.game.height + this.image.height / 2) this.y = -this.game.height + this.image.height / 2;
    }

    draw(ctx){
        ctx.drawImage(this.image , this.x  , this.y , this.game.width + 1000  , this.game.height + 400);
    }
}