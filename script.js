document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    //for submission from contact
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    //when the user submit their concerns etc.
    console.log('Form Submission', name, email, message);
    //alert or notifications
    alert('Thank you for your message, ' + name + '!');


});
