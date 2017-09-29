
function Player(x, y) {
    this.name = "player";
    this.x = x;
    this.y = y;
    this.scaleX = 1;
    this.scaleY = 1;
    this.image = "player";
    this.update = function(fps, deltaFps) {
        if(Input.isKeyDown("w")) {
    		this.y -= 4 / fps;
    	}
    	if(Input.isKeyDown("s")) {
    		this.y += 4 / fps;
    	}
    	if(Input.isKeyDown("a")) {
    		this.x -= 4 / fps;
    	}
    	if(Input.isKeyDown("d")) {
    		this.x += 4 / fps;
    	}
    };
}

function Tree(x, y) {
    this.name = "tree";
    this.x = x;
    this.y = y;
    this.scaleX = 2;
    this.scaleY = 2;
    this.image = "tree_little";
    this.update = function(fps, deltaFps) {
        if(Math.random() < 0.001) {
            this.image = "tree_growing";
        }
    };
}
