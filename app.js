 const slider = document.querySelector('.container')
  let isDown = false;
  let startx;
  let scrollToLeft;

  slider.addEventListener('mousedown',function(e) {
    isDown = true;
    slider.classList.add("active")
    startx = e.pageX - slider.offsetLeft;

    scrollToLeft = slider.scrollLeft

  })

  slider.addEventListener('mouseup',function() {
    isDown = false
    slider.classList.remove('active')
  })


  slider.addEventListener('mouseleave',function() {
    isDown = false
    slider.classList.remove("active")
  })


  slider.addEventListener('mousemove',function(e) {
    if(!isDown) return
    e.preventDefault();
    const distanceX = e.pageX - slider.offsetLeft;
    const walk = distanceX-startx;
    slider.scrollLeft = scrollToLeft -walk;


  })