function mousemoveAnimation (selector, scatter = 20, inversion = '-') {
    let item = document.querySelector(selector);
    
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        item.style.transform = 'translate(' + inversion + x * scatter + 'px,' + inversion + y * scatter + 'px)';
    });
}

mousemoveAnimation('.man')
mousemoveAnimation('.ball', 20, '+')

mousemoveAnimation('.rg-tp-palm', 5, '-')
mousemoveAnimation('.lf-tp-palm', 15, '+')
mousemoveAnimation('.lf-bt-palm', 6, '-')
mousemoveAnimation('.rg-bt-palm', 10, '+')

mousemoveAnimation('.dotted', 25, '+')



 