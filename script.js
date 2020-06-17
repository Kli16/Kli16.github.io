function fadeOut( elem, ms )
{
  if( ! elem )
    return;

  if( ms )
  {
    var opacity = 1;
    var timer = setInterval( function() {
      opacity -= 50 / ms;
      if( opacity <= 0 )
      {
        clearInterval(timer);
        opacity = 0;
        elem.style.visibility = "hidden";
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.visibility = "hidden";
  }
}

function fadeIn( elem, ms )
{
  if( ! elem )
    return;

  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.visibility = "visible";

  if( ms )
  {
    var opacity = 0;
    var timer = setInterval( function() {
      opacity += 50 / ms;
      if( opacity >= 1 )
      {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}

var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex + n);
}

function currentDiv(n) {
  showDivs(n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("artimg");
  var caps = document.getElementsByClassName("artcap");
  var dots = document.getElementsByClassName("units");
  if (n != slideIndex) {
  fadeOut(x[slideIndex - 1], 200);
  caps[slideIndex-1].style.display = "none";
  }
  slideIndex = n;

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
    caps[slideIndex-1].style.display = "block";
    setTimeout(() => { fadeIn(x[slideIndex-1], 400);}, 150);
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" units-color", "");
    }
  dots[slideIndex-1].className += " units-color";
}
