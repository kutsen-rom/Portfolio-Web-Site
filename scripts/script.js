const projectPic = [document.getElementById('pr-1'), document.getElementById('pr-2'), document.getElementById('pr-3'), document.getElementById('pr-4'),document.getElementById('pr-5')];
const projectName = [document.getElementById("name-1"), document.getElementById("name-2"), document.getElementById("name-3"), document.getElementById("name-4"), document.getElementById("name-5")];
const projectDesc = [document.getElementById("desc-1"), document.getElementById("desc-2"), document.getElementById("desc-3"), document.getElementById("desc-4"), document.getElementById("desc-5")];
const links = [document.getElementById("link-1"), document.getElementById("link-2"), document.getElementById("link-3"), document.getElementById("link-4"), document.getElementById("link-5")];
const show = " current-project-image corner-box";
const showName = " curr-name";
const showDesc = " curr-description"
const hide = " hide";
const previous = document.getElementById("left-arrow");
const next = document.getElementById("right-arrow")
const makePrevious = " previous-project";
const makeNext = " next-project";
const skillsButton = document.getElementById("skills-button-main");
const skillsPanel = document.getElementById("skills-panel");
const animationSkills = "black"
const menu = document.getElementById("menu");
const switchButton = document.getElementById("switch");
const allElements = document.getElementsByTagName("*");
const cornerNav = document.getElementsByClassName("corner-nav");
const cornerButton = document.getElementsByClassName("corner-button");
const cornerBox = document.getElementsByClassName("corner-box");
const cornerBoxProjects = document.getElementsByClassName("corner-box-projects");
const cornerBoxProject = document.getElementsByClassName("corner-box-project");
const cornerBoxMenu = document.getElementsByClassName("corner-box-menu");
const contact = document.getElementsByClassName('contact');
const buttons = document.getElementsByClassName("buttons");

let elementNum=0;




function showNext () {
    links[elementNum].className += hide;
    projectName[elementNum].className += hide;
    projectDesc[elementNum].className += hide;
    projectPic[elementNum].className -= show;
    elementNum += 1 
    if (elementNum > projectPic.length-1) {
        elementNum -= projectPic.length
        
    
    }
    links[elementNum].className = -+ hide;
    projectPic[elementNum].className += show;
    projectName[elementNum].className -= hide;
    projectDesc[elementNum].className -= hide;
    projectName[elementNum].className += showName;
    projectDesc[elementNum].className += showDesc;
    
   
}

function showPrevious () {
    links[elementNum].className += hide;
    projectName[elementNum].className += hide;
    projectDesc[elementNum].className += hide;
    projectPic[elementNum].className -= show;
    elementNum -= 1 
    if (elementNum<0) {
        elementNum += projectPic.length;
    }
    links[elementNum].className -= hide;
    projectPic[elementNum].className += show;
    projectName[elementNum].className -= hide;
    projectDesc[elementNum].className -= hide;
    projectName[elementNum].className += showName;
    projectDesc[elementNum].className += showDesc;
    
}
// console.log(skillsPanel.style.animation)
// function skillsAccent () {
//     console.log(skillsPanel.style.animation)
//     if (skillsPanel.style.animation === "2s ease 0s 1 normal none running skills-accent") {
//         // skillsPanel.style.removeProperty(animation);
//         console.log(skillsPanel.style.animation)
//         skillsPanel.style.animation = "0s ease 0s 1 normal none running skills-accent";
//         console.log(skillsPanel.style.animation)
//     } 
//      skillsPanel.style.animation = "skills-accent 2s";
//      console.log(skillsPanel.style.animation);
//     // skillsPanel.style.backgroundColor = "red";
// }


// console.log(skillsPanel.style.animation)
if(next){
next.addEventListener("click", showNext);
}

if(previous){
previous.addEventListener("click", showPrevious);
}

if(document.getElementById("skills-button-main")){
$("#skills-button-main").click(function() {
   
    
    const el = $("#skills-panel").addClass("skills-animation");
    setTimeout(function() {
        el.removeClass("skills-animation");
    }, 2000);
});
}


if (document.getElementById("skills-button-projects")){ 
    document.getElementById("skills-button-projects").addEventListener("click", function() {
    
    
    
    window.addEventListener('load', ()=>{
        const section = document.getElementById('skills-panel');
        if(!performance.navigation.type && document.referrer.includes('/projects.html')){
          section.classList.add('skills-animation')
          section.addEventListener('animationend', ()=>{
          section.classList.remove('skills-animation')
           })
          }
        }) 
    // if(document.getElementById("skills-button-main")){
    //     $("#skills-button-main").click(function() {
    //         const el = $("#skills-panel").addClass("skills-animation");
    //         setTimeout(function() {
    //             el.removeClass("skills-animation");
    //         }, 2000);
    //     })};
    });
    // document.getElementById(localStorage.getItem("mykey")).style.animation = "skills-accent 2s";
   
        
        
    
};


