const content = document.querySelectorAll('.accordion>.acc-item>.acc-content')

for (let i = 0; i < content.length; i++) {
    let temp = content[i].clientHeight
    content[i].setAttribute('data-h', temp)

    content[i].style.height = '0'
}

function active(s, num) {
    for (let k = 0; k < content.length; k++) {
        if (num != k) {
            content[k].style.height = '0'
            content[k].style.margin = '0'
            const otherIcon = content[k].previousElementSibling.querySelector('.acc-icon')
            otherIcon.style.transform = 'rotate(0deg)'
        }
    }


    if (s.nextElementSibling.clientHeight == 0) {
        let h = s.nextElementSibling.getAttribute('data-h')
        s.nextElementSibling.style.height = h + 'px'
        s.nextElementSibling.style.margin = '5px 20px'
        s.children[1].style.transform = 'rotate(90deg)'
    } else {
        s.nextElementSibling.style.height = '0'
        s.nextElementSibling.style.margin = '0px'
        s.children[1].style.transform = 'rotate(0deg)'
    }
}