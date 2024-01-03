/* Animate text going from left to right */   

const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
        else {
            entry.target.classList.remove('scroll-animation')
        }
    })
},
{threshold: 0.5

});

for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
 
     observer.observe(elements);
   } 

/* Animate text going from right to left */   

const the_animationleft = document.querySelectorAll('.animationleft')

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
        else {
            entry.target.classList.remove('scroll-animation')
        }
    })
},
{threshold: 0.5

});

for (let i = 0; i < the_animationleft.length; i++) {
    const elements = the_animationleft[i];
 
     observer2.observe(elements);
   } 