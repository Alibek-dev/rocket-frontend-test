

function openSearchBlock(box) {
    let display = document.getElementById(box).style.display
    if (display === 'none') {
        document.getElementById(box).style.display = 'block'
    } else {
        document.getElementById(box).style.display = 'none'
    }
    document.getElementById('box-history').style.display = 'none'
}

function openHistoryBlock(box) {
    let display = document.getElementById(box).style.display
    if (display === 'none') {
        document.getElementById(box).style.display = 'block'
    } else {
        document.getElementById(box).style.display = 'none'
    }
    document.getElementById('box-search').style.display = 'none'
}

window.onscroll = function showHeader() {
    let header = document.querySelector('.nav-wrapper')
    if (window.pageYOffset > 200) {
        document.getElementById('box-search').style.display = 'none'
        document.getElementById('box-history').style.display = 'none'
        header.classList.add('nav-wrapper-fixed')
        document.getElementById('topbutton').style.visibility = 'visible'
    } else {
        header.classList.remove('nav-wrapper-fixed')
        document.getElementById('topbutton').style.visibility = 'hidden'
    }
}