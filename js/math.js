var MathExtensions = {};

MathExtensions.lerp = function(a, b, t) {
    return a * (1 - t) + b * t;
};
