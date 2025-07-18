// Efek typing di hero section
document.addEventListener('DOMContentLoaded', () => {
    const typingEl = document.getElementById('typing');
    const texts = [
        "Hi, I'm KimiRei.",
        "Welcome to My Portfolio.",
        "AI Enthusiast | Web Developer | Problem Solver.",
        "I love to build, learn, and share. 👨‍💻"
    ];
    const speed = 45; // ms per char
    let textIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const current = texts[textIdx];
        if (!isDeleting) {
            typingEl.textContent = current.substring(0, charIdx + 1) + '|';
            charIdx++;
            if (charIdx === current.length) {
                isDeleting = true;
                setTimeout(type, 1200);
            } else {
                setTimeout(type, speed);
            }
        } else {
            typingEl.textContent = current.substring(0, charIdx) + '|';
            charIdx--;
            if (charIdx < 0) {
                isDeleting = false;
                textIdx = (textIdx + 1) % texts.length;
                setTimeout(type, 600);
            } else {
                setTimeout(type, 22);
            }
        }
    }
    type();
});