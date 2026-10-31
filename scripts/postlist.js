// postslist.js - delete-post behaviour for the posts list page

var postsContainer = document.getElementById('posts-container');
var postToDelete = null; // the card the user is currently asked about

// Event delegation: one listener handles the trash icon of every card,
// so it keeps working after other cards have been deleted.
postsContainer.addEventListener('click', function (event) {
  var trashIcon = event.target.closest('.trash-icon');
  if (trashIcon) {
    postToDelete = trashIcon.closest('.post-card');
    openModal('delete-modal');
  }
});

// "Yes": remove the card; flexbox re-arranges the remaining cards.
document.getElementById('delete-yes').addEventListener('click', function () {
  if (postToDelete) {
    postToDelete.remove();
    postToDelete = null;
  }
  closeModal('delete-modal');
});

// "No": just close the modal, the page stays as it is (no refresh).
document.getElementById('delete-no').addEventListener('click', function () {
  postToDelete = null;
  closeModal('delete-modal');
});