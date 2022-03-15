document.getElementById("bars").onclick = function () {
  this.classList.toggle("change");
  document.getElementById("nav").classList.toggle("show");
};

window.onscroll = function () {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("header").classList.add("nav-strict");
  } else {
    document.getElementById("header").classList.remove("nav-strict");
  }
};
