//const element = document.querySelector ('h1')
/*element.innerText = "Hello World"
element.textContent = "Hello World"
element.innerHTML = "Hello World <p>my-paragraph</p>"
element.innerHTML = "Hello World <i>my-paragraph</i>"*/
// const element = document.querySelector ('body')
// element.style.backgroundColor = 'green'
// console.log (element)
//const element = document.querySelector ('button')
const element = document.querySelector ('input')
// element.onclick = () => {
//     alert ('Fui pressionado')
// }
// element.onkeypress = () => {
//     console.log ('Pressionei uma tecla')
// }
element.onkeypress = (event) => {
    console.log (event.target.value)
}