
var cur = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
    blur.style.left = dets.x  - 250 + "px"
    blur.style.top = dets.y - 250 + "px"


})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale = 3
        cur.style.border = "0.25px solid #fff"
        cur.style.backgroundColor = "tranparent"
    })

     elem.addEventListener("mouseleave",function(){
        cur.style.scale = 1
        cur.style.border = "0px solid #95c11e"
        cur.style.backgroundColor = "tranparent"
    })

})




gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
   
    

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
   y:90,
   opacity:0,
   duration:1,
   scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
   // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:3,
   }

});

gsap.from(".card",{
   scale:0.8,
   opacity:0,
   duration:1,
   scrollTrigger:{
    trigger:".card",
    scroller:"body",
   // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:2
   }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
      //  markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 75%",
        scrub:3,

    }
})