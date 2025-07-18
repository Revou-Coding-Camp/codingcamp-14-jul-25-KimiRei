document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');
    const outputName = document.getElementById('outputName');
    const outputEmail = document.getElementById('outputEmail');
    const outputMsg = document.getElementById('outputMsg');
    const formError = document.getElementById('formError');
    const formSuccess = document.getElementById('formSuccess');

    // Fungsi sederhana untuk cegah XSS
    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function(m) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            })[m];
        });
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formError.textContent = '';

            const name = form.fullName.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            // Validasi sederhana
            if (!name || !email || !message) {
                formError.textContent = 'Semua kolom wajib diisi!';
                console.warn('Form tidak lengkap');
                return;
            }
            // Validasi email sederhana
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formError.textContent = 'Format email tidak valid!';
                console.error('Email tidak valid:', email);
                return;
            }

            // Tampilkan ke output (escape untuk keamanan)
            outputName.textContent = escapeHTML(name);
            outputEmail.textContent = escapeHTML(email);
            outputMsg.textContent = escapeHTML(message);

            formError.textContent = '';
            formSuccess.textContent = 'Pesan berhasil dikirim!';
            form.reset();
            setTimeout(() => { formSuccess.textContent = ''; }, 3000);
            console.info('Pesan berhasil dikirim:', { name, email, message });
        });
    }
});