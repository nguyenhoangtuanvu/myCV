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
