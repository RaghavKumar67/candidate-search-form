
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

        document.querySelector('.tagInput').addEventListener('keydown', function(event) {
            if (event.key === ',') {
                event.preventDefault(); // Prevent the form submission or other default actions
                const inputText = this.value.trim(); // Get the input value and trim whitespace

                if (inputText) {
                    const tags = inputText.split(/\s*,\s*|\s+/); // Split by comma or space

                    tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'tag';
                        tagElement.textContent = tag;
                        
                        const removeButton = document.createElement('span');
                        removeButton.className = 'remove-tag';
                        removeButton.textContent = '×';
                        removeButton.onclick = function() {
                            this.parentElement.remove();
                        };
                        tagElement.appendChild(removeButton);
                        document.getElementById('tagsContainer').appendChild(tagElement);
                    });
                }
            }
        });

document.querySelector('.tagInputn').addEventListener('keydown', function(event) {
            if (event.key === ',') {
                event.preventDefault(); // Prevent the form submission or other default actions
                const inputText = this.value.trim(); // Get the input value and trim whitespace

                if (inputText) {
                    const tags = inputText.split(/\s*,\s*|\s+/); // Split by comma or space

                    tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'tag';
                        tagElement.textContent = tag;
                        
                        const removeButton = document.createElement('span');
                        removeButton.className = 'remove-tag';
                        removeButton.textContent = '×';
                        removeButton.onclick = function() {
                            this.parentElement.remove();
                        };
                        tagElement.appendChild(removeButton);
                        document.getElementById('tagsContainern').appendChild(tagElement);
                        
                    });
                }
            }
        });


        document.querySelector('.tagInputnn').addEventListener('keydown', function(event) {
            if (event.key === ',') {
                event.preventDefault(); // Prevent the form submission or other default actions
                const inputText = this.value.trim(); // Get the input value and trim whitespace

                if (inputText) {
                    const tags = inputText.split(/\s*,\s*|\s+/); // Split by comma or space

                    tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'tag';
                        tagElement.textContent = tag;
                        
                        const removeButton = document.createElement('span');
                        removeButton.className = 'remove-tag';
                        removeButton.textContent = '×';
                        removeButton.onclick = function() {
                            this.parentElement.remove();
                        };
                        tagElement.appendChild(removeButton);
                        document.getElementById('tagsContainernn').appendChild(tagElement);
                        
                    });
                }
            }
        });
    
