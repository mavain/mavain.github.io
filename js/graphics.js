// JavaScript Document

var Graphics = {};

Graphics.initialize = function(canvasID) {
	Graphics.canvas = document.getElementById(canvasID);
	Graphics.context = Graphics.canvas.getContext("2d");
};

Graphics.setResolution = function(width, height) {
	Graphics.canvas.width = width;
	Graphics.canvas.height = height;
};

Graphics.rect = function(style, x, y, width, height) {
	Graphics.context.fillStyle = style;
	Graphics.context.fillRect(x, y, width, height);
};

Graphics.clear = function(style) {
	Graphics.rect(style, 0, 0, Graphics.canvas.width, Graphics.canvas.height);
};

Graphics.image = function(image, x, y, width, height) {
	Graphics.context.drawImage(image, x, y, width, height);
};

Graphics.imageCentered = function(image, x, y, width, height) {
	Graphics.image(image, x - width / 2, y - height / 2, width, height);
};