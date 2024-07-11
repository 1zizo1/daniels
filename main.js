document.addEventListener('scroll',()=>{
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 560){
        nav.classList.add('scrolled')

    }else {
        nav.classList.remove('scrolled')
    }
});



  
new PureCounter();

/**
 * Animation on scroll function and init
 */
function aos_init() {
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});

window.addEventListener("load", function() {
    // Preloader
    var loading = document.querySelector(".loading");
    loading.classList.add("loading-end");
    setTimeout(function() {
        loading.style.display = "none";
      }, 1000);
  });