const lottieWave = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const heroWave = document.querySelector('.hero__wave');
    const benefitsWave = document.querySelector('.benefits__wave');
    const aboutWave = document.querySelector('.about__wave');

    lottie.loadAnimation({
      container: heroWave,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/lottie/waves.json',
    });

    lottie.loadAnimation({
      container: benefitsWave,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/lottie/waves.json',
    });

    lottie.loadAnimation({
      container: aboutWave,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/lottie/waves.json',
    });
  });
};

export default lottieWave;
