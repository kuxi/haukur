require([], function() {
    var submitButton = document.getElementById('submit');
    submitButton.onclick = function(event) {
        event.preventDefault();

        alert('OW');
    };
});
