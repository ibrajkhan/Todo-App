const item = document.querySelector(".form");
const itemList = document.getElementById("unorder");
const check = document.getElementById("checkbox");
const msg = document.querySelector(".msg");

item.addEventListener("submit", addItems);
itemList.addEventListener("click", rembtn);

function addItems(e) {
  e.preventDefault();
  const items = document.getElementById("type").value;
  if (items === "") {
    msg.classList.add("error");
    msg.innerHTML = "please enter the Task";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.className = "list";
    li.appendChild(document.createTextNode(items));
    const button = document.createElement("button");
    button.className = "but";
    button.appendChild(document.createTextNode("X"));
    li.appendChild(button);
    const checkbox = document.createElement("INPUT");
    checkbox.className = "check";
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox);
    itemList.appendChild(li);
  }
}

function rembtn(e) {
  if (e.target.classList.contains("but")) {
    if (confirm("Are you sure ?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
