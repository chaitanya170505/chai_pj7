document.getElementById("scroll-left").addEventListener("click", function() {
    const container = document.querySelector(".scroll-bar-img");
    container.scrollLeft -= 1200;
  });


  document.getElementById("scroll-right").addEventListener("click", function() {
    const container = document.querySelector(".scroll-bar-img");
    container.scrollLeft += 1200;
  });