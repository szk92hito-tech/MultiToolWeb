window.initializeDropZone = (dropZone, fileInput) => {

    dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', e => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', e => {

        e.preventDefault();

        dropZone.classList.remove('drag-over');

        fileInput.files = e.dataTransfer.files;

        fileInput.dispatchEvent(
            new Event('change', { bubbles: true })
        );
    });
};