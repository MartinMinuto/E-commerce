// Cantidad de Articulos

let minusBtn = document.querySelector('.input_minus');
let quantityUser = document.querySelector('.input_quantity');
let plusBtn = document.querySelector('.input_plus');

let quantityUserNumber = 0;

plusBtn.addEventListener('click', ()=>{
   quantityUserNumber++;  
   quantityUser.value = quantityUserNumber;  
});

minusBtn.addEventListener('click', ()=>{
   quantityUserNumber--;   
   if(quantityUserNumber <= 0){
       quantityUserNumber = 0;
   }
   quantityUser.value = quantityUserNumber;  
});
 

// Agregar al Carrito

const addCardBtn = document.querySelector('.details_button');
let cartNotification = document.querySelector('.hero_icon--notice');
let lastValue = parseInt(cartNotification.innerText);

addCardBtn.addEventListener('click', ()=>{
    lastValue = lastValue + quantityUserNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = "block";
    drawProduct();
});


// Despleglar Modal Card

const iconCartBtn = document.querySelector('.hero_icon');
const modalCart = document.querySelector('.card_modal');
const cardContainer = document.querySelector('.card_modal_container');

iconCartBtn.addEventListener('click', ()=>{
    modalCart.classList.toggle("show");

    if(lastValue === 0){
      cardContainer.innerHTML = `<p class="card_empty">You Card is Empty</p>`;
    }else{
        drawProduct();
    };
});

// Despleglar MenuMobile

const menuMobile = document.querySelector('.hero_menu');
const backgroundMobile = document.querySelector('.modal_background');
const closeMobile = document.querySelector('.modal_close');

menuMobile.addEventListener("click", ()=>{
    backgroundMobile.style.display = "block";
});

closeMobile.addEventListener("click", ()=>{
    backgroundMobile.style.display = "none";
});



// Cambiar imagenes

const imageContainer = document.querySelector('.gallery_image_container');
const previusGalleryBtn = document.querySelector('.gallery_previus');
const nextGalleryBtn = document.querySelector('.gallery_next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click',()=>{
   changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click',()=>{
   changePreviusImage(imageContainer);
});

// Mostrar imagenes modal

const modalImagen = document.querySelector('.modal_gallery_background');
const closeModalImage = document.querySelector('.modal_gallery_close');

imageContainer.addEventListener('click', ()=>{
    if(window.innerWidth >= 1024,
        window.innerHeight >= 848){
    modalImagen.style.display = "grid";
    }
});

closeModalImage.addEventListener('click', ()=>{
    modalImagen.style.display = 'none';
});

// Cambiar las imagenes de las miniaturas

const imageContainerModal = document.querySelector('.modal_gallery_imagen_container');

let galleryMin = document.querySelectorAll('.gallery_image');
galleryMin = [...galleryMin];
galleryMin.forEach(galleryMin =>{
   galleryMin.addEventListener("click", event=>{
    imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
   });
});

// Cambiar las imagenes de las miniaturas del modal

let galleryMinModal = document.querySelectorAll('.modal_gallery_image');
galleryMinModal = [...galleryMinModal];
galleryMinModal.forEach(galleryMinModal =>{
    galleryMinModal.addEventListener("click", event=>{
     imageContainerModal.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;
    });
 });

// Cambiar imagenes del modal

const nextModalBtn = document.querySelector('.modal_gallery_next');
const previusModalBtn = document.querySelector('.modal_gallery_previus');

nextModalBtn.addEventListener('click',()=>{
    changeNextImageModal(imageContainerModal);
 });
 
 previusModalBtn.addEventListener('click',()=>{
    changePreviusImageModal(imageContainerModal);
 });


// Funciones

function deleteProduct(){
    const iconDeleteBtn = document.querySelector('.card_modal_delete');

    iconDeleteBtn.addEventListener('click',()=>{
     cardContainer.innerHTML = `<p class="card_empty">You Card is Empty</p>`;
     lastValue = 0;
     cartNotification.innerText = lastValue;
    });
}


function drawProduct(){
    cardContainer.innerHTML = ` 
    <div class="card_modal_detail_container">

        <img class="card_modal_img" src="./images/image-product-1-thumbnail.jpg" alt="product">

        <div>
            
            <p class="card_modal_paragraph">Fall Limited Edition</p>

            <p class="card_modal_price">$125 x3<span> $375</span></p>

        </div>

        <img class="card_modal_delete" src="./images/icon-delete.svg"alt="delete">

    </div>

    <button class="card_modal_button">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.card_modal_price');
    priceModal.innerHTML = `$125.00 x${lastValue} <span> $${lastValue * 125}.00</span>`
    
};

function changeNextImage(imgContainer){
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
};

function changePreviusImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
};

function changeNextImageModal(imageContainerModal){
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imageContainerModal.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
};

function changePreviusImageModal(imageContainerModal){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imageContainerModal.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
};

