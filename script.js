function navigate(page, value) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));

    document.getElementById(page).classList.remove('hidden');

    if (value) {
        sessionStorage.setItem(page, value);
    }
}

function sendEmail() {
    const food = sessionStorage.getItem('food');
    const drink = sessionStorage.getItem('drink');
    const post = sessionStorage.getItem('post');

    const emailBody = `Ciao Amal,
    
Ti aspetta una serata magica con tanti ricordi indimenticabili. Ecco le tue scelte:
- Cibo: ${food}
- Bevanda: ${drink}
- Attività post serata: ${post}

E per concludere la serata, passeremo un po' di tempo insieme sul quel divano che sembra tanto comodo godendoci il tempo insieme.

Non vedo l'ora di passare questa serata speciale con te!

Con affetto,
${sessionStorage.getItem('hakime1667')}`;

    window.open(`mailto:hakime1667@gmail.com?subject=Serata Speciale di San Valentino&body=${encodeURIComponent(emailBody)}`);
}

// Initialize the first page
document.getElementById('home').classList.remove('hidden');
