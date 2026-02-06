async function init() {
    try {
        const res = await fetch('data.json');
        const d = await res.json();

        // تعبئة النصوص
        document.getElementById('top-announcement').innerText = d.header.top_announcement;
        document.getElementById('main-date').innerText = d.hero_section.date;
        document.getElementById('main-title').innerText = d.hero_section.title;
        document.getElementById('main-desc').innerText = d.hero_section.description;
        document.getElementById('prediction-label').innerText = d.hero_section.prediction_label;
        document.getElementById('footer-text').innerHTML = `<p>${d.footer.copyright}</p>`;

        // تعبئة المنيو
        document.getElementById('nav-menu').innerHTML = d.header.menu_items
            .map(i => `<li><a href="${i.link}">${i.title}</a></li>`).join('');

        // تعبئة الميداليات
        document.getElementById('medals-container').innerHTML = d.predictions
            .map(p => `<div class="medal gold"><span>${p.horse_number}</span></div>`).join('');

    } catch (e) {
        console.error("Erreur:", e);
    }
}

document.addEventListener('DOMContentLoaded', init);