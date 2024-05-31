gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60,

})

gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60,

})
gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60,

})
gsap.from("#main h1",{
    delay:0.4,
    opacity:0,
    duration:1,
    

})

gsap.to("#page2 h5",{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        // markers:"true"
        start:"top 70%",
    }
})
