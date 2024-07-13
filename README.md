# Marketing Musings
A personal blog page tailored to marketing students

## What I Learned From This Project
Developing this personal blog provided hands-on experience with:
- JavaScript and DOM manipulation, enhancing interactive elements on the web pages.
- Local storage for persisting blog posts, ensuring data is retained across sessions.
- Building responsive web applications, making the site accessible on various devices.
- Implementing a light/dark mode toggle, improving user experience by offering theme options.

## Project Overview
This project is a two-page personal blog website where users can input and view blog posts. It includes a content form, dynamically rendered blog posts, and a light/dark mode toggle. The project showcases practical JavaScript skills, DOM manipulation, and responsive design.

## Details
I implemented the following features:
- **Content Form:** A form with labels and inputs for username, blog title, and blog content, enabling users to submit their blog posts.
- **Local Storage:** Blog post data is stored in localStorage, ensuring that posts persist even when the page is refreshed.
- **Dynamic Navigation:** Redirects to the posts page after form submission, providing a seamless user experience.
- **Validation:** Prompts the user to complete the form if any fields are empty.
- **Toggle:** Light mode/dark mode toggle to switch between themes, enhancing user comfort.

## Requirements
The following were provided to define the scope of this assignment:

<details>
  <summary>Agile Project Management Considerations</summary>

### 1. User Story:

    AS A marketing student,
    I WANT a personal blog
    SO THAT I can showcase my thoughts and experiences.

### 2. Acceptance Criteria:

    GIVEN a personal blog
    WHEN I load the app,
    THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
    WHEN I submit the form,
    THEN blog post data is stored to localStorage.
    WHEN the form submits,
    THEN I am redirected to the posts page.
    WHEN I try to submit a form without a username, title, or content,
    THEN I am presented with a message that prompts me to complete the form.
    WHEN I view the posts page,
    THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
    WHEN I click the light mode/dark mode toggle,
    THEN the page content's styles update to reflect the selection.
    WHEN I click the "Back" button,
    THEN I am redirected back to the landing page where I can input more blog entries.
    WHEN I view the main content,
    THEN I am presented with a list of blog posts that are pulled from localStorage.
    WHEN I view localStorage,
    THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
    WHEN I take a closer look at a single blog entry in the list,
    THEN I can see the title, the content, and the author of the post.
    WHEN I view the footer,
    THEN I am presented with a link to the developer's portfolio.

### 3. Mockup:

    This layout is designed for "desktop", so you may notice that some of 
    the elements don't look like the Mock-Up when viewed at a resolution 
    smaller than 768px. In future lessons, you will learn how to make 
    elements "responsive" so that your web applications can be viewed on any device.

  <details>
    <summary>Provided Mockup</summary>

  ![Supplied mockup .gif](/assets/img/mockup.gif)

  </details>
</details>

## Submission
GitHub Repo
- https://github.com/Iggys4ur/marketing-musings

Hosted Webpage
- https://iggys4ur.github.io/marketing-musings

## Installation
If you wish to run this project locally on your own computer, (assuming you have git installed) input the following code in your terminal:

```bash
git clone https://github.com/Iggys4ur/marketing-musings.git <PATH_TO_DESTINATION_DIRECTORY>
```
## Usage
GitHub Repo
- https://github.com/Iggys4ur/marketing-musings

Deployed WebApp
- https://iggys4ur.github.io/marketing-musings

<details>
<summary>Screenshots of the functional web app:</summary>

<p>&nbsp;</p>
<p>Here is a screenshot of the landing page:</p>

![Screenshot of the landing page](/assets/img/screenshot-home.png)

<p>And here is a screenshot of the posts page:</p>

![Screenshot of the posts page](/assets/img/screenshot-posts.png)

</details> 

## Credits
The original files for this assignment may be found here if you wish to recreate this project:

- https://git.bootcampcontent.com/Rutgers-University/RUT-VIRT-FSF-FT-06-2024-U-LOLC.git

I used the following guide to create this README.md file:

- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

Some of the code that I implemented was repurposed and/or translated (converted, re-wrote, learned, etc.) from various resources and answers found on a handful of sites and forums including:

- https://stackoverflow.com/
- https://reddit.com/
- https://github.com/orgs/community/discussions/
- https://w3schools.com/html/
- https://w3schools.com/css/
- https://docs.github.com/en

## License
This project has an MIT License. For more information read the LICENSE file.