//Navbar

// window.addEventListener('scroll',function(){
//     let navbar = document.getElementById('navbar');
//     navbar.classList.toggle('fixed',this.window.scrollY > 0);
// })

// Navbar

const navMenu = document.getElementById("nav_menu"),
    navToggle = document.getElementById("nav_toggle"),
    navClose = document.getElementById("nav_close")

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show_menu');
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show_menu');
    })
}

//Close Mobile Menu

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById("nav_menu");
    navMenu.classList.remove('show_menu');
}

navLink.forEach(element => {
    element.addEventListener("click", linkAction);
});

//Scroll Section Active Link

const sections = document.querySelectorAll('section[id]');

function ScrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionheight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop &&  scrollY <= sectionTop + sectionheight ){
            document.querySelector('.nav_menu a[href*= ' + sectionId + ']').classList.add('active_link');
        }
        else{
            document.querySelector('.nav_menu a[href*= ' + sectionId + ']').classList.remove('active_link');
        }
    });
}

window.addEventListener("scroll", ScrollActive);

//Add Box Shadow to header on scroll

function ScrollHeader(){

    const nav = document.getElementById('header');
    if(this.scrollY > 80){
        nav.classList.add('scroll_header');
    }
    else{
        nav.classList.remove('scroll_header');
    }
}


window.addEventListener("scroll", ScrollHeader);


//Scroll to Top

function ScrollToTop(){
    const ScrollToTop = document.getElementById("scrollToTop");

    if(this.scrollY > 600){
        ScrollToTop.classList.add('show_scroll');
    }
    else{
        ScrollToTop.classList.remove('show_scroll');
    }
}

window.addEventListener("scroll", ScrollToTop);



//Mix It Up Filter (Projects Section)


let mixerProjects = mixitup('.project_list', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

// Active Filter

const filter_titles = document.querySelectorAll('.filter_title');


filter_titles.forEach(filter => {
    filter.addEventListener('click',active_filter)
});


function active_filter(){
    filter_titles.forEach(filter => {
        filter.classList.remove('active_filter');
        this.classList.add('active_filter');
    });
}




// Email JS


function SendMail(event){
    event.preventDefault();
    var params = {
        from_name : document.getElementById('user_name').value,
        email_id : document.getElementById('user_email').value,
        message : document.getElementById('message').value
    }

    /*emailjs.send("Service ID","Template ID",params)*/

    emailjs.send("service_knc198e","template_cm1du3d",params).then(function(res){
        if(res.status == '200'){
            alert("Success !" + (res.status));
        }
        else{
            alert("Failed !" + (res.status));
        }
        
    })
}




// Initialize Swiper
    
      var swiper = new Swiper(".swiper_container", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });



























const block = document.querySelectorAll('.block');
window.addEventListener('click', function(){
  block.forEach(item => {
    let numElement = item.querySelector('.num');
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector('.circle');
    setInterval(() => {
      if(count == num){
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time)
    circle.style.strokeDashoffset 
      = 503 - ( 503 * ( num / 100 ));
    let dots = item.querySelector('.dots');
    dots.style.transform = 
      `rotate(${360 * (num / 100)}deg)`;
    if(num == 100){
      dots.style.opacity = 0;
    }
  })
});