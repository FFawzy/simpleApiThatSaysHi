    const text = 'privacy policy at https://commercetools.com/privacy';
    for (const p of document.querySelectorAll('p')) {
        if (p.textContent.includes(text)) {
            p.innerHTML = p.innerHTML.replace(text, '<a href="https://commercetools.com/privacy">privacy policy</a>');
        }
    }

