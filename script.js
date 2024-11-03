document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const postContent = document.getElementById('postContent').value;
    if (postContent) {
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerText = postContent;
        document.querySelector('.posts').appendChild(newPost);
        document.getElementById('postContent').value = '';
    }
});
