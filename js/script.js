const menu=document.querySelector("#menu");
const lists=document.querySelector("#lists");
let sections=document.querySelectorAll('section')
let nav_link=document.querySelectorAll('.nav_link')
sections=Array.from(sections)
nav_link=Array.from(nav_link)

nav_link.forEach(item=>{
    item.addEventListener('click',()=>{
        menu.innerHTML="menu"
lists.classList.add('hidden')
    })
})
menu.addEventListener('click',()=>{
    if(menu.innerHTML.includes('menu')){
        menu.innerHTML="close"
        lists.classList.remove('hidden')
    }
    else{
        menu.innerHTML="menu"
        lists.classList.add('hidden')
    }
})
 // Show loader function
 function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Hide loader function
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Simulate content loading
document.addEventListener("DOMContentLoaded", function() {
    showLoader();
    // Simulating content loading with a timeout
    setTimeout(function() {
        hideLoader();
        // Now you can display your content
    }, 3000); // 3 seconds delay for demonstration
});


let current='home'
nav_link.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        nav_link.forEach((el)=>{
            el.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})
let activelink=()=>{
    sections.forEach(section=>{
        let sectionTop=section.offsetTop;
        if(this.scrollY>=sectionTop-60){
            current=section.getAttribute('id')
        }
    })
    nav_link.forEach(item=>{
        item.classList.remove('active')
        if(item.href.includes(current)){
            item.classList.add('active')
        }
    })
}
window.addEventListener('scroll',activelink)

