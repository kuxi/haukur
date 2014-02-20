require([], function() {
    // Start by getting a reference to HTML elements for later use
    var submitButton = document.getElementById('submit');
    var username_field = document.getElementById('username');
    var password_field = document.getElementById('password');
    var container = document.getElementById('container');
    var goodbyelove = document.getElementById("closeButton");

    // Create a list of user objects
    // Each user contains a username and password length
    var all_users = [
        { username: 'haukur', password_length: 4 },
        { username: 'heidar', password_length: 5 },
        { username: 'dilja', password_length: 9 },
        { username: 'klara', password_length: 7 }
    ];

    function is_valid(username, password) {
        for (var i = 0; i < all_users.length; i++){
		    var user = all_users[i]
    		if (user["username"] === username){
	    		if (password.length === user["password_length"]){
		    		return true;
		    	}

    		}   
			
	    };
        return false;
    }

    function show_babe() {
        container["style"]["display"] = "block";
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
            show_babe();
        } else {
            alert('Invalid username/password');
        }
    };
    goodbyelove.onclick = function(event) {
        container["style"]["display"] = "";
    }
});









