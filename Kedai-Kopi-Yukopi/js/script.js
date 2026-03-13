// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu di click
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghilangkan sidebar
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// 3D tilt effect untuk gambar tentang kami
const aboutImgs = document.querySelectorAll(".about-img img");

aboutImgs.forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -18;
    const rotateY = ((x - centerX) / centerX) * 18;

    img.style.transition = "transform 0.1s ease-out";
    img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transition = "transform 0.6s ease";
    img.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});
