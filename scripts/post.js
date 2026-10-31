// post.js - edit, like and comment behaviour for the single post page

var postTitle = document.getElementById('post-title');
var postText = document.getElementById('post-text');
var editButton = document.getElementById('edit-button');
var likeButton = document.getElementById('like-button');
var likeMessage = document.getElementById('like-message');
var commentInput = document.getElementById('comment-input');
var commentButton = document.getElementById('comment-button');
var commentsList = document.getElementById('comments-list');

var isEditing = false;
var likeCount = 0;

/* ---------- Edit / Save ---------- */

/**
 * Switches the title and text in or out of edit mode and swaps the
 * Edit/Save button to match.
 * @param {boolean} enable - true to start editing, false to save.
 */
function setEditMode(enable) {
  isEditing = enable;
  postTitle.contentEditable = enable;
  postText.contentEditable = enable;
  postTitle.classList.toggle('editable', enable);
  postText.classList.toggle('editable', enable);

  if (enable) {
    editButton.innerHTML = 'Save <i class="fa fa-save"></i>';
    postTitle.focus();
  } else {
    editButton.innerHTML = 'Edit <i class="fa fa-edit"></i>';
  }
}

// Clicking while editing = Save. The edited text simply stays in the page.
editButton.addEventListener('click', function () {
  setEditMode(!isEditing);
});

/* ---------- Like ---------- */

likeButton.addEventListener('click', function () {
  likeCount++;
  likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i>&nbsp;Liked!';
  likeMessage.textContent = likeCount === 1
    ? '1 person likes this!'
    : likeCount + ' people like this!';
});

/* ---------- Comments ---------- */

/** Adds the typed comment to the TOP of the "All Comments" list. */
function addComment() {
  var text = commentInput.value.trim();
  if (text === '') {
    return; // ignore empty comments
  }
  var comment = document.createElement('div');
  comment.className = 'comment-item';
  comment.textContent = text; // textContent avoids injecting HTML
  commentsList.insertBefore(comment, commentsList.firstChild);
  commentInput.value = '';
}

commentButton.addEventListener('click', addComment);

// Pressing Enter in the box also posts the comment.
commentInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addComment();
  }
});