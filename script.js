const doNavBar= () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
    });
    //close navbar-active when clicked an link
    navbar.addEventListener('click', () => {
        navbar.classList.remove('navbar-active');
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 610){
            navbar.classList.remove('navbar-active');
        }   
    });
};
doNavBar();
