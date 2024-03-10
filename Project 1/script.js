var rect= document.querySelector(".rect");
rect.addEventListener("mousemove",function(details){
    var rectanglelocation= rect.getBoundingClientRect();
    var insiderectval= (details.ClienX - rectanglelocation.left);

    if(insiderectval<rectanglelocation.width/2){
        var redColor= gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
    }
    else{
        var blueColor= gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white",
    })
})


// <----------->



var rect = document.querySelector(".rect");
rect.addEventListener("mousemove",function(details){
    var rectPos=rect.getBoundingClientRect();
    var distance=details.clientX-rectPos.left //<=current position
    if(distance<rectPos.width/2){
        var redColor = gsap.utils.mapRange(0,rectPos.width/2,255,0,distance);
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease: Power4,
        })
    }
    else{
        var blueColor = gsap.utils.mapRange(rectPos.width/2,rectPos.width,0,255,distance);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"transparent",
        ease: Power4,
    })
})
