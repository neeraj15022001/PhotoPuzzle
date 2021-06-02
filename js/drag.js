const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.dragContainer')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
    console.log("dragging")
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
    console.log("dragend")
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      console.log(offset,child)
      return { offset: offset, element: child }
    } else {
      console.log(closest)
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}