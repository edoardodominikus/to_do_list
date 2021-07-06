import _ from 'lodash';
import './style.scss';


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// console.log(isEmpty(localStorage.getItem('data')));
// console.log(localStorage.length);
// if(!isEmpty(localStorage.getItem('data')))
// {   for(let i =0;i<localStorage.length;i++)
//     {
//         const key = localStorage.getItem("data");
//         //var value =
//         //console.log(key);
//         //console.log(value);
//         var x = document.createTextNode(key);
//         //var y = document.createTextNode(value);
//         var li = document.createElement("li");
//         li.appendChild(x);
//         li.appendChild(document.createTextNode(" "));
//         //li.appendChild(y);
//         document.getElementById("myUL").appendChild(li);
//     }
// }
//asd
if(!isEmpty(localStorage.getItem('data')))
{   var dict = localStorage.getItem('data');
    var dict2 = JSON.parse(dict);
    for(let key in dict2)
    {
        var li = document.createElement('li');
        var x = document.createTextNode(key);
        var y = document.createTextNode(dict2[key]);
        li.appendChild(x);
        li.appendChild(document.createTextNode(" "));
        li.appendChild(y);
        document.getElementById('myUL').appendChild(li);
    }

}


document.getElementById("addbutton").addEventListener("click",newElement);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    var inputDate = document.getElementById("myDate").value;
    var isValidDate = Date.parse(inputDate);

    if (isNaN(isValidDate)) {
        alert("Invalid Data Format");
        return;
    }
    var d = document.createTextNode(inputDate);
    li.appendChild(t);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(d);
    if (inputValue ==''|| inputDate == '') {
        alert("You must write something!");
    } else {
       
        if(isEmpty(localStorage.getItem('data')))
        {
            var dict = {};
        }
        else{
            dict = JSON.parse(localStorage.getItem('data'));
            
        }
        dict[inputValue] = inputDate;
        localStorage.setItem('data',JSON.stringify(dict));
        document.getElementById("myUL").appendChild(li);
    }
    
    document.getElementById("myInput").value = "";
    document.getElementById("myDate").value = "";

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





