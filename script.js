// Script to handle tab switching
const tabs = document.querySelectorAll('.tab-input');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('change', function() {
        const targetContentId = this.getAttribute('id').replace('tab', 'content');
        contents.forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(targetContentId).style.display = 'block';
    });
});
