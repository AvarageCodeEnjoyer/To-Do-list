
var input = document.getElementById("myInput");

input.addEventListener("keypress", function(event)
        {

            if (event.key === "Enter") 
                {
                    event.preventDefault();

                    document.getElementById("myBtn").click();
                }
        }
    );

    
function addItem()
    {
        var newElement = document.createElement('li');
        var newInput = String(input.value)
        var newText = document.createTextNode(newInput);
        newElement.appendChild(newText);
        var position = document.getElementsByTagName('ol')[0];
        position.appendChild(newElement);
        input.value = "";
    }

var listN = document.getElementsById("list").length;


if (listN < 3)
    {
        console.log("Too much")
    }