// JavaScript Document

var images = {
	"player": new Image(),
	"tree_little": new Image(),
	"tree_growing": new Image(),
	"rock": new Image()
};

var fps = 60;
var deltaFps = 1 / 60;

var scale = 108;

var cameraX = -window.innerWidth / 2;
var cameraY = -window.innerHeight / 2;

var entities = [
	new Tree(3, 0),
	new Rock(5, 0)
];
var player = new Player(0, 0);
entities.push(player);

function update(time) {
	entities.sort(function(a, b) { return a.y - b.y; });
	for(var index in entities) {
		var entity = entities[index];
		entity.update(fps, deltaFps, entities);
	}
	cameraX = MathExtensions.lerp(cameraX, -window.innerWidth / 2 + player.x * scale, deltaFps);
	cameraY = MathExtensions.lerp(cameraY, -window.innerHeight / 2 + player.y * scale, deltaFps);

	if(Input.clicked) {
		var worldX = ((Input.mouseClickX + cameraX) / scale);
		var worldY = ((Input.mouseClickY + cameraY) / scale);
		entities.push(new Tree(worldX, worldY));
	}
}

function render(time) {
	Graphics.clear("#ffffff");

	for(var index in entities) {
		var entity = entities[index];
		var x = -cameraX + entity.x * scale;
		var y = -cameraY + entity.y * scale;
		var sx = scale * entity.scaleX;
		var sy = scale * entity.scaleY;
		if(x > window.innerWidth + sx || x < -sx || y > window.innerHeight + sy || y < -sx) {
			continue;
		}
		Graphics.imageCentered(images[entity.image], x, y, sx, sy);
	}
}

for(var imageName in images) {
	if(images.hasOwnProperty(imageName)) {
		images[imageName].src = "img/" + imageName + ".png";
	}
}

window.onload = function() {
	Graphics.initialize("renderCanvas");

	window.onresize = function() {
		Graphics.setResolution(window.innerWidth, window.innerHeight);
		if(window.innerWidth < window.innerHeight) {
			scale = window.innerWidth / 10;
		} else {
			scale = window.innerHeight / 10;
		}
	};
	window.onresize();

	var lastTime = 0;
	var loop = function(time) {
		window.requestAnimationFrame(loop);
		update(time);
		render(time);
		Input.clicked = false;
		fps = 1000 / (time - lastTime);
		deltaFps = 1 / fps;
		lastTime = time;
	};
	loop(0);
};
