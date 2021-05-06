
var dropable = false
var clone;

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");


draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart",dragStart,false)
    draggable.addEventListener("dragend",dragEnd)
})

containers.forEach((container) => {
  container.addEventListener("dragover", dragOver);
  container.addEventListener("dragenter", dragEnter);
  container.addEventListener("dragleave", dragLeave);
  container.addEventListener("drop", Drop);
});

function overClone (e){
  e.preventDefault()
  dropable = true;
}

function dragStart(e){
    dragItem = this;
    setTimeout(()=>{
        clone = this.cloneNode(true)
        clone.style.opacity = 0;
        clone.classList.add("clone")
        clone.addEventListener("dragover",overClone)
        clone.addEventListener("drop",overClone)
        this.classList.add("dragging");

    },0)
}
function dragEnd() {
  setTimeout(() => {
    this.classList.remove("dragging");
    if (!dropable) {
      dragItem.parentNode.removeChild(dragItem);
      dragItem = null;
    }
  }, 0);
}

function dragOver (e){
    e.preventDefault()
    dropable = true;
    const afterElement = getDragAfterElement(this,e.clientY);
    if(afterElement == null){
      if(dropable){
        this.append(clone);
      }
    }else{
      if(dropable){
        this.insertBefore(clone,afterElement)
      }
    }
}
function dragEnter (e){
    e.preventDefault()
    dropable = true;
    
}
function dragLeave (){
  dropable = false;
}
function Drop(e) {
  const afterElement = getDragAfterElement(this, e.clientY);
  var delClone = document.querySelector(".clone");
  if (afterElement == null) {
    if (dropable) {
      this.append(dragItem);
      delClone.parentNode.removeChild(delClone);
      dragItem.style.opacity = 1;
      dragItem = null;
    }
  } else {
    if (dropable) {
      this.insertBefore(dragItem, afterElement);
      delClone.parentNode.removeChild(delClone);
      dragItem.style.opacity = 1;
      dragItem = null;
    }
  }
}


function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}