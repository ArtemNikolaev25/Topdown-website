const states = {
    TURNING_DOWN : 0,
    TURNING_RIGHT : 1,
    TURNING_LEFT: 2,
    TURNING_UP : 3,
}


class State{
    constructor(state){
        this.state = state;
    }
}

export class TurningDown extends State{
    constructor(player){
        super('TURNING_DOWN')
        this.player = player;
        this.image = new Image();
        this.image.src = '../Images/playerDown.png';
    }

    enter(){
        this.player.frameX = 0;
        this.player.image = this.image;
    }

    handleInput(input){
        if(this.player.speedY !== 0) this.player.maxFrame = 3;
        else this.player.maxFrame = 0;

        if(input.includes('d')) this.player.setState(states.TURNING_RIGHT);
        else if(input.includes('a')) this.player.setState(states.TURNING_LEFT);
        else if(input.includes('w')) this.player.setState(states.TURNING_UP);
    }
} 

export class TurningRight extends State{
    constructor(player){
        super('TURNING_RIGHT')
        this.player = player;
        this.image = new Image();
        this.image.src = '../Images/playerRight.png';
    }

    enter(){
        this.player.frameX = 0;
        this.player.image = this.image;
    }

    handleInput(input){
        if(this.player.speedX !== 0) this.player.maxFrame = 3;
        else this.player.maxFrame = 0;

        if(input.includes('s')) this.player.setState(states.TURNING_DOWN);
        else if(input.includes('a')) this.player.setState(states.TURNING_LEFT);
        else if(input.includes('w'))  this.player.setState(states.TURNING_UP);
    }
} 

export class TurningLeft extends State{
    constructor(player){
        super('TURNING_LEFT')
        this.player = player;
        this.image = new Image();
        this.image.src = '../Images/playerLeft.png';
    }

    enter(){
        this.player.frameX = 0;
        this.player.image = this.image;
    }

    handleInput(input){
        if(this.player.speedX !== 0) this.player.maxFrame = 3;
        else this.player.maxFrame = 0;

        if(input.includes('s')) this.player.setState(states.TURNING_DOWN);
        else if(input.includes('d')) this.player.setState(states.TURNING_RIGHT);
        else if(input.includes('w')) this.player.setState(states.TURNING_UP);
    }
} 

export class TurningUp extends State{
    constructor(player){
        super('TURNING_UP')
        this.player = player;
        this.image = new Image();
        this.image.src = '../Images/playerUp.png';
    }

    enter(){
        this.player.frameX = 0;
        this.player.image = this.image;
    }

    handleInput(input){
        if(this.player.speedY !== 0) this.player.maxFrame = 3;
        else this.player.maxFrame = 0;

        if(input.includes('d')) this.player.setState(states.TURNING_RIGHT);
        else if(input.includes('a')) this.player.setState(states.TURNING_LEFT);
        else if(input.includes('s')) this.player.setState(states.TURNING_DOWN);
    }
} 