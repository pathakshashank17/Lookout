var lookoutInput = document.getElementById("lookoutText");          // Input field element
const toggler = document.getElementById("toggle");                  // Toggler element

toggler.addEventListener('click', () => {                           // Event listener for click on toggler
    chrome.runtime.sendMessage({ keyword: lookoutInput.value });    // Send the lookout text to background script in form of message
});