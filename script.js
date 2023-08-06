var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY)
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
})

document.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY)
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger : "#nav", // Lagana kispe hai - #nav
        scroller:"body", // Scrooll kar kon rahi hai - body
        start: "top -10%", // #nav se directly start nahi hoga balki uske 10% neeche aane ke baad
        scrub: 0.5 // Wapas aake kitni smoothly back to default honi hai
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start:"top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        scrub:3,
        start: "top 60%",
        end: "top 55%"
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4
    }
})
