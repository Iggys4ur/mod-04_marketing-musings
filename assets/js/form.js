/* form.js: Handles form submission, validation, and storage */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const title = document.getElementById('title').value.trim();
            const content = document.getElementById('content').value.trim();

            if (!username || !title || !content) {
                alert('Please fill in all fields');
                return;
            }

            const newPost = {
                username,
                title,
                content,
            };

            const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            posts.push(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(posts));

            window.location.href = 'blog.html';
        });
    }
});
