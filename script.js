const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

let score = 0;
let currentquestionindex = 0;

startBtn.addEventListener("click", function question1() {
    score = 0;
    currentquestionindex = 0;

    quiz.style.display = "block";
    startBtn.style.display = "none";

    question.textContent = "🔐 What does HTTPS provide?";

    answers.innerHTML = `
        <button onclick="checkAnswer1(false)">🖼️ Image Editing</button>
        <button onclick="checkAnswer1(true)">🔒 Data Encryption</button>
        <button onclick="checkAnswer1(false)">🎬 Video Playback</button>
        <button onclick="checkAnswer1(false)">📁 File Compression</button>
    `;
});

function checkAnswer1(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! HTTPS helps protect data. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The correct answer is Data Encryption. 🔒";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question2()">➡️ Next Question</button>';
}

function question2() {
    question.textContent = "🎣 What is Phishing?";

    answers.innerHTML = `
        <button onclick="checkAnswer2(true)">🛡️ A Cyber Attack</button>
        <button onclick="checkAnswer2(false)">💻 Antivirus</button>
        <button onclick="checkAnswer2(false)">🌐 Web Browser</button>
        <button onclick="checkAnswer2(false)">⌨️ Programming Language</button>
    `;
}

function checkAnswer2(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! Phishing is a cyber attack. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The answer is A Cyber Attack.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question3()">➡️ Next Question</button>';
}

function question3() {
    question.textContent = "🧱 What does a firewall do?";

    answers.innerHTML = `
        <button onclick="checkAnswer3(false)">🖼️ Edits Photos</button>
        <button onclick="checkAnswer3(false)">📄 Creates Documents</button>
        <button onclick="checkAnswer3(true)">🛡️ Protects Network Traffic</button>
        <button onclick="checkAnswer3(false)">🎬 Plays Videos</button>
    `;
}

function checkAnswer3(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! A firewall helps protect network traffic. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The answer is Protects Network Traffic.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question4()">➡️ Next Question</button>';
}

function question4() {
    question.textContent = "🦠 What is Malware?";

    answers.innerHTML = `
        <button onclick="checkAnswer4(false)">🔄 A Cyber Update</button>
        <button onclick="checkAnswer4(false)">🌐 A Safe Website</button>
        <button onclick="checkAnswer4(false)">🔌 A Network Cable</button>
        <button onclick="checkAnswer4(true)">☠️ Malicious Software</button>
    `;
}

function checkAnswer4(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! Malware is malicious software. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The answer is Malicious Software.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question5()">➡️ Next Question</button>';
}

function question5() {
    question.textContent = "🔑 What is a strong password?";

    answers.innerHTML = `
        <button onclick="checkAnswer5(false)">❌ 123456</button>
        <button onclick="checkAnswer5(true)">🔐 A long, unique password</button>
        <button onclick="checkAnswer5(false)">👤 Your Name</button>
        <button onclick="checkAnswer5(false)">🔓 Password</button>
    `;
}

function checkAnswer5(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! A strong password is long and unique. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The answer is A long, unique password.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question6()">➡️ Next Question</button>';
}

function question6() {
    question.textContent = "🌐 What does an IP address identify?";

    answers.innerHTML = `
        <button onclick="checkAnswer6(true)">💻 A device's Network address</button>
        <button onclick="checkAnswer6(false)">🔑 A user's password</button>
        <button onclick="checkAnswer6(false)">📁 A file type</button>
        <button onclick="checkAnswer6(false)">🎨 A browser theme</button>
    `;
}

function checkAnswer6(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! An IP address identifies a network interface. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The answer is a device's network address.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question7()">➡️ Next Question</button>';
}

function question7() {
    question.textContent = "🔐 What is two-factor authentication (2FA)?";

    answers.innerHTML = `
        <button onclick="checkAnswer7(false)">👤 Using two usernames</button>
        <button onclick="checkAnswer7(true)">🛡️ Using two verification methods</button>
        <button onclick="checkAnswer7(false)">🎨 Changing your wallpaper</button>
        <button onclick="checkAnswer7(false)">🌐 Installing two browsers</button>
    `;
}

function checkAnswer7(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! 2FA adds an extra layer of security. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The answer is Using two verification methods.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question8()">➡️ Next Question</button>';
}

function question8() {
    question.textContent = "🛡️ What is the main purpose of antivirus software?";

    answers.innerHTML = `
        <button onclick="checkAnswer8(false)">🎬 Edit videos</button>
        <button onclick="checkAnswer8(false)">💡 Increase screen brightness</button>
        <button onclick="checkAnswer8(true)">🦠 Detect and help remove malware</button>
        <button onclick="checkAnswer8(false)">🔑 Create passwords automatically for all websites</button>
    `;
}

function checkAnswer8(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! Antivirus helps detect and remove malware. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! The answer is Detect and help remove malware.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question9()">➡️ Next Question</button>';
}

function question9() {
    question.textContent = "📧 What should you do with a suspicious email link?";

    answers.innerHTML = `
        <button onclick="checkAnswer9(false)">⚠️ Click it immediately</button>
        <button onclick="checkAnswer9(true)">🔍 Verify the sender before clicking</button>
        <button onclick="checkAnswer9(false)">📢 Share it with everyone</button>
        <button onclick="checkAnswer9(false)">🔑 Reply with your password</button>
    `;
}

function checkAnswer9(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! Verify suspicious links before clicking. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! Verify the sender before clicking.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="question10()">➡️ Next Question</button>';
}

function question10() {
    question.textContent = "🌐 What is the purpose of a VPN?";

    answers.innerHTML = `
        <button onclick="checkAnswer10(false)">⌨️ Repair a broken keyboard</button>
        <button onclick="checkAnswer10(false)">💾 Increase storage space</button>
        <button onclick="checkAnswer10(false)">🦠 Create computer viruses</button>
        <button onclick="checkAnswer10(true)">🔒 Create an encrypted connection over a network</button>
    `;
}

function checkAnswer10(correct) {
    if (correct) {
        score++;
        question.textContent = "✅ Correct! A VPN can create an encrypted network connection. 🏆 Score: " + score;
    } else {
        question.textContent = "❌ Incorrect! A VPN can create an encrypted network connection.";
    }

    answers.innerHTML = "";
    answers.innerHTML += '<button onclick="showFinalScore()">🏆 View Final Score</button>';
}

function showFinalScore() {
    question.textContent = "🎉 Quiz Completed! 🎉";
    answers.innerHTML = "🏆 Your Final Score: " + score + " / 10";

    startBtn.style.display = "inline-block";
    startBtn.textContent = "🔄 Try Again";
}