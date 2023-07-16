document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let star = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  star.style.left = x + 'px';
  star.style.top = y + 'px';

  // let size = Math.random() * 80;
  // star.style.widht = 20 + size + 'px';
  // star.style.height = 20 + size + 'px';

  let transformValue = Math.random() * 360;
  star.style.transform = 'rotate('+ transformValue + 'deg)';

  body.appendChild(star);

  setTimeout(function() {
    star.remove();
  }, 1000)
})