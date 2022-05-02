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
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const linkedIn = document.getElementsByClassName("linked-in")[0];
const mail = document.getElementsByClassName("mail")[0];
const gitHubLink = document.getElementById("github-link");

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

// if(document.getElementById("skills-button-main")){
// $("#skills-button-main").click(function() {
   
    
//     const el = $("#skills-panel").addClass("skills-animation");
//     setTimeout(function() {
//         el.removeClass("skills-animation");
//     }, 2000);
// });
// }


if (document.getElementById("skills-button-main")) {
    document.getElementById("skills-button-main").addEventListener("click", () => {
        document.getElementById("skills-panel").style.animation = "skills-accent 2s"
    })

    document.getElementById("skills-panel").addEventListener("animationend", () => {
        document.getElementById("skills-panel").style.animation = "";
    })
};




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



// SWITCH ANIMATION

// switchButton.addEventListener("mouseover", () => {
//     switchButton.style.animation = "switch-change 0.3s forwards";
//     switchButton.style.cursor = "pointer";
// })

// switchButton.addEventListener("mouseleave", () => {
//     switchButton.style.animation = "switch-unchange 0.3s forwards";
// })
// switchButton.addEventListener("mousedown", () => {
//     switchButton.style.animation = "switch-rotate 0.3s forwards";
// })

// switchButton.addEventListener("animationend", () => {
//     if (switchButton.style.animation === "0.3s ease 0s 1 normal forwards running switch-rotate"){
//         switchButton.style.animation = "";
//     }
// })


//  CONTACT BUTTON

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


//  NAVBAR ANIMATION
for (let i=0; i<buttons.length; i++) {
    buttons[i].style.animation = "navis 0.3s forwards"

    buttons[i].addEventListener("mouseover", () => {
        buttons[i].style.animation = "uncontacts 0.3s forwards"
    });
    buttons[i].addEventListener("mouseleave", () => {
        buttons[i].style.animation = "navis 0.3s forwards"
    });

    buttons[i].addEventListener("mousedown", () => {
        buttons[i].style.transform = "scale(0.95)";
    })

    buttons[i].addEventListener("mouseup", () => {
        buttons[i].style.transform = "scale(1)";
    })
}

// LEFT RIGHT ARROWS ANIMATION

        // LEFT ARROW

        if (leftArrow) {
            leftArrow.style.animation = "left-arrow-unhover 0.3s forwards";

            leftArrow.addEventListener("mouseover", () => {
                leftArrow.style.animation = "left-arrow-hover 0.3s forwards";
            })

            leftArrow.addEventListener("mouseleave", () => {
                leftArrow.style.animation = "left-arrow-unhover 0.3s forwards";
            })

            leftArrow.addEventListener("mousedown", () => {
                leftArrow.style.animation = "left-arrow-active 0.2s forwards";
            })

            leftArrow.addEventListener("animationend", () => {
                if (leftArrow.style.animation === "0.2s ease 0s 1 normal forwards running left-arrow-active"){
                    leftArrow.style.animation = "left-arrow-hover 0.3s forwards";
            }
            })
        }


        // RIGHT ARROW

        if (rightArrow) {
            rightArrow.style.animation = "right-arrow-unhover 0.3s forwards";

            rightArrow.addEventListener("mouseover", () => {
                rightArrow.style.animation = "right-arrow-hover 0.3s forwards";
            })

            rightArrow.addEventListener("mouseleave", () => {
                rightArrow.style.animation = "right-arrow-unhover 0.3s forwards";
            })

            rightArrow.addEventListener("mousedown", () => {
                rightArrow.style.animation = "right-arrow-active 0.2s forwards";
            })

            rightArrow.addEventListener("animationend", () => {
                if (rightArrow.style.animation === "0.2s ease 0s 1 normal forwards running right-arrow-active"){
                    rightArrow.style.animation = "right-arrow-hover 0.3s forwards";
            }
            })
        }


// console.log(window.getComputedStyle(document.getElementsByClassName("switch")[0]).animationName);


let theme = localStorage.getItem("data-theme");


if (!theme) {
    localStorage.setItem("data-theme",  "dark")
}
 


//  SWITCH TO LIGHT THEME

// const switchToLightTheme = () => {
// // switchButton.addEventListener("click", () => {
//     // if (document.getElementById("switch-title").innerHTML === "dArk") {
        
//         document.getElementById("switch-title").innerHTML = "light";
//         // localStorage.setItem("data-theme", "light");
//         // console.log(theme)
//         document.querySelector("body").style.backgroundImage = "url(./resources/images/light-theme/background-light.svg)";
//         document.getElementById("border-right").style.borderRight = "2px solid black";
//         document.getElementById("border-left").style.borderRight = "2px solid black";
        


//         // THEME SWITCH

//         switchButton.addEventListener("mouseover", () => {
//             switchButton.style.animation = "switch-change-light 0.3s forwards";
//             switchButton.style.cursor = "pointer";
//         })
        
//         switchButton.addEventListener("mouseleave", () => {
//             switchButton.style.animation = "switch-unchange-light 0.3s forwards";
//         })
//         switchButton.addEventListener("mousedown", () => {
//             switchButton.style.animation = "switch-rotate-light 0.3s forwards";
//         })
       
