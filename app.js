let menu = document.querySelector('.nav__hidden')
let btn = document.querySelector('.menu-btn')
let burger = document.querySelector('.burger')
let i = 0

btn.addEventListener('click', ()=> {
    if(i == 0){
        btn.innerHTML = "Меню ↑"
        menu.style.cssText += "display: flex"
        i++
        console.log('xd1')
    }else if(i == 1){
        btn.innerHTML = "Меню ↓"
        menu.style.cssText += "display: none"
        i--
        console.log('xd2')
    }
})

burger.addEventListener('click', ()=> {
    if(i == 0){
        menu.style.cssText += "display: flex"
        i++
        console.log('xd1')
    }else if(i == 1){
        menu.style.cssText += "display: none"
        i--
        console.log('xd2')
    }
})