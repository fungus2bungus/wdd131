const gallery:any = document.querySelector('.gallery');
const modal:any = document.querySelector('dialog');
const modalImage:any = modal.querySelector('img');
const closeButton:any = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e:Event) {
    //console.log(e.target);
    modal.showModal();
    //const src = (e.target as EventSource).src;
    //modal.Image.src = src;
    
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event:Event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          
