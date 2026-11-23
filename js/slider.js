document.querySelectorAll('[data-slider]').forEach(function (slider) {
  var slides = slider.querySelectorAll('.slide');
  var current = 0;
  function show(n) {
    var old = slides[current].querySelector('video');
    if (old) old.pause();
    slides[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
  }
  slider.querySelector('.prev').addEventListener('click', function () { show(current - 1); });
  slider.querySelector('.next').addEventListener('click', function () { show(current + 1); });
  slider.setAttribute('tabindex', '0');
  slider.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
});
