function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// gsap.from(".logo",{
//   y:-30,
//   opacity:0,
//   duration:2,
//   delay:1,
//   rotate:180,
//   backgroundColor: "white",
//   // borderRadius:"100px"
// });
// gsap.from("#img1",{
//   y:1000,
//   opacity:0,
//   duration:2,
//   delay:1,
//   rotate:180,
//   backgroundColor: "white",
//   // borderRadius:"100px"
// });
var a=gsap.timeline()
a.from(".logo",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.5

})
a.from("#jio",{
  y:-20,
  opacity:0,
  duration:1,
  stagger:0.3

})
a.from(".section__text__p1",{
  // x:1000,
  opacity:0,
  duration:1,
  stagger:0.3
})
a.from(".section__text__p2",{
  // x:1000,
  opacity:0,
  duration:1,
  y:30,
  stagger:0.1
})

var a= document.querySelector(".cursor");
var b= document.querySelector(".cursor2");

document.addEventListener("mousemove",(e)=>{
  a.style.cssText = b.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})

