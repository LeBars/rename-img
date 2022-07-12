const input = document.querySelector('#select-floor')
const floor = document.querySelector('.preview')

const createImg = (src) => {
  const img = document.createElement('img')
  img.src = `../img/floors/${src}`
  img.classList.add('floor-img')

  return img
}

input.addEventListener('change', (evt) => {
  floor.appendChild(createImg(evt.target.files[0].name))
})