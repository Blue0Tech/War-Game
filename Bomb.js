class Bomb {
    /*
    # Desc: constructor(): a function to create an object of the class Bomb
    # return value: none
    # arguements
        # x - x-position of the missile - number
        # y - y-position of the missile - number
        # fromPlayer - whether the missile was fired from the player or not - boolean - 1 is fired from player, 0 is not
    # created date: 20 Mar 2020
    # created by: Pruthvi Shrikaanth
    */
    constructor(x,y,fromPlayer) {
        var options = {
			isStatic : false,
			collisionFilter : {
                group : -1
			},
        }
        // this.i = 0;
        this.initialFrames = frameCount;
        console.log(this.initialFrames);
        // this.currentFrames = 0;
        this.radius = 20;
        this.body1 = Bodies.circle(x,y,this.radius,options);
        this.body = Body.create({
            parts : [this.body1],
            isStatic : false,
            collisionFilter : {
				group : -1
			}
        });
        World.add(world, this.body);
    }
    display() {
        circle(this.body.parts[1].position.x,this.body.parts[1].position.y,this.radius);
    }
    explode() {
        // if(this.i == 0) {
        //     this.initialFrames = World.frameCount;
        //     this.i = 1;
        // }
        // console.log(this.initialFrames);
        // use framecount to count 2 seconds
        // if the bomb is touching an entity on the opposing side
            // explode and damage the entiy on the opposing side
            // destroy the bomb
        // else
        // destroy the bomb
    }
}