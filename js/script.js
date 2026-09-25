window.addEventListener("load", () => {
  if (typeof gsap !== "undefined") {
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )

    
    .fromTo(
      ".sub-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    )

    
    .fromTo(
      ".animate-title",
      { x: -50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.7 },
      "-=0.3"
    )

   
    .fromTo(
      ".card",
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
      "-=0.3"
    );

  }
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".moving-images-track");
    const images = document.querySelectorAll(".moving-images-track img");

    images.forEach(img => {
        img.addEventListener("mousemove", (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            
            const rotateX = (-y / rect.height) * 20; 
            const rotateY = (x / rect.width) * 20;

            img.style.transform = `scale(1.15) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        });
    });

   
    let speedTimeout;
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            track.style.animationDuration = "6s";
        } else {
            track.style.animationDuration = "25s"; 
        }

        clearTimeout(speedTimeout);
        speedTimeout = setTimeout(() => {
           
            const isMobile = window.innerWidth <= 768;
            track.style.animationDuration = isMobile ? "10s" : "15s";
        }, 400);
    });
});