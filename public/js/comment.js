const comment = async (event) => {
    event.preventDefault();

    const postId = document.getElementById('post-title').dataset.id;
    const newComment = document.querySelector('.comment-field').value.trim();
    const errorMessage = document.querySelector('.error');
    const authMessage = document.querySelector('.auth');

    if(newComment.length < 2) {
        errorMessage.style.display = "block";
        return;
    };

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ newComment, postId }),
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);

    if (response.ok) {
        document.location.reload();
      } else if 
        (response.status == 403) {
          authMessage.style.display = "block";
        } else {
            alert('Error: please try again');
        }
}

document.getElementById('comment-form').addEventListener('submit', comment);