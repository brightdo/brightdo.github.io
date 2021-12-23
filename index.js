
// for mouse hover of bottom nav bar.

//classes on hover
document.getElementById('nav-classes').onmouseover = function(){
    document.getElementById("image").style.backgroundImage = "url('assets/img/classes.jpg')" 
    hideText("hidden");
};
document.getElementById('nav-classes').onmouseleave = function(){
    document.getElementById("image").style.backgroundImage = 'none'; 
    hideText("visible");
};

//projects on hover
document.getElementById('nav-Projects').onmouseover = function(){
    document.getElementById("image").style.backgroundImage = "url('assets/img/projects.jpg')" 
    hideText("hidden");
};
document.getElementById('nav-Projects').onmouseleave = function(){
    document.getElementById("image").style.backgroundImage = 'none'; 
    hideText("visible");
};

//jetsweat on hover
document.getElementById('nav-JetSweat').onmouseover = function(){
    document.getElementById("image").style.backgroundImage = "url('assets/img/jetsweat.jpg')" 
    hideText("hidden");
};
// document.getElementById('nav-JetSweat').onmouseleave = function(){
//     document.getElementById("image").style.backgroundImage = 'none'; 
//     hideText("visible");
// };


function hideText(visible){
    document.getElementById('headerName').style.visibility = visible;
    document.getElementsByClassName('headerlead center-block')[0].style.visibility = visible;
    document.getElementsByClassName('headerlead center-block')[1].style.visibility = visible;
}