import {Vector} from './vector';
import {GameObject} from './gameObject';
import {Player} from './player';

/*
    this class creates a score counter
*/
export class Score implements GameObject
{
    height: number;
    width: number;
    onColliosion(other: GameObject): void {
    }
   
    constructor(position: Vector)
    {
        this.position = position;
    }

    public position:Vector;

    update(time: number): void {
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#ffffff";
        ctx.fillText("Score: "+ Player.score + "", this.position.x, this.position.y);
    }

}