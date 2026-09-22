document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const expression = document.getElementById('expression').value;

        fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expression: expression }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.result !== undefined) {
                resultDiv.textContent = `Result: ${data.result}`;
            } else {
                resultDiv.textContent = 'Invalid calculation';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = 'An error occurred';
        });
    });
});