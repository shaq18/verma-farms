const mobileMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burgerButton = document.querySelector('.burger-button');
    const menuDrawer = document.querySelector('.header__menu-drawer');
    const body = document.querySelector('body');

    const handleClick = () => {
      burgerButton.classList.toggle('active');
      menuDrawer.classList.toggle('active');
      header.classList.toggle('active');
      body.classList.toggle('overflow-y-hidden');
    };

    burgerButton.addEventListener('click', handleClick);
  });
};

export default mobileMenu;
