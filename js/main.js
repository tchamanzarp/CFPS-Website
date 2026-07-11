// CFPS shared behavior: mobile nav, active link, FAQ accordion, footer year.
// Officers: you should not need to edit this file.

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Highlight the current page in the nav
  var here = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here) a.classList.add("active");
  });

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
