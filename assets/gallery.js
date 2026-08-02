document.addEventListener("DOMContentLoaded", function () {
  var galleryImages = document.querySelectorAll(".gallery img");
  if (galleryImages.length === 0) return;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  var overlayImg = document.createElement("img");
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add("active");
    });
  });

  overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      overlay.classList.remove("active");
    }
  });
});
