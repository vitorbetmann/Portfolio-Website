function display(id) {
  var divObj = document.getElementById("buttonDiv").children;
  for (var i = 0; i < divObj.length; i++) {
    divObj[i].style.backgroundColor = "#c3c2c3";
    divObj[i].style.color = "black";
  }

  document.getElementsByClassName("about")[0].style.display = "none";
  document.getElementsByClassName("resume")[0].style.display = "none";
  document.getElementsByClassName("projects")[0].style.display = "none";

  switch (id) {
    case "aboutB":
      document.getElementsByClassName("about")[0].style.display = "contents";
      break;
    case "resumeB":
      document.getElementsByClassName("resume")[0].style.display = "contents";
      break;
    case "projectsB":
      document.getElementsByClassName("projects")[0].style.display = "contents";
      break;
  }

  var buttonObj = document.getElementById(id).style;
  buttonObj.backgroundColor = "#868686";
  buttonObj.color = "white";
  scroll(0, 0);
}

function show(value) {
  var obj = document.getElementsByClassName("projects")[0].children;
  for (var i = 2; i < obj.length; i++) {
    if (obj[i].className == value || value == "featured") {
      obj[i].style.display = "contents";
    } else {
      obj[i].style.display = "none";
    }
  }
}
