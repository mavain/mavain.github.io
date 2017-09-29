
function Player(x, y) {
    this.name = "player";
    this.x = x;
    this.y = y;
    this.scaleX = 1;
    this.scaleY = 1;
    this.image = "player";
    this.radius = 2;
    this.hitboxes = [

    ];
    this.update = function(fps, deltaFps, entities) {
        var velx = 0;
        var vely = 0;
        if(Input.isKeyDown("w")) {
    		vely -= 4 / fps;
    	}
    	if(Input.isKeyDown("s")) {
    		vely += 4 / fps;
    	}
    	if(Input.isKeyDown("a")) {
    		velx -= 4 / fps;
    	}
    	if(Input.isKeyDown("d")) {
    		velx += 4 / fps;
    	}
        for(var index in entities) {
            var entity = entities[index];
            if(entity.name == "player") {
                continue;
            }
            var dx = entity.x - this.x;
            var dy = entity.y - this.y;
            if(Math.sqrt(dx * dx + dy * dy) > this.radius + entity.radius) {
                continue;
            }
            for(var hitboxIndex in entity.hitboxes) {
                var hitbox = entity.hitboxes[hitboxIndex];
                var x = entity.x - entity.scaleX / 2 + hitbox.x * entity.scaleX;
                var y = entity.y - entity.scaleY / 2 + hitbox.y * entity.scaleY;
                var width = hitbox.width * entity.scaleX;
                var height = hitbox.height * entity.scaleY;
                var tyvy = this.y + vely;
                var txvx = this.x + velx;
                if(this.y > y && this.y < y + height) {
                    if(txvx > x && txvx < x + width) {
                        velx = 0;
                    }
                }
                if(this.x > x && this.x < x + width) {
                    if(tyvy > y && tyvy < y + height) {
                        vely = 0;
                    }
                }
            }
        }
        this.x += velx;
        this.y += vely;
    };
}

function Tree(x, y) {
    this.name = "tree";
    this.x = x;
    this.y = y;
    this.image = "tree_growing";
    this.scaleX = 2;
    this.scaleY = 2;
    this.radius = 3;

    this.hitboxes = [
        {
            "x": 0.4, "y": 0.4, "width": 0.2, "height": 0.6
        }
    ];

    this.update = function(fps, deltaFps, entities) {
    };
}

function Rock(x, y) {
    this.name = "rock";
    this.x = x;
    this.y = y;
    this.image = "rock";
    this.scaleX = 2;
    this.scaleY = 2;
    this.radius = 3;

    this.hitboxes = [
        {
            "x": 0.1, "y": 0.5, "width": 0.8, "height": 0.25
        }
    ];

    this.update = function(fps, deltaFps, entities) {

    };
}
