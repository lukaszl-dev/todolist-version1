
const TASKS = document.querySelectorAll('.task');
const COLUMNS = document.querySelectorAll('.column');


TASKS.forEach((TASKS) => {
    TASKS.addEventListener('dragstart', () => {
        TASKS.classList.add('draging');
    });
    TASKS.addEventListener('dragend', () => {
        TASKS.classList.remove('draging');
    });
});



COLUMNS.forEach(COLUMNS => {
    COLUMNS.addEventListener('dragover', () => {
        const DRAGGABLE = document.querySelector('.draging');
        COLUMNS.appendChild(DRAGGABLE);
    });
})