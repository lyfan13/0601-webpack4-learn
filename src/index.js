console.log('hello wosssrld! ok')
// import './css/index.styl'; 
import './css/index.styl';
import logo from './img/logo.png'
//建立元素函数
function component () {
  const element = document.createElement('div')
  const image = new Image()
  image.src = logo
  element.appendChild(image)
  element.classList.add('div')
  document.body.appendChild(element)
}
component()
$('.div').click(function () {
  alert('you click the blue div!')
})
