const mobileBtn = document.querySelector(".mobile-nav-menu");
console.log(mobileBtn);
mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("active");
    document.querySelector("body").classList.toggle("no-scroll");
});
