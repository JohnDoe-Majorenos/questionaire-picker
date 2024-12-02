// script.js
const questions = [
    "1. Create a directory named testdir in the Documents folder.",
    "2. Navigate to the Downloads folder.",
    "3. Create a file named sample.txt in the Documents directory.",
    "4. Delete a file named temp.txt located in the Desktop directory.",
    "5. Rename the file notes.txt in the Downloads directory to meeting_notes.txt.",
    "6. Copy the file report.docx from the Documents folder to the Downloads folder.",
    "7. Move the file dog.jpg from the Pictures folder to the Desktop folder.",
    "8. List all the files and directories in the /home directory",
    "9. Create an empty file named gwapa.txt in the current directory.",
    "10. Display the current system date and time.",
    "11. Concatenates and display the file open.txt in desktop directory",
    "12. Display the memory usage",
    "13. Check the disk usage of all mounted filesystems.",
    "14. Create a text file name nanoka.txt in Documents directory using nano text editor",
    "15. List all currently running processes.",
    "16. Create and empty file named gwapo.txt in Documents directory",
    "17. Show the current working directory",
    "18. Delete any directory from the Desktop",
    "19. Copy any directory from Desktop to Documents",
    "20. Copy any directory from Documents to Desktop"
];

let availableQuestions = [...questions];

const pickButton = document.getElementById('pickButton');
const questionDisplay = document.getElementById('questionDisplay');
const timerButtons = document.querySelectorAll('.timer-btn');
const timerDisplay = document.getElementById('timerDisplay');
const beepSound = document.getElementById('beep');
const alarmSound = document.getElementById('alarm');
const timesUpMessage = document.getElementById('timesUpMessage');
let timerInterval;

pickButton.addEventListener('click', () => {
    if (availableQuestions.length === 0) {
        questionDisplay.textContent = 'No more questions!';
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    questionDisplay.textContent = question;

    availableQuestions.splice(randomIndex, 1);
});

timerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const time = parseInt(button.getAttribute('data-time'), 10);
        startTimer(time);
    });
});

function startTimer(duration) {
    clearInterval(timerInterval);
    let timeLeft = duration;
    updateDisplay(timeLeft);
    timesUpMessage.style.display = 'none';

    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay(timeLeft);

        if (timeLeft === 15) {
            beepSound.play();
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alarmSound.play();
            timesUpMessage.style.display = 'block';
        }
    }, 1000);
}

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
