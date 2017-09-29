var Input = {
    keys: {},
    mouseClickX: 0,
    mouseClickY: 0,
    clicked: false
};

window.onkeydown = function(keyEvent) {
    Input.keys[keyEvent.key] = true;
};

window.onkeyup = function(keyEvent) {
    delete Input.keys[keyEvent.key];
};

window.onclick = function(mouseEvent) {
    Input.mouseClickX = mouseEvent.pageX;
    Input.mouseClickY = mouseEvent.pageY;
    Input.clicked = true;
};

Input.isKeyDown = function(key) {
    if(Input.keys[key]) {
        return true;
    }
    return false;
};
