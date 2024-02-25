function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // You can add additional validation here, e.g., email format validation

    // If all validation passes, you can proceed with form submission
    // For now, let's just log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Optionally, you can submit the form to a server using AJAX
    // Example using Fetch API:
    // fetch('submit.php', {
    //     method: 'POST',
    //     body: new FormData(document.getElementById('contact-form'))
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.text();
    // })
    // .then(data => {
    //     console.log('Form submission successful:', data);
    // })
    // .catch(error => {
    //     console.error('There was a problem with the form submission:', error);
    // });
}


document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('lightbox');
    let images = document.querySelectorAll('.gallery img');
    let modalImg = document.querySelector('.lightbox-content');
    let captionText = document.getElementById('caption');
    let currentIndex;
  
    // Open the modal
    images.forEach((img, index) => {
      img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index;
      }
    });
  
    // Close the modal when clicking on the close button
    let closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    // Close the modal when clicking outside of the image
    modal.addEventListener('click', function(event) {
      if (event.target === modal || event.target === modalImg) {
        modal.style.display = "none";
      }
    });
  
    // Navigate through images
    function navigateGallery(step) {
      currentIndex += step;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      modalImg.src = images[currentIndex].src;
      captionText.innerHTML = images[currentIndex].alt;
    }
  
    document.querySelector('.prev').addEventListener('click', () => navigateGallery(-1));
    document.querySelector('.next').addEventListener('click', () => navigateGallery(1));
  
    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
      if (modal.style.display === "block") {
        if (event.key === 'ArrowLeft') {
          navigateGallery(-1);
        } else if (event.key === 'ArrowRight') {
          navigateGallery(1);
        } else if (event.key === 'Escape') {
          modal.style.display = "none";
        }
      }
    });
  });
  