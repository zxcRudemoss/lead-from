document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');

    form.addEventListener('submit', (event) => {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const firstNamePattern = /^[А-ЯA-Z][а-яA-Za-z]{2,14}$/;
        const lastNamePattern = /^[А-ЯA-Z][а-яA-Za-z]{2,14}$/;
        const phonePattern = /^[0-9]{8}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Валідація імені
        if (!firstNamePattern.test(firstName)) {
            alert("Ім'я має починатися з великої літери (А-Я, A-Z) і вміщувати від 3 до 15 літер");
            event.preventDefault();
            return;
        }

        // Валідація прізвища
        if (!lastNamePattern.test(lastName)) {
            alert('Прізвище має починатися з великої літери (А-Я, A-Z) і вміщувати від 3 до 15 літер');
            event.preventDefault();
            return;
        }

        // Валідація телефону
        if (!phonePattern.test(phone)) {
            alert('Номер телефону має містити 8 цифр');
            event.preventDefault();
            return;
        }

        // Валідація електронної пошти
        if (!emailPattern.test(email)) {
            alert('Введіть коректний Email: Exemple@mail.com');
            event.preventDefault();
            return;
        }
    });
});