//         switchButton.addEventListener("animationend", () => {
//             if (switchButton.style.animation === "0.3s ease 0s 1 normal forwards running switch-rotate-light"){
//                 switchButton.style.animation = "";
//             }
//         })

//         switchButton.style.backgroundImage = "url(./resources/images/light-theme/switch-light-37.svg)"
        
        
//         // CONTACT BUTTON ANIMATION 

//         if(contact[0]){
//             contact[0].style.animation = "uncontact-light 0.3s forwards";
           
//         contact[0].addEventListener("mouseover", () => {
//             contact[0].style.animation = "contact-light 0.2s forwards";
           
//         })

//         contact[0].addEventListener("mouseleave", () => {
//             contact[0].style.animation = "uncontact-light 0.3s forwards";
//         })
//        }
    

//         // NAV BUTTONS ANIMATION

//         for (let i=0; i<buttons.length; i++) {
//             buttons[i].style.animation = "navis-light 0.3s forwards"
        
//             buttons[i].addEventListener("mouseover", () => {
//                 buttons[i].style.animation = "uncontacts-light 0.3s forwards"
//             });
//             buttons[i].addEventListener("mouseleave", () => {
//                 buttons[i].style.animation = "navis-light 0.3s forwards"
//             });
//         }

//         // LEFT RIGHT ARROWS ANIMATION

//         // LEFT ARROW

//         if (leftArrow) {
//             leftArrow.style.animation = "left-arrow-unhover-light 0.3s forwards";

//             leftArrow.addEventListener("mouseover", () => {
//                 leftArrow.style.animation = "left-arrow-hover-light 0.3s forwards";
//             })

//             leftArrow.addEventListener("mouseleave", () => {
//                 leftArrow.style.animation = "left-arrow-unhover-light 0.3s forwards";
//             })

//             leftArrow.addEventListener("mousedown", () => {
//                 leftArrow.style.animation = "left-arrow-active-light 0.2s forwards";
//             })

//             leftArrow.addEventListener("animationend", () => {
//                 if (leftArrow.style.animation === "0.2s ease 0s 1 normal forwards running left-arrow-active-light"){
//                     leftArrow.style.animation = "left-arrow-hover-light 0.3s forwards";
//             }
//             })
//         }


//         // RIGHT ARROW

//         if (rightArrow) {
//             rightArrow.style.animation = "right-arrow-unhover-light 0.3s forwards";

//             rightArrow.addEventListener("mouseover", () => {
//                 rightArrow.style.animation = "right-arrow-hover-light 0.3s forwards";
//             })

//             rightArrow.addEventListener("mouseleave", () => {
//                 rightArrow.style.animation = "right-arrow-unhover-light 0.3s forwards";
//             })

//             rightArrow.addEventListener("mousedown", () => {
//                 rightArrow.style.animation = "right-arrow-active-light 0.2s forwards";
//             })

//             rightArrow.addEventListener("animationend", () => {
//                 if (rightArrow.style.animation === "0.2s ease 0s 1 normal forwards running right-arrow-active-light"){
//                     rightArrow.style.animation = "right-arrow-hover-light 0.3s forwards";
//             }
//             })
//         }

//         // CHANGE SKILLS PICS 

//         if (document.getElementsByClassName("sk-html")[0]){
//         document.getElementsByClassName("sk-html")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-html5-light.svg)"
// }       
//         if (document.getElementsByClassName("sk-css")[0]){
//         document.getElementsByClassName("sk-css")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-css3-light.svg)"
// }
//         if (document.getElementsByClassName("sk-js")[0]){
//         document.getElementsByClassName("sk-js")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-js-light.svg)"
// }
//         if (document.getElementsByClassName("sk-node")[0]){
//         document.getElementsByClassName("sk-node")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-node-light.svg)"
// }
//         if (document.getElementsByClassName("sk-git")[0]){
//         document.getElementsByClassName("sk-git")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-git-light.svg)"
// }
//         if (document.getElementsByClassName("sk-github")[0]){
//         document.getElementsByClassName("sk-github")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-github-light.svg)"
// }
//         if (document.getElementsByClassName("sk-chrome")[0]){
//         document.getElementsByClassName("sk-chrome")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-chrome-light.svg)"
// }
//         if (document.getElementsByClassName("sk-terminal")[0]){
//         document.getElementsByClassName("sk-terminal")[0].style.backgroundImage = "url(./resources/images/light-theme/sk-terminal-light.svg)"
// }


//         //  CORNER BOXES


//         // console.log(window.getComputedStyle(cornerNav[0]).getPropertyValue('--b'))
        
//         for (let i=0; i<cornerNav.length; i++){
//             cornerNav[i].style.setProperty('--b', 'black');
//             }

//         for (let i=0; i<cornerButton.length; i++){
//             cornerButton[i].style.setProperty('--b', 'black');
//             }

//         for (let i=0; i<cornerBox.length; i++){
//             cornerBox[i].style.setProperty('--b', 'black');
//             }

//         for (let i=0; i<cornerBoxProjects.length; i++){
//             cornerBoxProjects[i].style.setProperty('--b', 'black');
//             }

//         for (let i=0; i<cornerBoxProject.length; i++){
//             cornerBoxProject[i].style.setProperty('--b', 'black');
//             }

//         for (let i=0; i<cornerBoxMenu.length; i++){
//             cornerBoxMenu[i].style.setProperty('--b', 'white');
//             }

