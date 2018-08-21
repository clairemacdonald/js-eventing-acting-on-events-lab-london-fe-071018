var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = 'pink';


dodger.style.bottom = "0px";

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    var rightNumbers = dodger.style.left.replace('px', '')
    var right = parseInt(rightNumbers, 10)
 
    dodger.style.right = `${left - 1}px`
  }
})