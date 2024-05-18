document.addEventListener('DOMContentLoaded', () => {
 
    const formContainer = document.getElementById('form-container');

    document.getElementById('add-text').addEventListener('click', () => {
        addFormField('text');
    });

    document.getElementById('add-checkbox').addEventListener('click', () => {
        addFormField('checkbox');
    });

    document.getElementById('add-radio').addEventListener('click', () => {
        addFormField('radio');
    });

    function addFormField(type) {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        let input;
        if (type === 'text') {
            input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Enter text';
        } else if (type === 'checkbox') {
            input = document.createElement('input');
            input.type = 'checkbox';
        } else if (type === 'radio') {
            input = document.createElement('input');
            input.type = 'radio';
        }

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            formContainer.removeChild(formGroup);
        });

        formGroup.appendChild(input);
        formGroup.appendChild(removeButton);
        formContainer.appendChild(formGroup);
    }
});
