var all = document.getElementById("all");
var code = document.getElementById("code");
var not = document.getElementById("not-code");

var open_all = function(e) {
  code.classList.add("muted");
  not.classList.add("muted");
  all.classList.remove("muted");

  var elements = document.getElementsByClassName('noncode');
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.remove("ghost");
  }

  elements = document.getElementsByClassName('code');
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.remove("ghost");
  }
}

var open_code = function(e) {
  console.log("yeag");
  code.classList.remove("muted");
  not.classList.add("muted");
  all.classList.add("muted");

  var elements = document.getElementsByClassName('noncode');
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.add("ghost");
  }

  elements = document.getElementsByClassName('code');
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.remove("ghost");
  }
}

var open_notcode = function(e) {
  code.classList.add("muted");
  not.classList.remove("muted");
  all.classList.add("muted");

  var elements = document.getElementsByClassName('code');
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.add("ghost");
  }

  elements = document.getElementsByClassName('noncode');
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.remove("ghost");
  }
}

all.addEventListener("click", open_all);
code.addEventListener("click", open_code);
not.addEventListener("click", open_notcode);
