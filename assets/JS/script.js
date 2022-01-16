const content_wrap = document.querySelector('.content-wrap')
const avatar1 = document.getElementById('myprofile1')
const avatar2 = document.getElementById('myprofile2')
const content_detail = document.querySelector('.content-detail')

const detailTable = document.querySelectorAll('.detail-table')
const sidebarBtn_home = document.querySelector('.nav-items__link--home')
// gọi class content-detail
const resume = document.querySelector('.content-detail-resume-wrap')
const skills = document.querySelector('.content-detail-skills-wrap')
const portfolio = document.querySelector('.content-detail-portfolio-wrap')
const contact = document.querySelector('.content-detail-contact-wrap')
// gọi button
const resumebtn = document.querySelector('.nav-items__link--resume')
const skillsbtn = document.querySelector('.nav-items__link--skills')
const portfoliobtn = document.querySelector('.nav-items__link--portfolio')
const contactbtn = document.querySelector('.nav-items__link--contact')

// open detail
function contentDetail() {
    content_wrap.classList.add('cnt--detail')
    avatar1.classList.remove('avtActive')
    avatar2.classList.add('avtActive')
    content_detail.classList.add('active')
}
for (const btn of detailTable) {
    btn.addEventListener('click',contentDetail)
    // console.log(btn.querySelector)
}
// open detail table content
// resume
resumebtn.addEventListener('click',resumef)
function resumef() {
    resume.classList.add('active-content')
    
    skills.classList.remove('active-content')
    portfolio.classList.remove('active-content')
    contact.classList.remove('active-content')

}
// skills
skillsbtn.addEventListener('click',skillsf)
function skillsf() {
    skills.classList.add('active-content')

    resume.classList.remove('active-content')
    portfolio.classList.remove('active-content')
    contact.classList.remove('active-content')
}
// portfolio
portfoliobtn.addEventListener('click',portfoliof)
function portfoliof() {
    portfolio.classList.add('active-content')

    resume.classList.remove('active-content')
    skills.classList.remove('active-content')
    contact.classList.remove('active-content')
}
// contact
contactbtn.addEventListener('click',contactf)
function contactf() {
    contact.classList.add('active-content')

    resume.classList.remove('active-content')
    skills.classList.remove('active-content')
    portfolio.classList.remove('active-content')
}
// home
function contentHome() {
    content_wrap.classList.remove('cnt--detail')
    avatar1.classList.add('avtActive')
    avatar2.classList.remove('avtActive')
    content_detail.classList.remove('active')
}
sidebarBtn_home.addEventListener('click',contentHome)
