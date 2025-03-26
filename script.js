function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Modal Window Functions
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('modal');
  var closeBtn = document.getElementsByClassName('close')[0];
  var cancelBtn = document.getElementById('cancel-btn');
  var confirmBtn = document.getElementById('confirm-btn');

  // Function to open modal (you can call this where needed)
  window.openModal = function() {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
  }


  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  // Event listeners
  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;
  
  if (confirmBtn) {
    confirmBtn.onclick = function() {
      alert('Action confirmed!');
      closeModal();
    }
  }

  // Close when clicking outside modal
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }
});
