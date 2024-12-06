const users = new Map(); // Userlarni saqlash uchun

        // Sign Up funksiyasi
        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('signupUsername').value.trim();
            const password = document.getElementById('signupPassword').value.trim();
            const signupMessage = document.getElementById('signupMessage');

            if (users.has(username)) {
                signupMessage.textContent = 'Bunday foydalanuvchi mavjud!';
            } else {
                users.set(username, password);
                signupMessage.textContent = 'Ro\'yxatdan muvaffaqiyatli o\'tdingiz!';
                document.getElementById('signupForm').reset();
            }
        });

        // Sign In funksiyasi
        document.getElementById('signinForm').addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('signinUsername').value.trim();
            const password = document.getElementById('signinPassword').value.trim();
            const signinMessage = document.getElementById('signinMessage');

            if (!users.has(username)) {
                signinMessage.textContent = 'Bunday foydalanuvchi mavjud emas! Avval ro\'yxatdan o\'ting.';
            } else if (users.get(username) !== password) {
                signinMessage.textContent = 'Parol noto\'g\'ri!';
            } else {
                signinMessage.textContent = 'Tizimga muvaffaqiyatli kirdingiz!';
            }
        });