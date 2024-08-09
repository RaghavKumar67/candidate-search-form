
        document.getElementById('showButton').addEventListener('click', function() {
            const hiddenField = document.getElementById('hiddenField');

            // Toggle visibility
            if (hiddenField.style.display === 'none' || hiddenField.style.display === '') {
                hiddenField.style.display = 'block'; // Show the input field
            } else {
                hiddenField.style.display = 'none'; // Hide the input field (if needed)
            }
        });

        
    
    
        document.getElementById('showButton1').addEventListener('click', function() {
            const hiddenFieldO = document.getElementById('hiddenFieldO');

            // Toggle visibility
            if (hiddenFieldO.style.display === 'none' || hiddenFieldO.style.display === '') {
                hiddenFieldO.style.display = 'flex'; // Show the input field
            } else {
                hiddenFieldO.style.display = 'none'; // Hide the input field (if needed)
            }
        });
    