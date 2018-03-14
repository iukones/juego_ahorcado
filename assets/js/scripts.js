window.onload function(params) {

}
document.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
});
var alfabeto = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];


var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alfabeto.length; i++) {
      letters.id = 'alfabeto';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alfabeto[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
