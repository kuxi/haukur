require([], function() {
    // Start by getting a reference to HTML elements for later use
    var submitButton = document.getElementById('submit');
    var username_field = document.getElementById('username');
    var password_field = document.getElementById('password');

    // Create a list of user objects
    // Each user contains a username and password length
    var all_users = [
        { username: 'haukur', password_length: 4 },
        { username: 'heidar', password_length: 5 }
    ];

    function is_valid(username, password) {
        // If the password is of the correct length for a given username
        // then we return true.
        // If the username does not exist in all_users, then return false
        // If the username exists but the password length is incorrect,
        // then we return false
        return false;
    }

    // Attach a function to the submit button's onclick event
    // The function will be run every time the button is pressed
    submitButton.onclick = function(event) {
        // This supresses the default behavior for form submission
        event.preventDefault();

        // Get the current value in the login fields
        var username = username_field.value;
        var password = password_field.value;

        // Call our helper function and act according to its result
        if(is_valid(username, password)) {
            alert('Hello, ' + username + '!');
        } else {
            alert('Invalid username/password');
        }
    };
});
