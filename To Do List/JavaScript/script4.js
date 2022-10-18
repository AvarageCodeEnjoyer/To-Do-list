var newElement = document.createElement('li');
var newText = document.createTextNode('"Food"');
newElement.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newElement);