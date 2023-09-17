const cube = document.querySelector('.cube');

let rotationX = 0;
let rotationY = 0;

cube.addEventListener('mousedown', (e) => {
    e.preventDefault();

    let startX = e.clientX;
    let startY = e.clientY;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        rotationX += deltaY * 0.5;
        rotationY += deltaX * 0.5;

        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }

function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});

// Optional: Add touch support for mobile devices
cube.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];

    let startX = touch.clientX;
    let startY = touch.clientY;

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);

    function onTouchMove(e) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        rotationX += deltaY * 0.5;
        rotationY += deltaX * 0.5;

        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        startX = touch.clientX;
        startY = touch.clientY;
    }

   function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    }
});