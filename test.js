window.addEventListener('load', startTests);

function startTests() {
  var failed = 0;
  failed += runTests(document.body.getElementsByClassName('test-pos'), true);
  failed += runTests(document.body.getElementsByClassName('test-neg'), false);
  document.body.insertBefore(
    document.createTextNode(failed + " failed"),
    document.body.firstChild)
}
  
function runTests(divs, expect) {
  var failed = 0;
  for (var i = 0; i < divs.length; i++) {
    var input = divs[i].getElementsByTagName('input')[0];
    var result = expect == visible.isVisible(input);
    if (!result) failed++;
    divs[i].className = result ? "pass" : "fail";
  }
  return failed;
}
