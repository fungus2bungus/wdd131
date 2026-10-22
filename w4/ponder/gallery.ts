const gallery:HTMLDivElement | null = document.querySelector('.gallery');
const modal:HTMLDialogElement | null = document.querySelector('dialog');
const modalImage:HTMLImageElement | null = modal ? modal.querySelector('img') : null;
const closeButton:HTMLButtonElement | null = modal ? modal.querySelector('.close-viewer') : null;

// Event listener for opening the modal
gallery?.addEventListener('click', openModal);

function openModal(e:Event): void {
    const target = e.target;
    if (!(target instanceof HTMLImageElement) || !modalImage || !modal)
        return;
    //console.log(e.target);
    modalImage.src = target.src;
    modal?.showModal();
    //const src = (e.target as EventSource).src;
    //const etarg = e.target as HTMLImageElement | null;
    
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton?.addEventListener('click', () => {
    modal?.close();
});

// Close modal if clicking outside the image
modal?.addEventListener('click', (event:Event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          
