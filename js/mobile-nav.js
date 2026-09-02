const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
    const closeMenu = () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "Menu";
    };

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "Close" : "Menu";
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) closeMenu();
    });
}
