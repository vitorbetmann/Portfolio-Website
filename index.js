function display(id) {
    document.getElementById("about").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("projects").style.display = "none";

  switch (id) {
    case "aboutB":
        document.getElementById("about").style.display = "contents";
      break;
    case "resumeB":
        document.getElementById("resume").style.display = "contents";
      break;
    case "projectsB":
        document.getElementById("projects").style.display = "contents";
      break;
  }
}
