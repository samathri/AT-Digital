document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            const isOpen = this.classList.contains('active');

            accordionItems.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = '0';
                item.querySelector('.toggle-icon').innerText = '+';
            });

            if (!isOpen) {
                this.classList.add('active');
                this.querySelector('.accordion-content').style.maxHeight = this.querySelector('.accordion-content').scrollHeight + 'px';
                this.querySelector('.toggle-icon').innerText = '-';
            }
        });
    });
});
