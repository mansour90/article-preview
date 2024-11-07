const shareBtn = document.querySelector(".share-btn");
const containerShare = document.querySelector(".container-share");

shareBtn.addEventListener("click", () => {
  containerShare.classList.toggle("show");
});
