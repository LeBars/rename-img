const input = document.querySelector('#input')
const downloadBtn = document.querySelector('#download')
const list = document.querySelector('.list')
const previewImg = document.querySelector('.preview-img')
const patternName = 'flat_'
const extension = '.svg'
let count = 1

const createImg = (src) => {
  const img = document.createElement('img')
  img.src = `../img/${src}`
  img.classList.add('list-item-img')

  return img
}

const createName = (name) => {
  const p = document.createElement('p')
  p.textContent = name

  return p
}

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

addListeners = (item) => {
  item.addEventListener('click', (evt) => {
    previewImg.src = evt.target.querySelector('img').getAttribute('src')
  })
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

const download = (img) => {
  console.log(img.src, img.name);
  const link = document.createElement('a')
  link.href = img.src
  link.download = `${patternName}${count}${extension}`
  link.style.display = 'none'
  const evt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  })
  document.body.appendChild(link)
  link.dispatchEvent(evt)
  document.body.removeChild(link)
  count++
}

downloadBtn.addEventListener('click', () => {
  const listImages = document.querySelectorAll('.list-item-img')
  const images = [...listImages]
  
  images.forEach(img => download(img))
})