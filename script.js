function notactive() {
  var t = alert("News Letter Not Active as of yet. Check Out My Writing Portfolio");
  return t;
}

$(document).ready(function() {
  $(".toggle").click(function() {
    $("#project-programming").fadeToggle("fast");
    $("#project-writing").fadeToggle("fast");

  });

});

function change() {
  var elem = document.getElementById("switch");
  if (elem.innerHTML == "Writing Portfolio") {
    elem.innerHTML = "Programming Portfolio";
  } else {
    elem.innerHTML = "Writing Portfolio";
  }
}




