let icon = document.querySelector(".theme-checkbox");

icon.onclick = ()=>{
  document.body.classList.toggle("dark-theme");
}

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