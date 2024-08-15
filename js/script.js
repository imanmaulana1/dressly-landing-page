document.addEventListener('DOMContentLoaded', function () {
  const popoverTrigger = document.querySelector('[data-bs-toggle="popover"]');

  if (popoverTrigger) {
    new bootstrap.Popover(popoverTrigger, {
      html: true,
      content: `<div class='d-flex gap-2 align-items-center custom-popover'>
                  <img src='./assets/images/profile.jpg' alt='Profile' class='img-fluid'> 
                  <p class='mb-0'>Welcome, Alice!</p>
                </div>`,
      trigger: 'click',
    });
  }
});