//         for (let i=0; i < contact.length; i++) {
//             contact[i].style.backgroundColor = 'black';
//             // console.log(contact[i])
//         }
       
//         // console.log(window.getComputedStyle(document.getElementsByClassName("corner-nav")[0]).getPropertyValue('--b'))
   

//         //  SKILLS PANEL BORDER ANIMATION
        
//         if (document.getElementById("skills-button-main")) {
//             document.getElementById("skills-button-main").addEventListener("click", () => {
//                 document.getElementById("skills-panel").style.animation = "skills-accent-light 2s"
//             })
        
//             document.getElementById("skills-panel").addEventListener("animationend", () => {
//                 document.getElementById("skills-panel").style.animation = "";
//             })
//         };


//         //  ALL ELEMENTS
   
//         for (let i=0; i < allElements.length; i++) {
        
       
            
//             if (window.getComputedStyle(allElements[i]).backgroundColor === "rgb(0, 0, 0)") {
//                 allElements[i].style.backgroundColor = "white";
//             };
            
//             if (window.getComputedStyle(allElements[i]).color === "rgb(255, 255, 255)") {
//                 allElements[i].style.color = "black";
                
//             };

//             if (window.getComputedStyle(allElements[i]).border === "1px solid rgb(255, 255, 255)") {
//                 allElements[i].style.border = "1px solid black";
//             };

//             if (window.getComputedStyle(allElements[i]).border === "2px solid rgb(255, 255, 255)") {
//                 allElements[i].style.border = "2px solid black";
//             };

//             if (window.getComputedStyle(allElements[i]).borderTop === "2px solid rgb(255, 255, 255)") {
//                 allElements[i].style.borderTop = "2px solid black";
//             };

//             if (window.getComputedStyle(allElements[i]).borderBottom === "2px solid rgb(255, 255, 255)") {
//                 allElements[i].style.borderBottom = "2px solid black";
//             };
           
           
            
//         }
//     // }
// // })
// }



// SWITCH TO DARK THEME

// const switchToDarkTheme = () => {
//     // switchButton.addEventListener("click", () => {
//         // if (document.getElementById("switch-title").innerHTML === "light") {
            
//             document.getElementById("switch-title").innerHTML = "dArk";
//             // localStorage.setItem("data-theme", "dark");
//             // console.log(theme)
//             document.querySelector("body").style.backgroundImage = "url(./resources/images/background-12.svg)";
//             document.getElementById("border-right").style.borderRight = "2px solid white";
//             document.getElementById("border-left").style.borderRight = "2px solid white";
            
    
    
//             // THEME SWITCH
    
//             switchButton.addEventListener("mouseover", () => {
//                 switchButton.style.animation = "switch-change 0.3s forwards";
//                 switchButton.style.cursor = "pointer";
//             })
            
//             switchButton.addEventListener("mouseleave", () => {
//                 switchButton.style.animation = "switch-unchange 0.3s forwards";
//             })
//             switchButton.addEventListener("mousedown", () => {
//                 switchButton.style.animation = "switch-rotate 0.3s forwards";
//             })
           
//             switchButton.addEventListener("animationend", () => {
//                 if (switchButton.style.animation === "0.3s ease 0s 1 normal forwards running switch-rotate"){
//                     switchButton.style.animation = "";
//                 }
//             })
    
//             switchButton.style.backgroundImage = "url(./resources/images/portfolio-triangle-05.svg)"
            
            
//             // CONTACT BUTTON ANIMATION 
    
//             if(contact[0]){
//                 contact[0].style.animation = "uncontact 0.3s forwards";
               
//             contact[0].addEventListener("mouseover", () => {
//                 contact[0].style.animation = "contact 0.2s forwards";
               
//             })
    
//             contact[0].addEventListener("mouseleave", () => {
//                 contact[0].style.animation = "uncontact 0.3s forwards";
//             })
//            }
        
    
//             // NAV BUTTONS ANIMATION
    
//             for (let i=0; i<buttons.length; i++) {
//                 buttons[i].style.animation = "navis 0.3s forwards"
            
//                 buttons[i].addEventListener("mouseover", () => {
//                     buttons[i].style.animation = "uncontacts 0.3s forwards"
//                 });
//                 buttons[i].addEventListener("mouseleave", () => {
//                     buttons[i].style.animation = "navis 0.3s forwards"
//                 });
//             }
    
//             // LEFT RIGHT ARROWS ANIMATION
    
//             // LEFT ARROW
    
//             if (leftArrow) {
//                 leftArrow.style.animation = "left-arrow-unhover 0.3s forwards";
    
//                 leftArrow.addEventListener("mouseover", () => {
//                     leftArrow.style.animation = "left-arrow-hover 0.3s forwards";
//                 })
    
//                 leftArrow.addEventListener("mouseleave", () => {
//                     leftArrow.style.animation = "left-arrow-unhover 0.3s forwards";
//                 })
    
//                 leftArrow.addEventListener("mousedown", () => {
//                     leftArrow.style.animation = "left-arrow-active 0.2s forwards";
//                 })
    
//                 leftArrow.addEventListener("animationend", () => {
//                     if (leftArrow.style.animation === "0.2s ease 0s 1 normal forwards running left-arrow-active"){
//                         leftArrow.style.animation = "left-arrow-hover 0.3s forwards";
//                 }
//                 })
//             }
    
    
//             // RIGHT ARROW
    
