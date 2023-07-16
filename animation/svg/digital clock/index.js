setInterval(() => {
  // time indicator elements
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  // digits time indicator
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  // dot time indicator
  let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  let dotS = document.querySelector('.s_dot');

  // current time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // 0 before single digit
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  // time and label
  hours.innerHTML = h + '<br /><span>Hours</span>';
  minutes.innerHTML = m + '<br /><span>Minutes</span>';
  seconds.innerHTML = s + '<br /><span>Seconds</span>';

  // time circular indicator
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
}, 1000);