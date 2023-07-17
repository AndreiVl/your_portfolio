const viewImg = (() => {
  const modalContainer = document.createElement("div");
  modalContainer.id = "modalContainer";
  modalContainer.classList = "view-img";

  const modalContainerBody = document.createElement("div");
  modalContainerBody.classList = "view-img__body";

  const modalImage = document.createElement("img");
  modalImage.id = "modalImage";

  const closeBtn = document.createElement("button");
  closeBtn.id = "modalCloseBtn";
  closeBtn.classList = "view-img__button";
  closeBtn.innerHTML = "&times;";
  
  modalContainer.appendChild(modalContainerBody);
  modalContainerBody.appendChild(closeBtn);
  modalContainerBody.appendChild(modalImage);
  document.body.appendChild(modalContainer);

  const smallImages = document.getElementsByClassName("small-image");

  const openModal = (largeImagePath) => {
    modalImage.src = largeImagePath;
    modalContainer.style.display = "block";
    document.body.classList.add("overflow-heidden");
  };

  const closeModal = () => {
    modalContainer.style.display = "none";
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


// const ImageModal = (() => {
//   const modalContainer = document.getElementById("modalContainer");
//   const modalImage = document.getElementById("modalImage");
//   const smallImages = document.getElementsByClassName("small-image");
//   const closeBtn = document.getElementById("modalCloseBtn");

//   const openModal = (largeImagePath) => {
//     modalContainer.style.display = "block";
//     modalImage.src = largeImagePath;
//   };

//   const closeModal = () => {
//     modalContainer.style.display = "none";
//   };

//   const bindEvents = () => {
//     for (let i = 0; i < smallImages.length; i++) {
//       smallImages[i].addEventListener("click", function() {
//         const smallImagePath = this.src;
//         const largeImagePath = getLargeImagePath(smallImagePath);
//         openModal(largeImagePath);
//       });
//     }

//     closeBtn.addEventListener("click", closeModal);

//     modalContainer.addEventListener("click", function(event) {
//       if (event.target === modalContainer) {
//         closeModal();
//       }
//     });
//   };

//   const getLargeImagePath = (smallImagePath) => {
//     const smallImageName = smallImagePath.substring(smallImagePath.lastIndexOf("/") + 1);
//     const largeImageName = smallImageName.replace("-small", "-large");
//     const largeImagePath = smallImagePath.replace(smallImageName, largeImageName);
//     return largeImagePath;
//   };

//   const init = () => {
//     bindEvents();
//   };

//   return {
//     init
//   };
// })();

// export default ImageModal;

// const ImageModal = (() => {
//   const modal = document.getElementById("myModal");
//   const modalImage = document.getElementById("modalImage");
//   const smallImages = document.getElementsByClassName("small-image");
//   const closeBtn = document.getElementsByClassName("close")[0];

//   const openModal = (largeImagePath) => {
//     modal.style.display = "block";
//     modalImage.src = largeImagePath;
//   };

//   const closeModal = () => {
//     modal.style.display = "none";
//   };

//   const bindEvents = () => {
//     for (let i = 0; i < smallImages.length; i++) {
//       smallImages[i].addEventListener("click", function() {
//         const smallImagePath = this.src;
//         const largeImagePath = getLargeImagePath(smallImagePath);
//         openModal(largeImagePath);
//       });
//     }

//     closeBtn.addEventListener("click", closeModal);

//     window.addEventListener("click", function(event) {
//       if (event.target == modal) {
//         closeModal();
//       }
//     });
//   };

//   const getLargeImagePath = (smallImagePath) => {
//     // Получаем имя файла из пути к маленькой картинке
//     const smallImageName = smallImagePath.substring(smallImagePath.lastIndexOf("/") + 1);

//     // Заменяем "-small" на "-large" в имени файла
//     const largeImageName = smallImageName.replace("-small", "-large");

//     // Создаем путь к большой картинке на основе имени файла
//     const largeImagePath = smallImagePath.replace(smallImageName, largeImageName);

//     return largeImagePath;
//   };

//   const init = () => {
//     bindEvents();
//   };

//   return {
//     init
//   };
// })();

// export default ImageModal;