/* -------------------------------------------------------------------------- */
/*                          Define Handler Functions                          */
/* -------------------------------------------------------------------------- */

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
                const response = await fetch(`/comment`, {
                    method: 'POST',
                    body: JSON.stringify({comment,blog_id,user_id}),
                    headers: {
                        'Content-Type': 'application/JSON',
                    }
                });
                // If its an ok response load the latest dash again
                if (response.ok) {
                    document.location.replace('/');
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

    // Define a variable that holds all instances of buttons with class delete-blog
    const commentBlogButtons = document.querySelectorAll('.post-comment');

    // Loop through this array of buttons and add an event listner to each of them to run edit blog function
    commentBlogButtons.forEach(function(el) {
        el.addEventListener('click', postComment)
    });