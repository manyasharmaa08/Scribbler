// common.js - behaviour shared by every page (header modals)

/**
 * Shows the modal with the given id.
 * @param {string} modalId - id of the modal element.
 */
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('is-open');
  }
}

/**
 * Hides the modal with the given id.
 * @param {string} modalId - id of the modal element.
 */
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('is-open');
  }
}

/** Hides every modal that is currently open. */
function closeAllModals() {
  document.querySelectorAll('.modal.is-open').forEach(function (modal) {
    modal.classList.remove('is-open');
  });
}

// Any element with data-open-modal="id" opens that modal when clicked.
document.querySelectorAll('[data-open-modal]').forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    openModal(trigger.getAttribute('data-open-modal'));
  });
});

// Any element with data-close-modal="id" (the "x" icons) closes that modal.
document.querySelectorAll('[data-close-modal]').forEach(function (closer) {
  closer.addEventListener('click', function () {
    closeModal(closer.getAttribute('data-close-modal'));
  });
});

// Clicking on the dark backdrop (outside the white box) closes the modal.
document.querySelectorAll('.modal').forEach(function (modal) {
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('is-open');
    }
  });
});

// Pressing Escape closes any open modal.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAllModals();
  }
});

// "Not a member? Sign Up" link: hide sign-in modal, show sign-up modal.
document.getElementById('switch-to-sign-up').addEventListener('click', function (event) {
  event.preventDefault();
  closeModal('sign-in-modal');
  openModal('sign-up-modal');
});

// The forms have no action yet. The browser's own "Please fill out this
// field." validation runs first; once valid we just stop the page reloading.
['sign-up-form', 'sign-in-form'].forEach(function (formId) {
  document.getElementById(formId).addEventListener('submit', function (event) {
    event.preventDefault();
  });
});