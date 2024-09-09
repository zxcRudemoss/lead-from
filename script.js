const API_URL = 'https://crm.belmar.pro/api/v1';
const TOKEN = 'ba67df6a-a17c-476f-8e95-bcdb75ed3958';
const BOX_ID = 28;
const OFFER_ID = 5;
const COUNTRY_CODE = 'GB';
const LANGUAGE = 'en';
const PASSWORD = 'qwerty12';

// Функція для відправки даних
document.getElementById('leadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const ip = await fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => data.ip);
    const landingUrl = window.location.href;
    //window.location.href;
    //'https://zxcrudemoss.github.io';
    const response = fetch('addlead.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            box_id: BOX_ID,
            offer_id: OFFER_ID,
            countryCode: COUNTRY_CODE,
            language: LANGUAGE,
            password: PASSWORD,
            ip,
            landingUrl
        }),
    });
});
