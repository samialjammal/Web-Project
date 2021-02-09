var x = true;
function makeAction() {
  if (x === true) {
    closeLeftSideBar();
    x = false;
  } else {
    releaseLeftSideBar();
    x = true;
  }
}
function closeLeftSideBar() {
  document.getElementById("LeftSideBar").style.width = "0";
  document.getElementById("LeftSideBar").style.transition = "0.5s";
}
function releaseLeftSideBar() {
  document.getElementById("LeftSideBar").style.width = "16.667%";
  document.getElementById("LeftSideBar").style.transition = "0.5s";
}

var prevScrollCur = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollCur > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollCur = currentScrollPos;
};
