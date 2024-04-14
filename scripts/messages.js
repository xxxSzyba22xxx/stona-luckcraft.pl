document.addEventListener("DOMContentLoaded", function() {
    const messagesDiv = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message !== '') {
            sendMessage(message);
            messageInput.value = '';
        }
    });

    function sendMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
});
