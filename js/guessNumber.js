let secretNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const guessInput = document.querySelector('#guessInput');
    const guess = parseInt(guessInput.value);
    if (guess === secretNumber) {
        alert("Đúng rồi, giỏi quá nè");
    } else if (guess > secretNumber) {
        // Hiển thị thông báo số nhập vào quá cao
        alert("Sai rồi, thấp hơn đi");
    } else {
        // Hiển thị thông báo số nhập vào quá thấp
        alert("Sai rồi, cao hơn đi");
    }
});
