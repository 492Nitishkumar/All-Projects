document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const submitBtn = document.getElementById('submitBtn');
    
    submitBtn.addEventListener('click', function() {
        const question = editor.innerText.trim();
        
        if (question !== '') {
            alert('Question submitted: ' + question);
            
        } else {
            alert('Please enter a question before submitting.');
        }
        
        // Optionally, clear the editor after submission
        editor.innerText = '';
    });
});
