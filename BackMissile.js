class BackMissile {
    /*
    # Desc: constructor(): a function to create an object of the class BackMissile
    # return value: none
    # arguements
        # x - x-position of the missile - number
        # y - y-position of the missile - number
        # velY - y-velocity of the missile - number
        # fromPlayer - whether the missile was fired from the player or not - boolean - 1 is fired from player, 0 is not
    # created date: 20 Mar 2020
    # created by: Pruthvi Shrikaanth
    */
    constructor(x,y,velY,fromPlayer) {
        var options = {
			isStatic : false,
			collisionFilter : {
                group : -1
			},
        }
        this.width = 10;
        this.height = 20;
        if(velY<0) {
            velY = -velY;
        }
        this.body1 = Bodies.rectangle(x,y,this.width,this.height,options);
        this.body = Body.create({
            parts : [this.body1],
            isStatic : false,
            collisionFilter : {
				group : -1
			}
        });
        World.add(world, this.body);
        this.body.force.y = velY;
    }
    display() {
        rect(this.body.parts[1].position.x,this.body.parts[1].position.y,this.width,this.height);
    }
}