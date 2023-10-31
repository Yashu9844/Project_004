const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//gsap Animatiation
gsap.from(".nlink", {
    stagger: 0.1,
    y: 20,
    duration: 1,
    ease: Power3.easeInOut, // Correct the typo here
    opacity: 0,
});

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y:10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  
  gsap.from("#anim2",{
    y:100,
    stagger: .3,
    opacity:0,
    ease: Expo ,
    duration: 2
  }
  );

  Shery.imageEffect(".imgtext img",{
    style:3,
    config:{"uFrequencyX":{"value":9.92,"range":[0,100]},"uFrequencyY":{"value":4.13,"range":[0,100]},"uFrequencyZ":{"value":46.28,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.18},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75001089485374},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
   

  })

Shery.imageEffect("#susimg img",{
    style:5,
    config:{"a":{"value":1.74,"range":[0,30]},"b":{"value":-0.69,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7777777777777778},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})
Shery.imageEffect("#imgeff img",{
    style:5,
    config:{"a":{"value":1.98,"range":[0,30]},"b":{"value":-0.72,"range":[-1,1]},"zindex":{"value":"-999999","range":[-9999999,9999999]},"aspect":{"value":0.653830471932281},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})



gsap.from(".imgtext img",{
    z:"8",
    opacity:0,
    duration:2,
    ease:Expo,
})    
Shery.imageEffect(".bimg ",{
    style:5,
    config:{"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.9,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0377474889461755},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":2.07,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2]},"discard_threshold":{"value":0.61,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
})
document.querySelector(".ftext button")
.addEventListener("mouseover",function(){
  gsap.to(".future video",{
    opacity:1,
    duration:1.5,
    ease: Power4
  })

})
document.querySelector(".ftext button")
.addEventListener("mouseleave",function(){
    gsap.to(".future video",{
        opacity:0,
        duration:0.85,
        ease: Power4
      })
    
  

})

