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
			isStatic : true,
			collisionFilter : {
				group : -1
			},
		}
		this.width = 40;
		this.height = 60;
		this.body1 = Bodies.rectangle(x,y,this.width,this.height,options);
		this.body = Body.create({
			parts : [this.body1],
			isStatic : true,
		});
		console.log(this.body);
		World.add(world, this.body);
	}
	display() {
		rectMode(CENTER);
		rect(this.body.position.x,this.body.position.y,this.width,this.height);
	}
	frontMissile() {
		//
	}
	backMissile() {
		//
	}
	bomb() {
		//
	}
	move() {
		//
	}
}