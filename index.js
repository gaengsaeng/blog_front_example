myStorage = window.localStorage;
$(document).ready(function () {
  if (localStorage.getItem("--text-color") == "#ffffff") {
    console.log("reload");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--baground-color", "#1b1919");
    document.getElementById("logo-img").src = "./static/icons/logo.png";
  } else if (localStorage.getItem("--text-color") == "#1b1919") {
    document.documentElement.style.setProperty("--text-color", "#1b1919");
    document.documentElement.style.setProperty("--baground-color", "#ffffff");
    document.getElementById("logo-img").src = "./static/icons/logo-black.png";
  }
});

function navbar_togle() {
  document.getElementsByClassName("sidebar")[0].style.display = "block";
}

function x_btn() {
  document.getElementsByClassName("sidebar")[0].style.display = "none";
}

var items = ["Article", "Data Science", "Django"];
$(document).ready(function () {
  for (var i = 0; i < items.length; i++) {
    var category = document.getElementsByClassName("category")[0];
    var ultag = category.firstElementChild;
    var litag = document.createElement("li");
    var atag = document.createElement("a");
    var itag = document.createElement("i");
    var spantag = document.createElement("span");

    spantag.className = "category-name";
    spantag.innerText = " " + items[i];

    itag.className = "fas fa-hashtag";
    atag.className = "sidebar-hashtag";
    atag.href = "#";

    itag.append(spantag);
    atag.append(itag);
    litag.append(atag);
    ultag.append(litag);
  }
});

function change_color() {
  console.log(
    getComputedStyle(document.documentElement).getPropertyValue("--text-color")
  );
  if (
    localStorage.getItem("--text-color") === "#1b1919" ||
    localStorage.getItem("--text-color") == null
  ) {
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--baground-color", "#1b1919");
    document.getElementById("logo-img").src = "./static/icons/logo.png";

    localStorage.setItem("--text-color", "#ffffff");
    localStorage.setItem("--baground-color", "#1b1919");
  } else {
    document.documentElement.style.setProperty("--text-color", "#1b1919");
    document.documentElement.style.setProperty("--baground-color", "#ffffff");
    document.getElementById("logo-img").src = "./static/icons/logo-black.png";

    localStorage.setItem("--text-color", "#1b1919");
    localStorage.setItem("--baground-color", "#ffffff");
  }
}
