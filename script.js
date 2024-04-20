const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('nav',{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    }),
    tl.to('.boudingElem',{
        y: '0',
        opacity: 1,
        duration: 1.2,
        ease: Expo.easeInOut,
        stagger: 0.2
    })
    tl.from('#homeFooter',{
        // y: '10',
        opacity: 0,
        duration: 1,
        // delay: -1,
        ease: Expo.easeInOut,
        // stagger: 0.2
    })
}



document.querySelectorAll(".elem")
.forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            // height: 120%,
            ease: Power1,
            top: dets.clientY,
            left: dets.clientX
        })
    })
})










var crsr = document.querySelector("#circle")
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        crsr.style.left = dets.x+"px"
        crsr.style.top = dets.y+"px"
    })
}
circleMouseFollower();
firstPageAnim();