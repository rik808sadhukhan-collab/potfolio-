document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;

        var thankYou = document.createElement('div');
        thankYou.style.backgroundColor = '#4ade80';
        thankYou.style.color = '#1a1a1a';
        thankYou.style.padding = '20px';
        thankYou.style.borderRadius = '8px';
        thankYou.style.textAlign = 'center';
        thankYou.style.marginTop = '20px';
        thankYou.style.fontWeight = 'bold';
        thankYou.textContent = 'Thank you, ' + name + '! Your message has been sent.';

        form.parentNode.insertBefore(thankYou, form.nextSibling);

        form.reset();
    });
});