window.addEventListener('load', function() {
    const loadingProgress = document.getElementById('loading-progress');
    let width = 0;
    const interval = setInterval(function() {
      if (width >= 100) {
        clearInterval(interval);
        document.querySelector('.loading-overlay').style.display = 'none';
        document.querySelector('.page-container').style.display = 'block';
      } else {
        width += 1;
        loadingProgress.style.width = width + '%';
      }
    }, 20); // Adjust the interval timing as needed
  });
  function showMessage(workName) {
      alert("You clicked on " + workName + ".");
    }