/* -------------------------------------------------------------------------- */
/*                          Define Handler Functions                          */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Post New Blog ----------------------------- */
    // When post is clicked in modal, log information to create new blog
    const postNewBlog = async(event) => {

        // Prevent Default
        event.preventDefault();

        // Define Items to Get and Manipulate

            // Get blog title entered on modal at time of click
            const title = document.querySelector('.new-blog-title').value.trim();

            // Get blog content entered on modal at time of click
            const content = document.querySelector('.new-blog-content').value.trim();
        
        // If content exists, post it to the server
        if (title && content) {
            
            // Post the information
            const response = await fetch('/api/dash/blog', {
                method: 'POST',
                body: JSON.stringify({title,content}),
                headers: {
                    'Content-Type': 'application/JSON',
                }
            });
            // If its an ok response load the latest dash again
            if (response.ok) {
                alert(`New blog created!`);
                document.location.replace('/api/dash');
            }
            // If it fails, notify them
            else {
                alert('Failed to Create Blog')
            }
        }
        // If no content exists when posting, alert them to fill it out first
        else {
            alert('Please fill out a title and content to post');
        }
    }

/* -------------------------------- Edit Blog ------------------------------- */
    // When edit button is clicked, pull of modal with initial text populated (then re-use post)

/* ------------------------------- Delete Blog ------------------------------ */
    // When delete button is clicked, delete teh blog from the db using the id


/* -------------------------------------------------------------------------- */
/*                            Define Event Handlers                           */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Post New Blog ----------------------------- */
document
    .querySelector('#post-new-blog')
    .addEventListener('click', postNewBlog);

/* -------------------------------- Edit Blog ------------------------------- */
/*
document
    .querySelector('.edit-blog')
    .addEventListener('click', editBlog);
*/
/* ------------------------------- Delete Blog ------------------------------ */
/*
document
    .querySelector('.delete-blog')
    .addEventListener('click', editBlog);
*/