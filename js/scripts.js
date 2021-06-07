console.log("Hi! It's nice to see you on my portfolio webside")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle' && screen.width > 640) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }

}
