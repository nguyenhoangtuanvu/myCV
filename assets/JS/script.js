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
    document.querySelector('.sidebar-wrapper').innerHTML = "";

}

var getOpenModelBtn = document.querySelectorAll('.project-thumbnail');
var testimonialsBtn = document.querySelectorAll('.testimonials');
var getCloseModelBtn = document.querySelector('.close');

var sidebarWrapper = document.querySelector('.sidebar-wrapper');
var preBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');

// portfolio open overlay
for(var btn of getOpenModelBtn) {
    btn.addEventListener('click',openPortfolioOverlay);
}
getCloseModelBtn.onclick = function() {
    closePortfolioOverlay();
    imgIndex = 0;
}
        

// testimonial open overlay
for(var btn of testimonialsBtn) {
    btn.onclick = (e) => { 
        openPortfolioOverlay();
    }
}


// list image of project
var projects = [
    {
        name: 'appkeToan',
        image: [
            'assets/img/appketoan.png',
            'assets/img/ketoan2.png',
            'assets/img/ketoan3.png',
            'assets/img/ketoan4.png',
            'assets/img/ketoan5.png',
            'assets/img/ketoan6.png'
        ]
    },
    {
        name: 'appMaketing',
        image: [
            'assets/img/appmarketing.png',
            'assets/img/marketing2.png',
            'assets/img/marketing3.png',
            'assets/img/marketing4.png'
        ]
    },
    {
        name: 'webSaleLaravel',
        image: [
            'assets/img/appLaravel1.png',
            'assets/img/appLaravel2.png',
            'assets/img/appLaravel3.png',
            'assets/img/appLaravel4.png'
        ]
    },
    {
        name: 'webSaleMVC',
        image: [
            'assets/img/webMVC1.png',
            'assets/img/webMVC2.png',
            'assets/img/webMVC3.png',
            'assets/img/webMVC4.png'
        ]
    },
    {
        name: 'webSale',
        image: [
            'assets/img/webSale_img.png',
            'assets/img/appketoan.png'
        ]
    },
    {
        name: 'appDesktop',
        image: [
            'assets/img/app_desktop.png'
        ]
    },
    {
        name: 'Database',
        image: [
            'assets/img/dtb.png'
        ]
    },
    {
        name: 'bangTotNghiep',
        image: [
            './assets/img/bằng cao đẳng.jpg',
            './assets/img/bằng cao đẳng2.jpg'
        ]
    },
    {
        name: 'english',
        image: [
            './assets/img/chứng chỉ inglish.jpg',
            './assets/img/chứng chỉ inglish2.jpg'
        ]
    },
    {
        name: 'ic3CF',
        image: [
            './assets/img/IC3 Key Applications  Global Standard 5.png'
        ]
    },
    {
        name: 'ic3KA',
        image: [
            './assets/img/IC3 Computing Fundamentals  Global Standard 5.png'
        ]
    },
    
];
// show sidebar images
var listPaths = [];
var imgIndex = 0;

function getPaths(name) {
    projects.find((project) => {
        if (project.name == name) {
            return project.image;     
        }
    })
}
function Project(name) {
    var project = projects.find((project) => {
        if (project.name == name) {
            return project;
        }
    })
    listPaths = Object.values(project.image);
    showSidebar(project.image);

    showImg(listPaths[imgIndex]);
}

function showSidebar(Paths) {
    var sidebarImagesHtml= '';
    Array.from(Paths).forEach((element, index) => {
        sidebarImagesHtml += `<img src="${element}" alt="" class="project-detail__img-demo"><br />`;       
    });
    sidebarWrapper.innerHTML = sidebarImagesHtml;

    let sidebarImages = document.querySelectorAll('.project-detail__img-demo');
    for (let i = 0; i < sidebarImages.length; i++) {
        sidebarImages[i].onclick = function(e) {
            let path = e.target.getAttribute('src');
            showImg(path);
        }
    }
}



preBtn.onclick = () => {
    changeIndex(-1);
}
nextBtn.onclick = () => {
    changeIndex(+1);
}

function changeIndex(number) {
    let imagePath = Object.values(listPaths);
    imgIndex += number;
    if (imgIndex > imagePath.length -1) { imgIndex = 0 }
    if (imgIndex < 0) { imgIndex = imagePath.length -1}

    showImg(imagePath[imgIndex]);
}

function showImg(image) {
    console.log("imgIndex:", imgIndex)
    var project = document.querySelector('.poftfolio__img-main');
    project.querySelector('img').src = image;
}