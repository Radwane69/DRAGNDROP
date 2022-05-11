function start(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", e.target.getAttribute("id"));
}
function over(e) {
  e.currentTarget.className="class2";
  return false;
}
function drop(e) {
  ob = e.dataTransfer.getData("text");
  e.currentTarget.appendChild(document.getElementById(ob));
  e.currentTarget.className="class1";
  e.stopPropagation();
  return false;
}