window.addEventListener('load', ()=>{
    const section = document.getElementById('skills-panel');
    if(!performance.navigation.type && document.referrer.includes('/page.html')){
      section.classList.add('add')
      section.addEventListener('animationend', ()=>{
      section.classList.remove('add')
       })
      }
    })

// const showMenu = () => {
//     menu.style.height = ("220px");
//     menu.style.flexDirection = ("column");
     
// }



menu.addEventListener('click',() => {
    if (window.matchMedia("(max-width: 470px").matches){
    menu.style.height = "320px";
   }
     
});

// menu.addEventListener('touchend',() => {
//     if (window.matchMedia("(max-width: 470px").matches){
//     menu.style.height = "40px";
//    }
     
// });

hideOnClickOutside(menu);

function hideOnClickOutside(element) {
    
    const outsideClickListener = event => {
        if (!element.contains(event.target) ) { // or use: event.target.closest(selector) === null
            if (window.matchMedia("(max-width: 470px").matches){
          element.style.height = '40px';
         }
        }
    }

    

    document.addEventListener('click', outsideClickListener)
}



// let theme = localStorage.getItem('theme');
//     localStorage.setItem("theme", "dArk");


// switchButton.addEventListener("click", () => {
    
//     if (theme === "dArk") {

//     document.querySelector("body").style.backgroundImage = "url(./resources/images/background-light-26.svg)";
//     document.getElementById("switch-title").innerHTML = "light";
//     localStorage.setItem("theme", "light")

//     document.getElementById("border-right").style.borderRight = "2px solid black";
//     document.getElementById("border-left").style.borderRight = "2px solid black";
//     const background = document.getElementsByClassName("theme-background");

//     for (let i=0; i<background.length; i++) {
//     background[i].style.backgroundColor = "white";
//     }
    
        
//     // }
//     }
//     else if (document.getElementById("switch-title").innerHTML === "light") {
//         document.getElementById("border-left").style.borderRight = "2px solid red";
//     }
// })

switchButton.addEventListener("mouseover", () => {
    switchButton.style.animation = "switch-change 0.3s forwards";
    switchButton.style.cursor = "pointer";
})

switchButton.addEventListener("mouseleave", () => {
    switchButton.style.animation = "switch-unchange 0.3s forwards";
})
switchButton.addEventListener("mousedown", () => {
    switchButton.style.animation = "switch-rotate 0.3s forwards";
})
if (contact[0]){
contact[0].addEventListener("mouseover", () => {
    contact[0].style.animation = "contact 0.2s forwards";
   
})

contact[0].addEventListener("mouseleave", () => {
    contact[0].style.animation = "uncontact 0.3s forwards";
})
contact[0].addEventListener("mousedown", () => {
    contact[0].style.transform = "scale(0.95)";
})

contact[0].addEventListener("mouseup", () => {
    contact[0].style.transform = "scale(1)";
})
}
for (let i=0; i<buttons.length; i++) {
    buttons[i].style.animation = "navis 0.3s forwards"

    buttons[i].addEventListener("mouseover", () => {
        buttons[i].style.animation = "uncontacts 0.3s forwards"
    });
    buttons[i].addEventListener("mouseleave", () => {
        buttons[i].style.animation = "navis 0.3s forwards"
    });
}

console.log(window.getComputedStyle(document.getElementsByClassName("switch")[0]).animationName);