//             if (rightArrow) {
//                 rightArrow.style.animation = "right-arrow-unhover 0.3s forwards";
    
//                 rightArrow.addEventListener("mouseover", () => {
//                     rightArrow.style.animation = "right-arrow-hover 0.3s forwards";
//                 })
    
//                 rightArrow.addEventListener("mouseleave", () => {
//                     rightArrow.style.animation = "right-arrow-unhover 0.3s forwards";
//                 })
    
//                 rightArrow.addEventListener("mousedown", () => {
//                     rightArrow.style.animation = "right-arrow-active 0.2s forwards";
//                 })
    
//                 rightArrow.addEventListener("animationend", () => {
//                     if (rightArrow.style.animation === "0.2s ease 0s 1 normal forwards running right-arrow-active"){
//                         rightArrow.style.animation = "right-arrow-hover 0.3s forwards";
//                 }
//                 })
//             }
    
//             // CHANGE SKILLS PICS 
    
//             if (document.getElementsByClassName("sk-html")[0]){
//             document.getElementsByClassName("sk-html")[0].style.backgroundImage = "url(./resources/images/skill-html-classic-box-07.svg)"
//     }       
//             if (document.getElementsByClassName("sk-css")[0]){
//             document.getElementsByClassName("sk-css")[0].style.backgroundImage = "url(./resources/images/skill-classic-09.svg)"
//     }
//             if (document.getElementsByClassName("sk-js")[0]){
//             document.getElementsByClassName("sk-js")[0].style.backgroundImage = "url(./resources/images/skill-classic-11.svg)"
//     }
//             if (document.getElementsByClassName("sk-node")[0]){
//             document.getElementsByClassName("sk-node")[0].style.backgroundImage = "url(./resources/images/skill-14.svg)"
//     }
//             if (document.getElementsByClassName("sk-git")[0]){
//             document.getElementsByClassName("sk-git")[0].style.backgroundImage = "url(./resources/images/skill-16.svg)"
//     }
//             if (document.getElementsByClassName("sk-github")[0]){
//             document.getElementsByClassName("sk-github")[0].style.backgroundImage = "url(./resources/images/skill-18.svg)"
//     }
//             if (document.getElementsByClassName("sk-chrome")[0]){
//             document.getElementsByClassName("sk-chrome")[0].style.backgroundImage = "url(./resources/images/skill-20.svg)"
//     }
//             if (document.getElementsByClassName("sk-terminal")[0]){
//             document.getElementsByClassName("sk-terminal")[0].style.backgroundImage = "url(./resources/images/skill-22.svg)"
//     }
    
    
//             //  CORNER BOXES
    
    
//             // console.log(window.getComputedStyle(cornerNav[0]).getPropertyValue('--b'))
            
//             for (let i=0; i<cornerNav.length; i++){
//                 cornerNav[i].style.setProperty('--b', 'white');
//                 }
    
//             for (let i=0; i<cornerButton.length; i++){
//                 cornerButton[i].style.setProperty('--b', 'white');
//                 }
    
//             for (let i=0; i<cornerBox.length; i++){
//                 cornerBox[i].style.setProperty('--b', 'white');
//                 }
    
//             for (let i=0; i<cornerBoxProjects.length; i++){
//                 cornerBoxProjects[i].style.setProperty('--b', 'white');
//                 }
    
//             for (let i=0; i<cornerBoxProject.length; i++){
//                 cornerBoxProject[i].style.setProperty('--b', 'white');
//                 }
    
//             for (let i=0; i<cornerBoxMenu.length; i++){
//                 cornerBoxMenu[i].style.setProperty('--b', 'black');
//                 }
    
//             for (let i=0; i < contact.length; i++) {
//                 contact[i].style.backgroundColor = 'white';
//                 // console.log(contact[i])
//             }
           
//             // console.log(window.getComputedStyle(document.getElementsByClassName("corner-nav")[0]).getPropertyValue('--b'))
       
    
//             //  SKILLS PANEL BORDER ANIMATION
            
//             if (document.getElementById("skills-button-main")) {
//                 document.getElementById("skills-button-main").addEventListener("click", () => {
//                     document.getElementById("skills-panel").style.animation = "skills-accent 2s"
//                 })
            
//                 document.getElementById("skills-panel").addEventListener("animationend", () => {
//                     document.getElementById("skills-panel").style.animation = "";
//                 })
//             };
    
    
//             //  ALL ELEMENTS
       
//             for (let i=0; i < allElements.length; i++) {
            
           
                
//                 if (window.getComputedStyle(allElements[i]).backgroundColor === "rgb(255, 255, 255)") {
//                     allElements[i].style.backgroundColor = "black";
//                 };
                
//                 if (window.getComputedStyle(allElements[i]).color === "rgb(0, 0, 0)") {
//                     allElements[i].style.color = "white";
                    
//                 };
    
//                 if (window.getComputedStyle(allElements[i]).border === "1px solid rgb(0, 0, 0)") {
//                     allElements[i].style.border = "1px solid white";
//                 };
    
//                 if (window.getComputedStyle(allElements[i]).border === "2px solid rgb(0, 0, 0)") {
//                     allElements[i].style.border = "2px solid white";
//                 };
    
