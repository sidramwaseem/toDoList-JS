var nodelist = document.getElementsByTagName("li");

for (var i = 0; i < nodelist.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");

  span.appendChild(text);
  nodelist[i].appendChild(span);

  span.className = "close";
}

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
  close[i].onmouseover = function () {
    var div = this.parentElement;
    div.style.cursor = "pointer";
  };
}


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;

  var txt = document.createTextNode(inputValue);
  li.appendChild(txt);

  if(inputValue === ""){
    alert("Please enter a task!")
  }
  else{
    document.getElementById("tasks-list").appendChild(li);
li.classList.add("list-group-item", "task-item")
  }
 
  document.getElementById("input").value = "";

  var span2 = document.createElement("span");
  var text2 = document.createTextNode("\u00D7");
  span2.className = "close";

  var close = document.getElementsByClassName("close");

  span2.appendChild(text2);
  li.appendChild(span2);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
    close[i].onmouseover = function () {
      var div = this.parentElement;
      div.style.cursor = "pointer";
    };
  }
}
