const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }, index) {
  const li = document.createElement('li');
  li.classList.add('gallery-item');

  const a = document.createElement('a');
  a.href = original;
  a.classList.add('gallery-link');

  const img = document.createElement('img');
  img.src = preview;
  img.alt = description;
  img.dataset.source = original;
  img.dataset.index = index + 1;
  img.classList.add('gallery-image');

  a.append(img);
  li.append(a);

  return li;
}

function renderGallery() {
  const imgs = images.map(createGalleryItem);
  gallery.append(...imgs);
}

function createModal(src, desc, index, totla) {
  const instance = basicLightbox.create(`
      <div class="modal">
        <span class="modal-count">${index}/${totla}</span>
        <button class="modal-close" data-action="close"></button>
        <div class="model-content">
          <div class="modal-controlls">
            <button class="slider-button prev" data-action="prev" data-index=${index}>‹</button>
            <button class="slider-button next" data-action="next">›</button>
          </div>
          <img class="modal-img" src="${src}" alt="${desc}" />
          <p class="modal-desc">${desc}</p>
        </div>
      </div>
  `)

  instance.show()
}

function main() {
  renderGallery();

  gallery.addEventListener('click', (event) => {
    event.preventDefault()

    const imgSrc = event.target.dataset.source;
    const imgDescription = event.target.alt;
    const slideIndex = event.target.dataset.index;

    if (imgSrc) createModal(imgSrc, imgDescription, slideIndex, images.length);
  });
}

main();
