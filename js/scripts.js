console.log("Hi, it's nice to see you on my portfolio site!")

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle' && window.screen.width > 640) {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
