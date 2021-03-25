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

            // Get user id for who is submitting blog
                // Get the modal I put an attribute on
                const userModal = document.querySelector('.modal-content');
                // Get the data-user-id attribute I created
                const user_id = userModal.getAttribute('data-user-id');
        
        // If content exists, post it to the server
        if (title && content) {

            // Post the information
            const response = await fetch('/api/dash/blog', {
                method: 'POST',
                body: JSON.stringify({title,content,user_id}),
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
    const editBlog = async(event) => {

        // Prevent Default
        event.preventDefault();

        // Get the latest title and text area inputs from the modal the button was clicked on

            // Get updated title by traversing dom from event target with vanilla js
                // Call out the button clicked
                const updateButton = event.target
                    console.log(updateButton);
                // Go up a parent
                const modalFooter = updateButton.parentElement;
                    console.log(modalFooter);
                // Go over a sibling prior
                const form = modalFooter.previousElementSibling
                    console.log(form);
                // Use querySelector and scope it to within the form children
                const input= form.querySelector('.new-blog-title');
                    console.log(input);
                // Get the updated Title
                const title = input.value.trim();
                    console.log(title);

             // Get updated content by traversing dom from event target with vanilla js
                // Use querySelector and scope it to within the form children buildin on var above
                const textArea= form.querySelector('.new-blog-content');
                    console.log(textArea);
                // Get the updated Title
                const content = textArea.value.trim();
                    console.log(content);
               
            // Get user id for who is submitting blog
                // Get the modal I put an attribute on
                const modalContentContainer = form.parentElement;
                    console.log(modalContentContainer);
                // Get the data-user-id attribute I created
                const user_id = modalContentContainer.getAttribute('data-user-id');
                    console.log(user_id);

            // If content exists, Put it to the server...
            if (title && content) {

                // Post the information
                const response = await fetch(`/api/dash/blog/update/${user_id}`, {
                    method: 'PUT',
                    body: JSON.stringify({title, content}),
                    headers: {
                        'Content-Type': 'application/JSON',
                    }
                });
                // If its an ok response load the latest dash again
                if (response.ok) {
                    alert(`Blog successfully updated!`);
                    document.location.replace('/api/dash');
                }
                // If it fails, notify them
                else {
                    alert('Failed to Update Blog')
                }
            }
            // If no content exists when posting, alert them to fill it out first
            else {
                alert('Please ensure you have content filled out to update. Content cannot be blank.');
            }
        
    }

/* ------------------------------- Delete Blog ------------------------------ */
    // When delete button is clicked, delete teh blog from the db using the id


/* -------------------------------------------------------------------------- */
/*                            Define Event Handlers                           */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Post New Blog ----------------------------- */
document
    // when THE post new blog button is clicked
    .querySelector('#post-new-blog')
    // Run the post new blog functoin
    .addEventListener('click', postNewBlog);

/* -------------------------------- Edit Blog ------------------------------- */

document
    // When any edit blog button is clicked.
    .querySelector('.update-blog')
    // Run the edit blog functoin
    .addEventListener('click', editBlog);

/* ------------------------------- Delete Blog ------------------------------ */
/*
document
    .querySelector('.delete-blog')
    .addEventListener('click', editBlog);
*/


