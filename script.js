//1
function confirmEnding(str, target) {
var targetLength = target.length;
var strEnd = str.slice(-targetLength);
return strEnd === target;
}

//2
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
//3
function confirmEnding(str, target) {
  var regexp = new RegExp(target + '$');
  return regexp.test(str);
}
confirmEnding("abcdefabc", "abc"); // true

//4
function confirmEnding(str, target){
    return (str.length>=target.length) && (str.lastIndexOf(target)===(str.length - target.length));
}