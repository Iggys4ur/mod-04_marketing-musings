document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const toggle = document.getElementById('theme-toggle');
    const postsContainer = document.getElementById('posts-container');

    // Check if toggle exists before adding event listener
    if (toggle) {
        // Check and apply theme preference from localStorage
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        }

        // Toggle theme and save preference to localStorage
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Handle form submission if the form exists
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

            // Create a new blog post object
            const newPost = {
                username,
                title,
                content,
            };

            // Get existing posts from localStorage
            const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            posts.push(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(posts));

            // Redirect to the blog posts page
            window.location.href = 'blog.html';
        });
    }

    // Load posts if on the blog page and postsContainer exists
    if (postsContainer) {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>by ${post.username}</em></p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});
