document.getElementById('brainGameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Store data in Google Sheet
    fetch('https://script.google.com/macros/s/AKfycbygJ6jfpMGg4EtiFew0kzqaQAnM1Qe8XXy0ytwNbYUDR3XcEw1OO0bCUZXF5sL7zzeEWw/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            alert('Welcome to SAHS!');
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
