const sidebarBtn = document.querySelectorAll('.nav-items__link--detail')
const sidebarBtn_home = document.querySelector('.nav-items__link--home')
const content_wrap = document.querySelector('.content-wrap')
const avatar1 = document.getElementById('myprofile1')
const avatar2 = document.getElementById('myprofile2')
const content_detail = document.querySelector('.content-detail')
function contentDetail() {
    content_wrap.classList.add('cnt--detail')
    avatar1.classList.remove('avtActive')
    avatar2.classList.add('avtActive')
    content_detail.classList.add('active')
}
for (const btn of sidebarBtn) {
    btn.addEventListener('click',contentDetail)
}
function contentHome() {
    content_wrap.classList.remove('cnt--detail')
    avatar1.classList.add('avtActive')
    avatar2.classList.remove('avtActive')
    content_detail.classList.remove('active')
}
sidebarBtn_home.addEventListener('click',contentHome)
