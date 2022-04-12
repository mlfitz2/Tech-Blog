const addPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post').value.trim();
    const errorMessage = document.querySelector('.error');

    if(content.length < 2 || title.length < 2) {
        errorMessage.style.display = "block";
        return;
    };

    const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Post could not be added, please try again');
      }
    }

document.querySelector('#new-post-form').addEventListener('submit', addPost);

  
//update posts that have already been posted
const updatePost = async (event) => {
    event.preventDefault();

    const postId = event.target.dataset.id;
    const content = document.getElementById(postId).textContent;
   
    const response = await fetch(`/api/dashboard/${postId}`, {
         method: 'PUT',
         body: JSON.stringify({ content }),
         headers: { 'Content-Type': 'application/json' }
       });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Post could not be updated, please try again');
      }
    }

document.querySelectorAll('.post-update').forEach(function(btn) {
    btn.addEventListener('click', updatePost)
});


//users delete posts
const deletePost = async (event) => {
    event.preventDefault();

    const postId = event.target.dataset.id
        
    const response = await fetch(`/api/dashboard/${postId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Post could not be deleted, please try again');
      }
    }

document.querySelectorAll('.post-delete').forEach(function(btn) {
    btn.addEventListener('click', deletePost)
    });