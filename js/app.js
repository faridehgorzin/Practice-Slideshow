document.querySelector(".banner button").addEventListener("click", () => {
  document.querySelector(".banner").style.display = "none";
  document.querySelector(".slidshow-wrapper").style.cssText =
    "opacity:1;visibility:visible;";
});
