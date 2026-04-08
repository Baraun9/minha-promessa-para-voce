const music = document.getElementById('music');
const btn = document.getElementById('btn');

let click = 0;

function song() {
    if (click === 0 ) {
        music.volume = 0.5;
        music.play();
        btn.textContent = 'Pois é...'
        click = 1;
    } else {
        window.location.href = "src/pages/pg1.html";
        click = 0;
    }
}

function song2() {
    if (click === 0 ) {
        music.volume = 0.5;
        music.currentTime = 52;
        music.play();
        btn.textContent = 'Próxima...'
        click = 1;
    } else {
        window.location.href = "pg2.html";
        click = 0;
    }
}

function song3() {
    if (click === 0 ) {
        music.volume = 0.5;
        music.currentTime = 153;
        music.play();
        btn.textContent = 'Início'
        click = 1;
    } else {
       window.open("https://baraun9.github.io/minha-promessa-para-voce/");
        click = 0;
    }
}
