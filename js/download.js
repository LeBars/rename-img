const downloadBtn = document.querySelector('#download-files')
const startCount = document.querySelector('#start-num')
const patternName = 'flat_'
const extension = '.svg'
let count = startCount.value

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

startCount.addEventListener('change', (evt) => {
  count = evt.target.value
})