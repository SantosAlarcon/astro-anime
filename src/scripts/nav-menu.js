const mobileBtn = document.querySelector(".mobile-nav-menu");
mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("active");
    document.querySelector("body").classList.toggle("no-scroll");
});
