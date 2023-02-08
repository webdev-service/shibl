document.addEventListener('DOMContentLoaded', () => {

  // Set up FlipDown
  var flipdown = new FlipDown(1672819200 + 1, {
    theme: "light",
  })

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });



  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
