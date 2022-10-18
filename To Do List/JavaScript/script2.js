/* var el = document.getElementsByTagName("li");
for (var i = 0; i < el.length; i++)
    {
        if (i === 3)
            {
                el[3].className = "cool";
                console.log(el.length)
            }
    }
 */



/* var el = document.getElementsByClassName("js");
i = el.length;
if ( i > 2)
    {
        el[2].className = "cool";
        console.log(el.length)
    } */



/* var el = document.querySelectorAll("li");
console.log("The Number Of List Items is : " + el.length) */

/* var el = document.querySelectorAll("li.js");
console.log(el)
console.log(el.length)

for (var i = 0; i < el.length; i++)
    {
        if (el[i].className = "js")
            {
                el[i].className = "cool";
                console.log(el[i] + "'s Class Name Is Cool")
            }
    } */
/* 

var el = document.querySelectorAll("li.js");
console.log(el)
console.log(el.length)

for (var i = 0; i < el.length; i++)
    {
        if (i === 1)
            {
                el[i].className = "cool";
                console.log("List Item 1's Class Name Is Cool")
            }
        
        else if (i === 2)
            {
                el[i + 1].className = "red";
                console.log("List Items 3's Class Name Is Red")
            }   
            
        else    
            {
                console.log("False")
            }
            
        
    } */

/* var check = document.getElementById("button");

if (check.checked)
    {
        document.getElementById("two").itemChange()
    }

function itemChange()
    {
        var itemTwo = document.getElementById("two");
        var elText = itemTwo.firstChild.nodeValue;
        elText = elText.replace("2nd Protein Shake", "Coffee");
        itemTwo.firstChild.nodeValue = elText;
    } */