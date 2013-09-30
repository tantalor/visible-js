var visible = {};

visible.isVisible = function(el) {
  if (el.style.display == "none") return false;
  return true;
};
