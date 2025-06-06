// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

// AOS Animation
AOS.init();

// Popup Modal
$(window).ready(function () {
  setTimeout(function () {
    $("#popupModal").modal("show");
  }, 3000);
});

// Dynamic modal title based on which button was clicked
const leadModal = document.getElementById("popupModal");
if (leadModal) {
  leadModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const modalTitle = button.getAttribute("data-modal-title");
    const modalTitleElement = leadModal.querySelector(".modal-title");

    if (modalTitle && modalTitleElement) {
      modalTitleElement.textContent = modalTitle;
    }
  });
}
