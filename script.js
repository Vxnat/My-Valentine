const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const gifContainer = document.getElementById('gif-container');
const expressionGif = document.getElementById('expression-gif');
const states = [
    { text: 'Bạn chắc chứ?', gif: 'img/tkthao219-peach.gif' },
    { text: 'Bạn có nghĩ lại không? 😢', gif: 'img/tears-heartbreak.gif' },
    { text: 'Đừng làm tớ buồn mà! 😭', gif: 'img/peachandgoma-iloveyou.gif' },
    { text: 'Bạn thực sự từ chối à? 💔', gif: 'img/mochi-mochi-peach-cat-cat.gif' },
    { text: 'Xin hãy chọn Yes đi mà! 🥺', gif: 'img/love.gif' },
];
let noClickCount = 0;

noButton.addEventListener('click', function () {
    if (noClickCount == states.length) {
        expressionGif.style.display = 'none';
    }
    if (noClickCount < states.length) {
        noButton.innerText = states[noClickCount].text;
        expressionGif.src = states[noClickCount].gif;
        noButton.style.animation = 'shakeNo 1s ease-in-out';
    } else {
        noButton.style.display = 'none';
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        yesButton.style.width = `${screenWidth}px`;
        yesButton.style.height = `${screenHeight}px`;
        yesButton.style.fontSize = `${Math.min(screenWidth, screenHeight) * 0.1}px`;
    }
    noClickCount++;
    let screenWidth = window.innerWidth;
    yesButton.style.fontSize = `${16 + noClickCount * (screenWidth * 0.08)}px`;
});

yesButton.addEventListener('click', function () {
    gifContainer.style.display = 'flex';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    expressionGif.style.display = 'none';
});

// Danh sách câu hỏi ngẫu nhiên
const randomQuestions = [
    'Tớ nhớ cậu! 💙',
    'Cậu đáng yêu lắm! 😆',
    'Gặp cậu là vui cả ngày! 😍',
    'Cậu là nhất! 💯',
    'Tớ quý cậu lắm đấy! ❤️',
    'Cậu tuyệt lắm! 🔥',
    'Có cậu là đủ rồi! 😊',
    'Tớ thích cậu! 😳',
    'Cậu làm tớ cười suốt! 😂',
    'Cậu quan trọng với tớ! 💖',
    'Ở bên cậu vui thật! 😎',
    'Tớ trân trọng cậu! 🙌',
    'Cậu là người đặc biệt! ✨',
    'Cậu làm tớ hạnh phúc! 😘',
    'Nhìn cậu là thấy vui! 🤩',
    'Cậu tuyệt vời lắm! 😍',
    'Tớ tin tưởng cậu! 🤝',
    'Cậu quan trọng với tớ lắm! ❤️',
    'Tớ muốn ở bên cậu! 🥰',
    'Cậu làm tim tớ rung rinh! 💓',
    'Cậu là điều tuyệt nhất! 💙',
    'Chỉ cần cậu vui là được! 😆',
    'Cậu là duy nhất! 💎',
    'Có cậu, tớ chẳng cần gì hơn! 🔥',
    'Cậu luôn ở trong tâm trí tớ! 🧠💖',
    'Gặp cậu là điều may mắn! 🍀',
    'Tớ cảm thấy thoải mái khi ở bên cậu! 🤗',
    'Cậu đáng trân trọng lắm! 💞',
    'Tớ thích cách cậu cười! 😄',
    'Mỗi ngày có cậu đều đặc biệt! 🌟',
];

// Xử lý khi nhấn icon xúc xắc
document.getElementById('dice-icon').addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * randomQuestions.length);
    document.getElementById('message').value = randomQuestions[randomIndex];
});

document.getElementById('send-message').addEventListener('click', function () {
    document.getElementById('thank-you-popup').style.display = 'flex';

    // Tự động đóng popup sau 3 giây
    setTimeout(() => {
        document.getElementById('thank-you-popup').style.display = 'none';
    }, 3000);
});
