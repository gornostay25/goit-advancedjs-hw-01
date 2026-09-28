import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{S as o}from"./assets/vendor-D0gBiHs0.js";const i=e=>`/goit-advancedjs-hw-01/img/gallery/${e}`,p=[{preview:i("preview-01.jpg"),original:i("original-01.jpg"),description:"Hokkaido Flower"},{preview:i("preview-02.jpg"),original:i("original-02.jpg"),description:"Container Haulage Freight"},{preview:i("preview-03.jpg"),original:i("original-03.jpg"),description:"Aerial Beach View"},{preview:i("preview-04.jpg"),original:i("original-04.jpg"),description:"Flower Blooms"},{preview:i("preview-05.jpg"),original:i("original-05.jpg"),description:"Alpine Mountains"},{preview:i("preview-06.jpg"),original:i("original-06.jpg"),description:"Mountain Lake Sailing"},{preview:i("preview-07.jpg"),original:i("original-07.jpg"),description:"Alpine Spring Meadows"},{preview:i("preview-08.jpg"),original:i("original-08.jpg"),description:"Nature Landscape"},{preview:i("preview-09.jpg"),original:i("original-09.jpg"),description:"Lighthouse Coast Sea"}],g=document.querySelector(".gallery"),l=p.map(({preview:e,original:r,description:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${e}"
          alt="${a}"
        />
      </a>
    </li>`).join("");g.insertAdjacentHTML("beforeend",l);new o(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
