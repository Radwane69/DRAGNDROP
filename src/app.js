const base = document.querySelector('.base');
const box = document.querySelectorAll('.case');

base.addEventListener('dragstart', dragstart);
base.addEventListener('dragend', dragend);

function dragstart() {
    this.className += 'tenu';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragend() {
    this.className = 'base';
}

for (const vide of box) {
    vide.addEventListener('dragover', dragOver);

    vide.addEventListener('dragenter', dragEnter);

    vide.addEventListener('dragleave', dragLeave);

    vide.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    e.preventDefault()

}

function dragEnter(e) {
    e.preventDefault();
    this.className = 'case'
}

function dragLeave() {
    console.log("leave");
}

function dragDrop() {
    console.log("dropped");
}