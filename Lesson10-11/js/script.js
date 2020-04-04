let btn_prev = document.querySelector(`#gallery .buttons .prev`);
let btn_next = document.querySelector(`#gallery .buttons .next `);

let images = document.querySelectorAll(`#gallery .photos img`);
let i =0;

btn_prev.onclick = function() {
    images[i].style.display = 'none'; // Спрячем предыдущую картинку
    i--;
    if (i < 0 ) { // Если i становится меньше ноля - переходим на последнюю картинку
        i = images.length - 1;// Показываем предидущую картинку
    }
    images[i].style.display = 'block'; 
}


btn_next.onclick = function() {
    images[i].style.display = 'none'; // Спрячем предыдущую картинку
    i++;
    if (i>= images.length) { // Если i становится больше, чем к-во картинок - переходим на первую картинку
        i=0
    }
    images[i].style.display = 'block'; // Показываем следующую картинку
}