//                 if (window.getComputedStyle(allElements[i]).borderTop === "2px solid rgb(0, 0, 0)") {
//                     allElements[i].style.borderTop = "2px solid white";
//                 };
    
//                 if (window.getComputedStyle(allElements[i]).borderBottom === "2px solid rgb(0, 0, 0)") {
//                     allElements[i].style.borderBottom = "2px solid white";
//                 };
               
               
                
//             }
//         // }
//     // })
// }
    
    const checkbox = document.getElementById("switch");
    // checkbox.addEventListener('click', () => {
        
    //     let theme = localStorage.getItem("data-theme");
    //     console.log(theme + " THEME")
    //     if (theme === "dark") {
    //         console.log(theme + " THEME2")
    //         switchToLightTheme()
            
    //     } else if (theme === "light") {
    //         console.log(theme + " THEME3")
    //         switchToDarkTheme();
            
    //     }
    // });


// switchButton.addEventListener("click", () => {
//     document.documentElement.setAttribute("data-theme", "light")
// })


const switchToLightTheme = () => {
            document.documentElement.setAttribute("data-theme", "light");
            document.getElementById("switch-title").innerHTML = "light";
            document.querySelector("body").style.backgroundImage = "url(./resources/images/light-theme/background-light.svg)";
            switchButton.style.backgroundImage = "url(./resources/images/light-theme/switch-light-37.svg)"
            document.getElementsByClassName("logo-title")[0].style.backgroundImage = "url(./resources/images/light-theme/logo-title-light.svg)"

        //  MENY BUTTON 

        document.getElementsByClassName("hamburger")[0].style.backgroundImage = "url(./resources/images/light-theme/menu-light.svg)";

         // THEME SWITCH

        switchButton.addEventListener("mouseover", () => {
            // switchButton.style.animation = "switch-change-light 0.3s forwards";
            switchButton.style.cursor = "pointer";
            switchButton.classList.remove('switch-unchange-light')
            switchButton.classList.add("switch-change-light")
        })
        
        switchButton.addEventListener("mouseleave", () => {
            switchButton.style.animation = "switch-unchange-light 0.3s forwards";
            switchButton.classList.remove('switch-change-light')
            switchButton.classList.add("switch-unchange-light")
        })
        switchButton.addEventListener("mousedown", () => {
            switchButton.style.animation = "switch-rotate-light 0.3s forwards";
        })
       
        switchButton.addEventListener("animationend", () => {
            if (switchButton.style.animation === "0.3s ease 0s 1 normal forwards running switch-rotate-light"){
                switchButton.style.animation = "";
            }
        })

        switchButton.style.animation = "switch-unchange-light 0.3s forwards"

        // LEFT RIGHT ARROWS ANIMATION

        // LEFT ARROW


        if (leftArrow) {
            leftArrow.style.animation = "left-arrow-unhover-light 0.3s forwards";

            leftArrow.addEventListener("mouseover", () => {
                leftArrow.style.animation = "left-arrow-hover-light 0.3s forwards";
            })

            leftArrow.addEventListener("mouseleave", () => {
                leftArrow.style.animation = "left-arrow-unhover-light 0.3s forwards";
            })

            leftArrow.addEventListener("mousedown", () => {
                leftArrow.style.animation = "left-arrow-active-light 0.2s forwards";
            })

            leftArrow.addEventListener("animationend", () => {
                if (leftArrow.style.animation === "0.2s ease 0s 1 normal forwards running left-arrow-active-light"){
                    leftArrow.style.animation = "left-arrow-hover-light 0.3s forwards";
            }
            })
        }


        // RIGHT ARROW

        if (rightArrow) {
            rightArrow.style.animation = "right-arrow-unhover-light 0.3s forwards";

            rightArrow.addEventListener("mouseover", () => {
                rightArrow.style.animation = "right-arrow-hover-light 0.3s forwards";
            })

            rightArrow.addEventListener("mouseleave", () => {
                rightArrow.style.animation = "right-arrow-unhover-light 0.3s forwards";
            })

            rightArrow.addEventListener("mousedown", () => {
                rightArrow.style.animation = "right-arrow-active-light 0.2s forwards";
            })

            rightArrow.addEventListener("animationend", () => {
                if (rightArrow.style.animation === "0.2s ease 0s 1 normal forwards running right-arrow-active-light"){
                    rightArrow.style.animation = "right-arrow-hover-light 0.3s forwards";
            }
            })
        }


        switchButton.style.backgroundImage = "url(./resources/images/light-theme/switch-light-37.svg)"
        
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

        // CONTACT PICS 

        if (linkedIn){
            linkedIn.style.backgroundImage = "url(./resources/images/light-theme/linked-in-light.svg)";
            linkedIn.style.animation = "linked-in-light-unhover .2s ease-out forwards";

            linkedIn.addEventListener("mouseover", () => {
                linkedIn.style.animation = "linked-in-light-hover .2s ease-out forwards";
            })

            linkedIn.addEventListener("mouseleave", () => {
                linkedIn.style.animation = "linked-in-light-unhover .2s ease-out forwards";
            })

            linkedIn.addEventListener("mousedown", () => {
                linkedIn.style.transform = "scale(0.95)";
            })

            linkedIn.addEventListener("mouseup", () => {
                linkedIn.style.transform = "scale(1)";
            })
        }

        if (mail){
            mail.style.backgroundImage = "url(./resources/images/light-theme/mail-light.svg)";
            mail.style.animation = "mail-light-unhover .2s ease-out forwards";

            
            mail.addEventListener("mouseover", () => {
                mail.style.animation = "mail-light-hover .2s ease-out forwards";
            })

            mail.addEventListener("mouseleave", () => {
                mail.style.animation = "mail-light-unhover .2s ease-out forwards";
            })

            mail.addEventListener("mousedown", () => {
                mail.style.transform = "scale(0.95)";
            })

            mail.addEventListener("mouseup", () => {
                mail.style.transform = "scale(1)";
            })
        }

        if (gitHubLink) {
            gitHubLink.style.animation = "github-light-unhover .2s ease-out forwards";

            gitHubLink.addEventListener("mouseover", () => {
                gitHubLink.style.animation = "github-light-hover .2s ease-out forwards";
            })

            gitHubLink.addEventListener("mouseleave", () => {
                gitHubLink.style.animation = "github-light-unhover .2s ease-out forwards"
            })

            gitHubLink.addEventListener("mousedown", () => {
                gitHubLink.style.transform = "scale(0.95)";
            })

            gitHubLink.addEventListener("mouseup", () => {
                gitHubLink.style.transform = "scale(1)";
            })
        }
    }

    const switchToDarkTheme = () => {
                document.documentElement.setAttribute("data-theme", "dark")
                document.getElementById("switch-title").innerHTML = "dArk";
                document.querySelector("body").style.backgroundImage = "url(./resources/images/background-12.svg)";
                switchButton.style.backgroundImage = "url(./resources/images/portfolio-triangle-05.svg)"
                document.getElementsByClassName("logo-title")[0].style.backgroundImage = "url(./resources/images/logo-title-23.svg)"


                // MENU BUTTON

                document.getElementsByClassName("hamburger")[0].style.backgroundImage = "url(./resources/images/hamburger-classic-37-37.svg)";

                  // THEME SWITCH
    
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
           
            switchButton.addEventListener("animationend", () => {
                if (switchButton.style.animation === "0.3s ease 0s 1 normal forwards running switch-rotate"){
                    switchButton.style.animation = "";
                }
            })
    
            switchButton.style.backgroundImage = "url(./resources/images/portfolio-triangle-05.svg)"
            

            // LEFT RIGHT ARROWS ANIMATION
    
//             // LEFT ARROW
    
            if (leftArrow) {
                leftArrow.style.animation = "left-arrow-unhover 0.3s forwards";
    
                leftArrow.addEventListener("mouseover", () => {
                    leftArrow.style.animation = "left-arrow-hover 0.3s forwards";
                })
    
                leftArrow.addEventListener("mouseleave", () => {
                    leftArrow.style.animation = "left-arrow-unhover 0.3s forwards";
                })
    
                leftArrow.addEventListener("mousedown", () => {
                    leftArrow.style.animation = "left-arrow-active 0.2s forwards";
                })
    
                leftArrow.addEventListener("animationend", () => {
                    if (leftArrow.style.animation === "0.2s ease 0s 1 normal forwards running left-arrow-active"){
                        leftArrow.style.animation = "left-arrow-hover 0.3s forwards";
                }
                })
            }
    
    
            // RIGHT ARROW
    
            if (rightArrow) {
                rightArrow.style.animation = "right-arrow-unhover 0.3s forwards";
    
                rightArrow.addEventListener("mouseover", () => {
                    rightArrow.style.animation = "right-arrow-hover 0.3s forwards";
                })
    
                rightArrow.addEventListener("mouseleave", () => {
                    rightArrow.style.animation = "right-arrow-unhover 0.3s forwards";
                })
    
                rightArrow.addEventListener("mousedown", () => {
                    rightArrow.style.animation = "right-arrow-active 0.2s forwards";
                })
    
                rightArrow.addEventListener("animationend", () => {
                    if (rightArrow.style.animation === "0.2s ease 0s 1 normal forwards running right-arrow-active"){
                        rightArrow.style.animation = "right-arrow-hover 0.3s forwards";
                }
                })
            }


                // CHANGE SKILLS PICS 
        
                if (document.getElementsByClassName("sk-html")[0]){
                document.getElementsByClassName("sk-html")[0].style.backgroundImage = "url(./resources/images/skill-html-classic-box-07.svg)"
        }       
                if (document.getElementsByClassName("sk-css")[0]){
                document.getElementsByClassName("sk-css")[0].style.backgroundImage = "url(./resources/images/skill-classic-09.svg)"
        }
                if (document.getElementsByClassName("sk-js")[0]){
                document.getElementsByClassName("sk-js")[0].style.backgroundImage = "url(./resources/images/skill-classic-11.svg)"
        }
                if (document.getElementsByClassName("sk-node")[0]){
                document.getElementsByClassName("sk-node")[0].style.backgroundImage = "url(./resources/images/skill-14.svg)"
        }
                if (document.getElementsByClassName("sk-git")[0]){
                document.getElementsByClassName("sk-git")[0].style.backgroundImage = "url(./resources/images/skill-16.svg)"
        }
                if (document.getElementsByClassName("sk-github")[0]){
                document.getElementsByClassName("sk-github")[0].style.backgroundImage = "url(./resources/images/skill-18.svg)"
        }
                if (document.getElementsByClassName("sk-chrome")[0]){
                document.getElementsByClassName("sk-chrome")[0].style.backgroundImage = "url(./resources/images/skill-20.svg)"
        }
                if (document.getElementsByClassName("sk-terminal")[0]){
                document.getElementsByClassName("sk-terminal")[0].style.backgroundImage = "url(./resources/images/skill-22.svg)"
        }

        if (linkedIn){
           
            linkedIn.style.animation = "linked-in-unhover .2s ease-out forwards";

            linkedIn.addEventListener("mouseover", () => {
                linkedIn.style.animation = "linked-in-hover .2s ease-out forwards";
            })

            linkedIn.addEventListener("mouseleave", () => {
                linkedIn.style.animation = "linked-in-unhover .2s ease-out forwards";
            })

            linkedIn.addEventListener("mousedown", () => {
                linkedIn.style.transform = "scale(0.95)";
            })

            linkedIn.addEventListener("mouseup", () => {
                linkedIn.style.transform = "scale(1)";
            })
        }

        if (mail){
            
            mail.style.animation = "mail-unhover .2s ease-out forwards";

            
            mail.addEventListener("mouseover", () => {
                mail.style.animation = "mail-hover .2s ease-out forwards";
            })

            mail.addEventListener("mouseleave", () => {
                mail.style.animation = "mail-unhover .2s ease-out forwards";
            })

            mail.addEventListener("mousedown", () => {
                mail.style.transform = "scale(0.95)";
            })

            mail.addEventListener("mouseup", () => {
                mail.style.transform = "scale(1)";
            })
        }

        if (gitHubLink) {
            gitHubLink.style.animation = "github-unhover .2s ease-out forwards";

            gitHubLink.addEventListener("mouseover", () => {
                gitHubLink.style.animation = "github-hover .2s ease-out forwards";
            })

            gitHubLink.addEventListener("mouseleave", () => {
                gitHubLink.style.animation = "github-unhover .2s ease-out forwards"
            })

            gitHubLink.addEventListener("mousedown", () => {
                gitHubLink.style.transform = "scale(0.95)";
            })

            gitHubLink.addEventListener("mouseup", () => {
                gitHubLink.style.transform = "scale(1)";
            })
        }
    }
    

    const switchToGoldTheme = () => {
        document.documentElement.setAttribute("data-theme", "gold")
        document.getElementById("switch-title").innerHTML = "gold";
        document.querySelector("body").style.backgroundImage = "url(./resources/images/gold-theme/background-gold.svg)";
        switchButton.style.backgroundImage = "url(./resources/images/gold-theme/switch-gold.svg)"
        document.getElementsByClassName("logo-title")[0].style.backgroundImage = "url(./resources/images/gold-theme/logo-title-gold.svg)"


        // MENU BUTTON

        document.getElementsByClassName("hamburger")[0].style.backgroundImage = "url(./resources/images/gold-theme/hamburger-gold.svg)";

          // THEME SWITCH

    switchButton.addEventListener("mouseover", () => {
        switchButton.style.animation = "switch-change-gold 0.3s forwards";
        switchButton.style.cursor = "pointer";
    })
    
    switchButton.addEventListener("mouseleave", () => {
        switchButton.style.animation = "switch-unchange-gold 0.3s forwards";
    })
    switchButton.addEventListener("mousedown", () => {
        switchButton.style.animation = "switch-rotate-gold 0.3s forwards";
    })
   
    switchButton.addEventListener("animationend", () => {
        if (switchButton.style.animation === "0.3s ease 0s 1 normal forwards running switch-rotate"){
            switchButton.style.animation = "";
        }
    })

    switchButton.style.animation = "switch-unchange-gold 0.3s forwards"
    

    // LEFT RIGHT ARROWS ANIMATION

        // LEFT ARROW


        if (leftArrow) {
            leftArrow.style.animation = "left-arrow-unhover-gold 0.3s forwards";

            leftArrow.addEventListener("mouseover", () => {
                leftArrow.style.animation = "left-arrow-hover-gold 0.3s forwards";
            })

            leftArrow.addEventListener("mouseleave", () => {
                leftArrow.style.animation = "left-arrow-unhover-gold 0.3s forwards";
            })

            leftArrow.addEventListener("mousedown", () => {
                leftArrow.style.animation = "left-arrow-active-gold 0.2s forwards";
            })

            leftArrow.addEventListener("animationend", () => {
                if (leftArrow.style.animation === "0.2s ease 0s 1 normal forwards running left-arrow-active-gold"){
                    leftArrow.style.animation = "left-arrow-hover-gold 0.3s forwards";
            }
            })
        }


        // RIGHT ARROW

        if (rightArrow) {
            rightArrow.style.animation = "right-arrow-unhover-gold 0.3s forwards";

            rightArrow.addEventListener("mouseover", () => {
                rightArrow.style.animation = "right-arrow-hover-gold 0.3s forwards";
            })

            rightArrow.addEventListener("mouseleave", () => {
                rightArrow.style.animation = "right-arrow-unhover-gold 0.3s forwards";
            })

            rightArrow.addEventListener("mousedown", () => {
                rightArrow.style.animation = "right-arrow-active-gold 0.2s forwards";
            })

            rightArrow.addEventListener("animationend", () => {
                if (rightArrow.style.animation === "0.2s ease 0s 1 normal forwards running right-arrow-active-gold"){
                    rightArrow.style.animation = "right-arrow-hover-gold 0.3s forwards";
            }
            })
        }

        
            // CHANGE SKILLS PICS 
    
            if (document.getElementsByClassName("sk-html")[0]){
            document.getElementsByClassName("sk-html")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-html5-gold.svg)"
         }       
            if (document.getElementsByClassName("sk-css")[0]){
            document.getElementsByClassName("sk-css")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-css3-gold.svg)"
          }
            if (document.getElementsByClassName("sk-js")[0]){
            document.getElementsByClassName("sk-js")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-js-gold.svg)"
         }
            if (document.getElementsByClassName("sk-node")[0]){
            document.getElementsByClassName("sk-node")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-node-gold.svg)"
         }
            if (document.getElementsByClassName("sk-git")[0]){
            document.getElementsByClassName("sk-git")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-git-gold.svg)"
         }
            if (document.getElementsByClassName("sk-github")[0]){
            document.getElementsByClassName("sk-github")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-github-gold.svg)"
         }
            if (document.getElementsByClassName("sk-chrome")[0]){
            document.getElementsByClassName("sk-chrome")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-chrome-gold.svg)"
         }
            if (document.getElementsByClassName("sk-terminal")[0]){
            document.getElementsByClassName("sk-terminal")[0].style.backgroundImage = "url(./resources/images/gold-theme/sk-terminal-gold.svg)"
        }

        // CONTACT PICS 

        if (linkedIn){
            linkedIn.style.backgroundImage = "url(./resources/images/gold-theme/linked-in-gold.svg)";
            linkedIn.style.animation = "linked-in-gold-unhover .2s ease-out forwards";

            linkedIn.addEventListener("mouseover", () => {
                linkedIn.style.animation = "linked-in-gold-hover .2s ease-out forwards";
            })

            linkedIn.addEventListener("mouseleave", () => {
                linkedIn.style.animation = "linked-in-gold-unhover .2s ease-out forwards";
            })

            linkedIn.addEventListener("mousedown", () => {
                linkedIn.style.transform = "scale(0.95)";
            })

            linkedIn.addEventListener("mouseup", () => {
                linkedIn.style.transform = "scale(1)";
            })
        }

        if (mail){
            mail.style.backgroundImage = "url(./resources/images/gold-theme/mail-gold.svg)";
            mail.style.animation = "mail-gold-unhover .2s ease-out forwards";

            
            mail.addEventListener("mouseover", () => {
                mail.style.animation = "mail-gold-hover .2s ease-out forwards";
            })

            mail.addEventListener("mouseleave", () => {
                mail.style.animation = "mail-gold-unhover .2s ease-out forwards";
            })

            mail.addEventListener("mousedown", () => {
                mail.style.transform = "scale(0.95)";
            })

            mail.addEventListener("mouseup", () => {
                mail.style.transform = "scale(1)";
            })
        }

        if (gitHubLink) {
            gitHubLink.style.animation = "github-gold-unhover .2s ease-out forwards";

            gitHubLink.addEventListener("mouseover", () => {
                gitHubLink.style.animation = "github-gold-hover .2s ease-out forwards";
            })

            gitHubLink.addEventListener("mouseleave", () => {
                gitHubLink.style.animation = "github-gold-unhover .2s ease-out forwards"
            })

            gitHubLink.addEventListener("mousedown", () => {
                gitHubLink.style.transform = "scale(0.95)";
            })

            gitHubLink.addEventListener("mouseup", () => {
                gitHubLink.style.transform = "scale(1)";
            })
        }
    }

