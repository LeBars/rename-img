export const list = document.querySelector('.list')
const input = document.querySelector('#select-flats')

const createImg = (src) => {
  const img = document.createElement('img')
  img.src = `../img/flats/${src}`
  img.classList.add('list-item-img')

  return img
}

const createName = (name) => {
  const p = document.createElement('p')
  p.textContent = name

  return p
}

const addListeners = (item) => {
  item.addEventListener('dragstart', (evt) => {
    evt.target.classList.add('selected')
  })
  item.addEventListener('dragend', (evt) => {
    evt.target.classList.remove('selected')
  })
}

input.addEventListener('change', (evt) => {
  const images = [...evt.target.files]
  
  images.forEach(img => {
    const item = document.createElement('li')
    item.classList.add('list-item')
    item.appendChild(createImg(img.name))
    item.appendChild(createName(img.name))
    item.draggable = true
    addListeners(item)
  
    list.appendChild(item)
  })
})