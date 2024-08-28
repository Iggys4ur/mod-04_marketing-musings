/* blog.js: Manages display of posts and light/dark mode toggle */
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const postsContainer = document.getElementById('posts-container');

    if (toggle) {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        }

        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
    }

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
