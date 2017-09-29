var Input = {
    keys: {},
};

window.onkeydown = function(keyEvent) {
    Input.keys[keyEvent.key] = true;
};

window.onkeyup = function(keyEvent) {
    delete Input.keys[keyEvent.key];
};

Input.isKeyDown = function(key) {
    if(Input.keys[key]) {
        return true;
    }
    return false;
};