switchButton.addEventListener("click", () => {
    if (document.getElementById("switch-title").innerHTML === "dArk") {
        
        document.getElementById("switch-title").innerHTML = "light";
        
        document.querySelector("body").style.backgroundImage = "url(./resources/images/background-light-26.svg)";
        document.getElementById("border-right").style.borderRight = "2px solid black";
        document.getElementById("border-left").style.borderRight = "2px solid black";

        // THEME SWITCH
        switchButton.addEventListener("mouseover", () => {
            switchButton.style.animation = "switch-change-light 0.3s forwards";
            switchButton.style.cursor = "pointer";
        })
        
        switchButton.addEventListener("mouseleave", () => {
            switchButton.style.animation = "switch-unchange-light 0.3s forwards";
        })
        switchButton.addEventListener("mousedown", () => {
            switchButton.style.animation = "switch-rotate-light 0.3s forwards";
        })
        switchButton.style.backgroundImage = "url(./resources/images/light-theme/switch-light-37.svg)"
        
        
        // CONTACT BUTTON ANIMATION 

        if(contact[0]){
            contact[0].style.animation = "uncontact-light 0.3s forwards";
           
        contact[0].addEventListener("mouseover", () => {
            contact[0].style.animation = "contact-light 0.2s forwards";
           
        })

        contact[0].addEventListener("mouseleave", () => {
            contact[0].style.animation = "uncontact-light 0.3s forwards";
        })
       }
    
        // NAV BUTTONS ANIMATION
        for (let i=0; i<buttons.length; i++) {
            buttons[i].style.animation = "navis-light 0.3s forwards"
        
            buttons[i].addEventListener("mouseover", () => {
                buttons[i].style.animation = "uncontacts-light 0.3s forwards"
            });
            buttons[i].addEventListener("mouseleave", () => {
                buttons[i].style.animation = "navis-light 0.3s forwards"
            });
        }

        // CHANGE SKILLS PICS 

        if (document.getElementsByClassName("sk-html")[0]){
        document.getElementsByClassName("sk-html")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-html5-light.svg)"
}       
        if (document.getElementsByClassName("sk-css")[0]){
        document.getElementsByClassName("sk-css")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-css3-light.svg)"
}
        if (document.getElementsByClassName("sk-js")[0]){
        document.getElementsByClassName("sk-js")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-js-light.svg)"
}
        if (document.getElementsByClassName("sk-node")[0]){
        document.getElementsByClassName("sk-node")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-node-light.svg)"
}
        if (document.getElementsByClassName("sk-git")[0]){
        document.getElementsByClassName("sk-git")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-git-light.svg)"
}
        if (document.getElementsByClassName("sk-github")[0]){
        document.getElementsByClassName("sk-github")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-github-light.svg)"
}
        if (document.getElementsByClassName("sk-chrome")[0]){
        document.getElementsByClassName("sk-chrome")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-chrome-light.svg)"
}
        if (document.getElementsByClassName("sk-terminal")[0]){
        document.getElementsByClassName("sk-terminal")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-terminal-light.svg)"
}


        //  END OF SKILLS PICS


        console.log(window.getComputedStyle(cornerNav[0]).getPropertyValue('--b'))
        
        for (let i=0; i<cornerNav.length; i++){
            cornerNav[i].style.setProperty('--b', 'black');
            }

        for (let i=0; i<cornerButton.length; i++){
            cornerButton[i].style.setProperty('--b', 'black');
            }

        for (let i=0; i<cornerBox.length; i++){
            cornerBox[i].style.setProperty('--b', 'black');
            }

        for (let i=0; i<cornerBoxProjects.length; i++){
            cornerBoxProjects[i].style.setProperty('--b', 'black');
            }

        for (let i=0; i<cornerBoxProject.length; i++){
            cornerBoxProject[i].style.setProperty('--b', 'black');
            }

        for (let i=0; i<cornerBoxMenu.length; i++){
            cornerBoxMenu[i].style.setProperty('--b', 'white');
            }

        for (let i=0; i < contact.length; i++) {
            contact[i].style.backgroundColor = 'black';
            console.log(contact[i])
        }
       
        console.log(window.getComputedStyle(document.getElementsByClassName("corner-nav")[0]).getPropertyValue('--b'))
    for (let i=0; i < allElements.length; i++) {
        
       
            
            if (window.getComputedStyle(allElements[i]).backgroundColor === "rgb(0, 0, 0)") {
                allElements[i].style.backgroundColor = "white";
            };
            
            if (window.getComputedStyle(allElements[i]).color === "rgb(255, 255, 255)") {
                allElements[i].style.color = "black";
                
            };

            if (window.getComputedStyle(allElements[i]).border === "1px solid rgb(255, 255, 255)") {
                allElements[i].style.border = "1px solid black";
            };

            if (window.getComputedStyle(allElements[i]).border === "2px solid rgb(255, 255, 255)") {
                allElements[i].style.border = "2px solid black";
            };

            if (window.getComputedStyle(allElements[i]).borderTop === "2px solid rgb(255, 255, 255)") {
                allElements[i].style.borderTop = "2px solid black";
            };

            if (window.getComputedStyle(allElements[i]).borderBottom === "2px solid rgb(255, 255, 255)") {
                allElements[i].style.borderBottom = "2px solid black";
            };
           
           
            
        }
    }
})

console.log(window.getComputedStyle(document.getElementsByClassName("corner-nav")[0]).getPropertyValue('--b'))
// document.getElementsByClassName("corner-nav")[0].style.setProperty('--b', 'black');
console.log(window.getComputedStyle(document.getElementsByClassName("corner-nav")[0]).getPropertyValue('--b'))
// menu.addEventListener("mouseleave", () => {
//     menu.style.height = "40px";
// })
// skillsButton.addEventListener("click", skillsAccent);

// projects[3].className -= show
// projects[0].className += show

// $(window).observe('domready', function () {
//     $(location.hash).click();
// });
















































// FOR LATER
// $("#skills-button-main").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//          $("#skills-panel").removeClass("skills-animation")  ;
//      })



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

//   document.getElementById("boxie").style.backgroundColor = "green";}
