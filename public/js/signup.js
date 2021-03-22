/* -------------------------------------------------------------------------- */
/*                          Define Handler Functions                          */
/* -------------------------------------------------------------------------- */

    const signUpFormHandler = async (event) => {

        event.preventDefault();

        // Collect values from the signup form
        const email = document.querySelector('#inputNewEmail').value.trim();
        const userName = document.querySelector('inputNewUserName').value.trim();
        const password = document.querySelector('#inputNewPassword').value.trim();

        if (email && password) {
            // Send a POST request to the API endpoint
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, userName, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // If successful, redirect them to the dashboard page
                document.location.replace('/api/blogs');
            } 
            else {
                alert(response.statusText);
            }
        }
    };

/* -------------------------------------------------------------------------- */
/*                            Define Event Handlers                           */
/* -------------------------------------------------------------------------- */

    document
        .querySelector('#signup-button')
        .addEventListener('click', signUpFormHandler);
  