// LOCAL STORAGE


    checkbox.addEventListener('click', () => {
        
        if (theme === "dark") {
            localStorage.setItem("data-theme", "light")
            theme = "light";
            switchToLightTheme();
            
        } else if (theme === "light") {
            localStorage.setItem("data-theme" ,"gold")
            switchToGoldTheme();
            theme = "gold";
        }
        else if (theme === "gold") {
            localStorage.setItem("data-theme" ,"dark")
            switchToDarkTheme();
            theme = "dark";
    }})

    
        if (theme === "dark"){
        switchToDarkTheme();
     } else if (theme === "light"){
        switchToLightTheme();
    }   else if (theme === "gold"){
    switchToGoldTheme();
} 


// window.onload = () => {}

// click => go to => onpageload playanimation

// if(document.getElementById("skills-button-projects")){
//     document.getElementById("skills-button-projects").addEventListener("click", () => {
//     // window.location.href = "./index.html";
//     window.open("./index.html", "_self");
//     window.onload = () => {
//         document.getElementById("skills-panel").style.animation = "skills-accent 2s"
//     }
// })
// }

// // if (window.history.previous.href === "./index.html") {
// //     console.log("dawdaw")
// // }


// console.log(history.back())




    // if (theme === "dark") {
    //     switchToDarkTheme();
    // } else if (theme === "light") {
    //     switchToLightTheme();
    // }
// switchToLightTheme();
// switchToDarkTheme();
// console.log(window.getComputedStyle(document.getElementsByClassName("corner-nav")[0]).getPropertyValue('--b'))
// document.getElementsByClassName("corner-nav")[0].style.setProperty('--b', 'black');
// console.log(window.getComputedStyle(document.getElementsByClassName("corner-nav")[0]).getPropertyValue('--b'))
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
