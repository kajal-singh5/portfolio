// Moving gradient for hero
const gradientBorder = document.querySelector('.gradient');
let angle = 55;

function incrementAngle() {
    angle += 2;
    angle %= 360;
    gradientBorder.style.setProperty('--angle', `${angle}deg`);
}

setInterval(incrementAngle, 45);


// Move loading screen up
setTimeout(() => {
    const div1 = document.querySelector('.loading');
    div1.classList.add('slide-up');
}, 1000);

setTimeout(() => {
    const div1 = document.querySelector('.loading');
    div1.classList.add('slide-up');

    const div2 = document.querySelector('.main-content');
    div2.style.display = 'block';
}, 6000);


// MAP
const mediaQuery = window.matchMedia("(max-width: 770px)");
const openModalButton = document.querySelector('.open-modal');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalGifOpening = document.querySelector('.modal-gif.opening');
const modalGifClosing = document.querySelector('.modal-gif.closing');
const internalLinks = document.querySelector('.internal-links');
const internalLinkItems = internalLinks.children;
const externalLinks = document.querySelector('.external-links');

if (mediaQuery.matches) {
    openModalButton.addEventListener('click', function() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalContent.style.display = 'flex';

        setTimeout(function() {
            modalContent.style.opacity = '1';
        }, 100);
    });

    closeModalButton.addEventListener('click', function() {
        modalContent.style.opacity = '0';
        modalContent.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    for (var i = 0; i < internalLinkItems.length; i++) {
        internalLinkItems[i].addEventListener('click', function() {
            modalContent.style.opacity = '0';
            modalContent.style.display = 'none';
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        })
    }
} else {
    openModalButton.addEventListener('click', function() {
        modalGifOpening.src = './assets/nav/open-modal4.gif';
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalGifOpening.style.opacity = '0.95';
        
        setTimeout(function() {
            modalContent.style.opacity = '1';
        }, 1000);
        
    });

    closeModalButton.addEventListener('click', function() {
        modalGifClosing.src = './assets/nav/close-modal4.gif';
        modalGifOpening.style.opacity = '0';
        modalGifClosing.style.opacity = '0.95';
        
        setTimeout(function() {
          modalContent.style.opacity = '0';
        }, 200);
      
        setTimeout(function() {
          modalGifClosing.style.opacity = '0';
          modalGifOpening.src = './assets/nav/open-modal4.gif';
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 1500);
      
    });

    for (var i = 0; i < internalLinkItems.length; i++) {
        internalLinkItems[i].addEventListener('click', function() {
            modalGifClosing.src = './assets/nav/close-modal4.gif';
            modalGifOpening.style.opacity = '0';
            modalGifClosing.style.opacity = '0.95';
            
            setTimeout(function() {
            modalContent.style.opacity = '0';
            }, 200);
        
            setTimeout(function() {
            modalGifClosing.style.opacity = '0';
            modalGifOpening.src = './assets/nav/open-modal4.gif';
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            }, 1500);
        })
    }
}


