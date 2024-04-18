function display(className) {
  document.getElementsByClassName("about")[0].style.display = "none";
  document.getElementsByClassName("resume")[0].style.display = "none";
  document.getElementsByClassName("projects")[0].style.display = "none";

  switch (className) {
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
}

function show(value) {
  var obj = document.getElementsByClassName("projects")[0].children;
  for (var i = 1; i < obj.length; i++) {
    if (obj[i].className == value || value == "featured") {
      obj[i].style.display = "contents";
    } else {
      obj[i].style.display = "none";
    }
  }
}
