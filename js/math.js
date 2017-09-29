var MathExtensions = {};

MathExtensions.lerp = function(a, b, t) {
    return a * (1 - t) + b * t;
};

MathExtensions.rangedRandom = function(min, max) {
    return Math.random() * (max - min + 1) + min;
};
