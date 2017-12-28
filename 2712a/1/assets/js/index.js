function min(a, b) {
    if (a <= b) { return a; }
    else { return b; }
}
console.log(min(10, 20));

function max(a, b) {
    console.log(arguments);
    if (a >= b) { return a; }
    else { return b; }
}
console.log(max(10, 20, ';loihhui'));
