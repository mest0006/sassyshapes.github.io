const colors = ['red', 'blue', 'green', 'purple', 'orange']
const shapes = ['square', 'circle', 'pentagon', 'hexagon', 'octagon']

let $main = document.querySelector('.shapes')
let s = []
for (let shape of shapes) {
  for (let color of colors) {
    s.push(`
  <div class="${shape}-${color}">
   </div> 
`)



  }
}
$main.innerHTML = s.join('')