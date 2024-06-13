let icon = document.querySelector("#icon");

icon.onclick = ()=>{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "/Image/dark theme icon/sun.png";
  }else{
    icon.src = "/Image/dark theme icon/moon.png";
  }
}

// Animation
// gsap.from(".header>a",{
//   opacity : 0,
//   y : -25,
//   duration : 1,
//   delay : 0.3
// });

var tl = gsap.timeline();

tl.from(".social-media a",{
  opacity : 0,
  y : 30,
  duration : 1,
  delay : 0.3,
  stagger : 0.2
});

gsap.from(".tech-stack img",{
  opacity : 0,
  y : -25,
  duration : 1,
  delay : 0.3
});
