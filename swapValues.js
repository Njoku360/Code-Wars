// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
// kata: Swap Values
// My solution:
function swapValues(args) {
    const temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}