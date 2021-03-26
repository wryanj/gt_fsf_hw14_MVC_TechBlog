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
    };

/* -------------------------------- Edit Blog ------------------------------- */
    // Edit button renders modal straigt from handlebars, this runs when the post update in the modal is clicked. 
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
                // Get the data-blog attribute I created
                const blog_id = modalContentContainer.getAttribute('data-blog-id');
                    console.log(blog_id);

            // If content exists, Put it to the server...
            if (title && content) {

                // Post the information
                const response = await fetch(`/api/dash/blog/${blog_id}`, {
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
            
    };

/* ------------------------------- Delete Blog ------------------------------ */

     // When delete button is clicked, delete the blog from the db
     const deleteBlog = async(event) => {

        // Prevent Default
        event.preventDefault();

        // Get the id for the blog on which the delete button was clicked

            // Get updated title by traversing dom from event target with vanilla js
                // Call out the button clicked
                const buttonsContainer= event.target.parentElement;
                    console.log(buttonsContainer);
                const blog_id = buttonsContainer.getAttribute('data-blogid');
                    console.log(blog_id);
                    
              

            // delete the blog by id
            try {
                // Post the information
                const response = await fetch(`/api/dash/blog/${blog_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/JSON',
                    }
                });
                // If its an ok response load the latest dash again
                if (response.ok) {
                    alert(`Blog Deleted`);
                    document.location.replace('/api/dash');
                }
                // If it fails, notify them
                else {
                    alert('Failed to Delete Blog')
                }
            }
            // If no content exists when posting, alert them to fill it out first
            catch {
                alert('Please ensure you have content filled out to update. Content cannot be blank.');
            }
            
    };

/* ------------------------------ Post Comments ----------------------------- */

    // When edit button is clicked, pull of modal with initial text populated (then re-use post)
    const postComment = async(event) => {

        // Prevent Default
        event.preventDefault();

        // Get the comment, blog id and user id to post

            // Get comment by traversing dom from event target with vanilla js
                // Call out the button clicked
                const postCommentButton = event.target
                    console.log(postCommentButton);
                // Go up a parent
                const upFromButton = postCommentButton.parentElement;
                    console.log(upFromButton);
                // Go to prior sibling
                const form = upFromButton.previousElementSibling;
                    console.log(form);
                // Find within prior sibling element, the class of element holing our comment
                const textArea = form.querySelector('.new-comment');
                    console.log(textArea);
                // Get the trimmed value of the text area (the comment)
                const comment = textArea.value.trim();
                    console.log(comment);
                
                
            // Get the blog id
                // Go up one element from form
                const modalDiv = form.parentElement;
                // Get the blog id
                const blog_id = modalDiv.getAttribute('data-blog-id');
                    console.log(blog_id);
                

            // Get user id for who is submitting blog (who is logged in)
             const user_id = modalDiv.getAttribute('data-currentuser-id');
                console.log(user_id);
    
            // If content exists, Put it to the server...
            if (comment) {
                // Post the information
                const response = await fetch(`/api/dash/comment`, {
                    method: 'POST',
                    body: JSON.stringify({comment,blog_id,user_id}),
                    headers: {
                        'Content-Type': 'application/JSON',
                    }
                });
                // If its an ok response load the latest dash again
                if (response.ok) {
                    document.location.replace('/api/dash');
                }
                // If it fails, notify them
                else {
                    alert('Failed to update')
                }
            }
            
            // If no content exists when posting, alert them to fill it out first
            else {
                alert('Please ensure you have content filled out to update. Content cannot be blank.');
            }

    };

/* -------------------------------------------------------------------------- */
/*                            Define Event Handlers                           */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Post New Blog ----------------------------- */
    
    // Select the new blog button and add event listenr to run new blog function
    document.querySelector('#post-new-blog').addEventListener('click', postNewBlog);
     
/* -------------------------------- Edit Blog ------------------------------- */

    // Define a variable that holds all instances of buttons with class update-blog
    const editBlogButtons = document.querySelectorAll('.update-blog');

    // Loop through this array of buttons and add an event listner to each of them to run edit blog function
    editBlogButtons.forEach(function(el) {
        el.addEventListener('click', editBlog)
    });
        
/* ------------------------------- Delete Blog ------------------------------ */

    // Define a variable that holds all instances of buttons with class delete-blog
    const deleteBlogButtons = document.querySelectorAll('.delete-blog');

    // Loop through this array of buttons and add an event listner to each of them to run edit blog function
    deleteBlogButtons.forEach(function(el) {
        el.addEventListener('click', deleteBlog)
    });

/* ------------------------------ Post Comment ------------------------------ */

     // Define a variable that holds all instances of buttons with class delete-blog
     const commentBlogButtons = document.querySelectorAll('.post-comment');

     // Loop through this array of buttons and add an event listner to each of them to run edit blog function
     commentBlogButtons.forEach(function(el) {
         el.addEventListener('click', postComment)
     });





