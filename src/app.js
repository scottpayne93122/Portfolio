const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

document.addEventListener('DOMContentLoaded', () => {
    // hljs.highlightAll();
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
    const copySuccess = document.getElementById('copy-success');
    const copyTextHandler = () => {
        const text = codeBlock.innerText;
    

        navigator.clipboard.writeText(text).then(
            () => {
                copySuccess.classList.add('show-message');
                setTimeout(() => {
                    copySuccess.classList.remove('show-message');
                }, 2500);
            },
            () => {
                console.log('Error writing to the clipboard');
            }
        );
    };    

    copyButton.addEventListener('click', copyTextHandler);
})

                      