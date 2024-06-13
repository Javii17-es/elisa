document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photos img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            alert('Esta es una de nuestras fotos juntos mi niña!');
        });
    });
});
