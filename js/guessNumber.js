let secretNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const guessInput = document.querySelector('#guessInput');
    const guess = parseInt(guessInput.value);
    const higher = "<strong>Cao quá</strong> thấp hơn tí đê!";
    const lower = "<strong>Thấp quá</strong>, cao hơn tí đê!";
    const correct = "<strong>Đúng rồi</strong>, giỏi quá nè!";
    const alert = document.getElementById('alert');
    if (guess === secretNumber) {
        document.getElementById("alert").style.display = 'block';
        document.getElementById('alert').innerHTML = correct;
        alert.classList.remove("alert-danger");
        alert.classList.remove("alert-warning");
        alert.classList.add("alert-success");
        setTimeout(function myFunction2() {
            document.getElementById("alert").style.display = 'none';
        }, 1000)
    } else if (guess > secretNumber) {
        // Hiển thị thông báo số nhập vào quá cao
        document.getElementById("alert").style.display = 'block';
        document.getElementById('alert').innerHTML = higher;
        alert.classList.remove("fade");
        alert.classList.remove("alert-success");
        alert.classList.remove("alert-warning");
        alert.classList.add("alert-danger");
        setTimeout(function myFunction2() {
            document.getElementById("alert").style.display = 'none';
        }, 1000)
    } else {
        // Hiển thị thông báo số nhập vào quá thấp
        document.getElementById("alert").style.display = 'block';
        document.getElementById('alert').innerHTML = lower;
        alert.classList.remove("fade");
        alert.classList.remove("alert-danger")
        alert.classList.remove("alert-warning")
        alert.classList.add("alert-warning");
        setTimeout(function myFunction2() {
            document.getElementById("alert").style.display = 'none';
        }, 1000)
    }
});

const playAgainButton = document.querySelector('#playAgain');
playAgainButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    // Khởi tạo lại trò chơi
});