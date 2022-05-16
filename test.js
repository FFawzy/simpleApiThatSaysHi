window.addEventListener('load', function() {
    const text = '@privacy-ct-https://commercetools.com/privacy';
    for (const p of document.querySelectorAll('p')) {
        if (p.textContent.includes(text)) {
            p.innerHTML = p.innerHTML.replace(text, '<a href="https://commercetools.com">privacy policy</a>');
            console.log(text)
        }
    }
})
