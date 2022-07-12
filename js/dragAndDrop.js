import { list } from './list.js'

list.addEventListener('dragover', (evt) => {
  evt.preventDefault()

  const activeElement = list.querySelector('.selected')
  const currentElement = evt.target
  const isMoveable = activeElement !== currentElement && currentElement.classList.contains('list-item')

  if (!isMoveable) {
    return
  }

  const nextElement = currentElement === activeElement.nextElementSibling ? currentElement.nextElementSibling : currentElement

  list.insertBefore(activeElement, nextElement)
})