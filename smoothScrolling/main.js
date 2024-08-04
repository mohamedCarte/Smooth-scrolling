document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  // const backToTopButton = document.querySelector('.back-to-top-btn');


  function toggleHeaderTransparency(){
    if(window.scrollY > 0){
       header.classList.add('transparent')
      //  backToTopButton.style.display = 'flex';

    } else{
      header.classList.remove('transparent')
      // backToTopButton.style.display = 'none';
    }
  }

  window.addEventListener('scroll', toggleHeaderTransparency)
});