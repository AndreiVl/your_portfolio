const viewImg = (() => {
  const modalContainer = document.createElement("div");
  modalContainer.id = "modalContainer";
  modalContainer.classList = "view-img";

  const modalContainerBody = document.createElement("div");
  modalContainerBody.classList = "view-img__body";

  const modalImage = document.createElement("img");
  modalImage.classList = "view-img__img";

  const closeBtn = document.createElement("button");
  closeBtn.id = "modalCloseBtn";
  closeBtn.classList = "view-img__button";
  closeBtn.innerHTML = "&times;";
  
  modalContainer.appendChild(modalContainerBody);
  modalContainerBody.appendChild(closeBtn);
  modalContainerBody.appendChild(modalImage);
  document.body.appendChild(modalContainer);

  const smallImages = document.getElementsByClassName("view-img-small");

  const openModal = (largeImagePath) => {
    modalImage.src = largeImagePath;
    modalContainer.classList.add("view-img--open");
    document.body.classList.add("overflow-heidden");
  };

  const closeModal = () => {
    modalContainer.classList.remove("view-img--open");
    modalImage.removeAttribute("src");
    document.body.classList.remove("overflow-heidden");
  };

  const bindEvents = () => {
    for (let i = 0; i < smallImages.length; i++) {
      smallImages[i].addEventListener("click", function() {
        const smallImagePath = this.src;
        const largeImagePath = getLargeImagePath(smallImagePath);
        openModal(largeImagePath);
      });
    }

    closeBtn.addEventListener("click", closeModal);

    modalContainer.addEventListener("click", function(event) {
      if (event.target === modalContainer) {
        closeModal();
      }
    });
  };

  const getLargeImagePath = (smallImagePath) => {
    const smallImageName = smallImagePath.substring(smallImagePath.lastIndexOf("/") + 1);
    const largeImageName = smallImageName.replace("-small", "-large");
    const largeImagePath = smallImagePath.replace(smallImageName, largeImageName);
    return largeImagePath;
  };

  const init = () => {
    bindEvents();
  };

  return {
    init
  };
})();

export default viewImg;
