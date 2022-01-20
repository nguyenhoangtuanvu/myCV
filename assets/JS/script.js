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


// poftfolio overlay

    // open/close model
function openPortfolioOverlay() {
    document.getElementById('model').style.display = "block";
}
function closePortfolioOverlay() {
    document.getElementById('model').style.display = "none";
}

var getOpenModelBtn = document.querySelectorAll('.project-thumbnail');
var getCloseModelBtn = document.querySelector('.close');
for(var btn of getOpenModelBtn) {
    btn.addEventListener('click',openPortfolioOverlay);
}
getCloseModelBtn.addEventListener('click',closePortfolioOverlay);

// model content
var imgIndex = 1;
showImg(imgIndex);

function plussImg(n) {
    showImg(imgIndex += n);
}
function currentProject(n) {
    showImg(imgIndex = n);
}
function showImg(n) {
    var i;
    var project = document.getElementsByClassName('poftfolio__img-main');
    var imgDemo = document.getElementsByClassName('project-detail__img-demo');
    
    if(imgIndex > project.length) {imgIndex = 1}
    if(imgIndex < 1) {imgIndex = project.length}
    for(i = 0; i< project.length; i++) {
        project[i].style.display = "none";
    }
    // for(i = 0; i< imgDemo.length; i++) {
    //     imgDemo[i].className = imgDemo[i].className.replace(" active", "");
    // }
    project[imgIndex-1].style.display = "block";
    imgDemo[imgIndex-1].className += " imgDemo-active";
}

// google map
// function googleMap() {
//     var mapPop = {
//         center:new google.maps.LatLng(51.508742,-0.120850),
//         zoome:5,
//     };
//     var map = new google.maps.Map(document.getElementById('google-map'),mapPop)
// }