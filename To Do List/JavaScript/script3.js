var thirdValue = document.getElementById("two");
var thirdText = thirdValue.firstChild.nodeValue;
thirdText = thirdText.replace('2nd Protein Shake', 'Coffee');
thirdValue.firstChild.nodeValue = thirdText;
