const headerOffset = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const offset = document.querySelector('.header-offset');
    const menuDrawer = document.querySelector('.header__menu-drawer');
    const l_sm = window.matchMedia('(min-width:1281px)');

    const handleResize = () => {
      menuDrawer.style.top = `${header.offsetHeight}px`;
      if (!l_sm.matches) {
        offset.style.height = `${header.offsetHeight}px`;
      } else {
        offset.style.height = `0px`;
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();
  });
};

export default headerOffset;
