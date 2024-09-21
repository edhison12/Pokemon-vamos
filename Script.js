document.addEventListener('DOMContentLoaded', function() {
    const pokemon = document.getElementById('pokemon');
    let posX = window.innerWidth / 2 - 50;
    let posY = window.innerHeight / 2 - 50;
    const step = 10; // Distancia de movimiento

    // Mover al Pikachu usando las flechas del teclado
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp':
                posY = Math.max(0, posY - step);
                break;
            case 'ArrowDown':
                posY = Math.min(window.innerHeight - 100, posY + step);
                break;
            case 'ArrowLeft':
                posX = Math.max(0, posX - step);
                break;
            case 'ArrowRight':
                posX = Math.min(window.innerWidth - 100, posX + step);
                break;
        }

        // Actualizar la posición del Pikachu
        pokemon.style.top = posY + 'px';
        pokemon.style.left = posX + 'px';
    });
});
