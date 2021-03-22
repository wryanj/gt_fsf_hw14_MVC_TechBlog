/* -------------------------------------------------------------------------- */
/*                          Define Handler Functions                          */
/* -------------------------------------------------------------------------- */

    const signUpFormHandler = async (event) => {

        event.preventDefault();

        // Collect values from the signup form
        const email = document.querySelector(".inputNewEmail").value.trim();
        const user_name = document.querySelector(".inputNewUserName").value.trim();
        const password = document.querySelector(".inputNewPassword").value.trim();

        if (email && password) {

            // Send a POST request to the API endpoint
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ email, user_name, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            // If successful, redirect them to the dashboard page
            if (response.ok) {
                document.location.replace('/api/dash');
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
        // get the button I gave the sign-up-button id and listen for a click
        .querySelector('#sign-up-button')
        // when clicked, run the function I defined above to send info to server and get response
        .addEventListener('click', signUpFormHandler);
  
