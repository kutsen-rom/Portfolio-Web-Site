const projectPic = [document.getElementById('pr-1'), document.getElementById('pr-2'), document.getElementById('pr-3'), document.getElementById('pr-4'),document.getElementById('pr-5')];
const projectName = [document.getElementById("name-1"), document.getElementById("name-2"), document.getElementById("name-3"), document.getElementById("name-4"), document.getElementById("name-5")]
const projectDesc = [document.getElementById("desc-1"), document.getElementById("desc-2"), document.getElementById("desc-3"), document.getElementById("desc-4"), document.getElementById("desc-5")]
const links = [document.getElementById("link-1"), document.getElementById("link-2"), document.getElementById("link-3"), document.getElementById("link-4"), document.getElementById("link-5")]
const show = " current-project-image corner-box";
const showName = " curr-name";
const showDesc = " curr-description"
const hide = " hide"
const previous = document.getElementById("left-arrow");
const next = document.getElementById("right-arrow")
const makePrevious = " previous-project";
const makeNext = " next-project";
let i=0;



function showNext () {
    links[i].className += hide;
    projectName[i].className += hide;
    projectDesc[i].className += hide;
    projectPic[i].className -= show;
    i += 1 
    if (i > projectPic.length-1) {
        i -= projectPic.length
        
    
    }
    links[i].className = -+ hide;
    projectPic[i].className += show;
    projectName[i].className -= hide;
    projectDesc[i].className -= hide;
    projectName[i].className += showName;
    projectDesc[i].className += showDesc;
    
   
}

function showPrevious () {
    links[i].className += hide;
    projectName[i].className += hide;
    projectDesc[i].className += hide;
    projectPic[i].className -= show;
    i -= 1 
    if (i<0) {
        i += projectPic.length;
    }
    links[i].className -= hide;
    projectPic[i].className += show;
    projectName[i].className -= hide;
    projectDesc[i].className -= hide;
    projectName[i].className += showName;
    projectDesc[i].className += showDesc;
    
}

next.addEventListener("click", showNext);
previous.addEventListener("click", showPrevious);

// projects[3].className -= show
// projects[0].className += show


















































// FOR LATER




// $(".line-transparent").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//     $(".lines").removeClass("animated")  
//   })
  
//   $(".line-transparent").hover(function(){
//     $(".lines").addClass("animated");        
//   })

// $(".contact").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//     $(".contact").removeClass("appear")  
//   })
  
//   $(".contact").hover(function(){
//     $(".contact").addClass("appear");        
//   })


//   $(".box").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//     $(this).removeClass("animate")  
//   })
  
//   $(".box").hover(function(){
//     $(this).addClass("animate");        
//   })

//   document.getElementById("line-1-animate").style.backgroundColor = "green";

//   document.getElementById("boxie").style.backgroundColor = "green";