import _ from 'lodash';
import './style.scss';



document.getElementById("addbutton").addEventListener("click",newElement);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}


//create  x as "close" button and append it to each list item
var NodeList = document.getElementsByTagName("LI");
for(var i=0;i<NodeList.length;i++)
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    NodeList[i].appendChild(span);
}
//click on a x button to hide current item in list
var close = document.getElementsByClassName("close");
for(var i=0;i<close.length;i++)
{
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//add a checked sign if a list was clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);





