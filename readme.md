## Assignment 1

I have created user card container using Grid sytem as mentioned in the assignment 1, but for the header I have used flex box as we have only 2 element (brand logo/name ,'Get Users' button) inside the header container. and was much easier.

whenever there is click event on the ``Get Users`` button a get request is called on endpoint ``https://reqres.in/api/users?page=1`` 
with the help of axios.get
 
And while we are getting the user from the endpoint A loader is shown with the help of useState hook to know if the ``loading`` state is ``true``,so we can have a nice loader animation .

And for styling ``styled-components`` is used.


## Assignment 2

As mentioned in the Assignment I have not use any css frameworks

## Assignment 3

Make a drag and drop UI as seen in the GIF.

Link to gif: https://drive.google.com/file/d/17LBgnx6PAYGseJqvFM3MZLzn6RfaZwTm/view

For the UI i have used Flexbox,
and the functionality is written in vanilla JavaScript.

For the drag and drop 
i have used the native drag and drop api.

``` HTML
    <p class="draggable" draggable="true">Item #1</p>
```

On the draggable elements I have added event listners 

``` JavaScript 
    const draggables = document.querySelectorAll(".draggable");
    draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart",dragStart,false)
    draggable.addEventListener("dragend",dragEnd)
})
```
On dragEnd we are also determining if the element is allowed to be droped at that point or not, if not we are which means we are droping the element outside the 3 containers so we are removing the element.

``` JavaScript
    function dragEnd() {
    setTimeout(() => {
        this.classList.remove("dragging");
        if (!dropable) {
            dragItem.parentNode.removeChild(dragItem);
            dragItem = null;
        }
    }, 0);
}
```


On the conatiners, I have added event listners to listen to the events (dragover,drop,dragenter,dragleave)

``` JavaScript
    const containers = document.querySelectorAll(".container");
    containers.forEach((container) => {
    container.addEventListener("dragover", dragOver);
    container.addEventListener("dragenter", dragEnter);
    container.addEventListener("dragleave", dragLeave);
    container.addEventListener("drop", Drop);
});

```

whenever the draggable element is dragedover these containers, a clone is added to the container at the position of the cursor,with zero visibility (to visually see where the draggable element will be positioned or fit).

To know where to position the clone we calling a function and passing the current container and the cursor `y` position which gives back the the element where we need to position our invisible clone.

``` JavaScript
function getDragAfterElement(currentContainer,y);
```

##### getDragAfterElement(container,y)

```JavaScript
function getDragAfterElement(container, y) {
    // we are making a array of all the element in the conatiner(but not element which is currently dragged) with ...  and holding the value in a const
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

    // we are using reduce function to get the clossest offset of the draggedover element

  return draggableElements.reduce(
    (closest, child) => {
        // getting the Bounding properties of current child
      const box = child.getBoundingClientRect();
        // getting the mid position of the current element
      const offset = y - box.top - box.height / 2;
        // if we have the closest element we will return the element   
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        // else we will return the initial value
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY } // initializing value
  ).element; // we are returning only the element and not offser
}
```

if we are getting the element means the clone should position itself before that element ,
and if we are not getting the element means we just need to append the clone in the container

At last whenever the element is droped inside the container
we are again calling the getDragAfterElement function but this time it will give us the clone(we dont have to worry about that),so we are adding just before that clone and afte adding we are deleting the clone.

``` JavaScript
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
```







