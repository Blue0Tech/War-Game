class Tank {
	/*
	# Desc: constructor(): a function to create an object of the class Tank
	# return value: none
	# arguments: 
		# x - x-position of tank - number
		# y - y-position of tank - number
		# isPlayer - whether the tank is a player or enemy - boolean - 1 is player, 0 is enemy
		# health - maximum health of the tank - number
		# lives - how many lives this tank has - number
		# state - the state of the tank - boolean - 1 is to alive and 0 is to dead
	# created date: 16 Mar 2020
	# created by: Pruthvi Shrikaanth
	*/
	constructor(x,y,isPlayer,health,lives,state) {
		var options = {
			isStatic : false,
			collisionFilter : {
				group : -1
			},
		}
		this.width = 40;
		this.height = 60;
		this.bombDropped = 0;
		this.body1 = Bodies.rectangle(x,y,this.width,this.height,options);
		this.body = Body.create({
			parts : [this.body1],
			isStatic : false,
			collisionFilter : {
				group : -1
			}
		});
		this.tankBodyPos = this.body.parts[1].position;
		World.add(world, this.body);
	}
	/*
	# Desc: display(): a function to display an object on the canvas
	# return value: none
	# arguements: none
	# created date: 16 Mar 2020
	# created by: Pruthvi Shrikaanth
	*/
	display() {
		rectMode(CENTER);
		rect(this.tankBodyPos.x,this.tankBodyPos.y,this.width,this.height);
		if(this.bombDropped==1) {
			this.bomb.display();
		}
	}
	frontMissile() {
		//
	}
	backMissile() {
		//
	}
	/*
	# Desc: move(): a function to move an object
	# return value: none
	# arguements:
		# velX: specify the velocity of the object in the x-direction
		# velY: specify the velocity of the object in the y-direction
	# created date: 19 Mar 2020
	# created by: Pruthvi Shrikaanth
	*/
	move(velX,velY) {
		this.body.force.x=velX;
		this.body.force.y=velY;
	}
	bomb() {
		this.bomb = new Bomb(this.tankBodyPos.x,this.tankBodyPos.y,1);
		this.bombDropped = 1;
	}
}