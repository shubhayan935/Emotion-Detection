document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const modeLabel = document.getElementById('modeLabel');
  const slider = document.querySelector('#slider');
  const body = document.body;

  modeToggle.addEventListener('change', function () {
      if (modeToggle.checked) {
          // Dark mode
          body.classList.add('dark-mode');
          modeLabel.innerText = 'Dark Mode';
          body.style.color = 'white';
          body.style.backgroundColor = 'black';
          slider.style.background = '🌙';

      } else {
          // Light mode
          body.classList.remove('dark-mode');
          modeLabel.innerText = 'Light Mode';
          body.style.color = 'black';
          body.style.backgroundColor = 'white';
          slider.style.background = '☀️';
      }
  });
});


const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing camera:', error);
    });

video.addEventListener('play', () => {
    const emotionDetectionInterval = setInterval(() => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        // Send imageData to the back-end for emotion detection
        // Update canvas with emotion results
    }, 10); // Adjust the interval based on your needs
});
