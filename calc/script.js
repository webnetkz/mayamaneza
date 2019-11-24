// Получение города доставки
function getValueInp() {
    var resCity = document.querySelector('#to');
    y = resCity.value;
    if(y == '') {
        y = 'Выберите город';
    }
    return y;
}
// Получаем выбраный город
function gg() {
    var gg = getValueInp();
    return gg;
}
// Функционал ползунка
function getValueRange() {
    var rangeValue = document.querySelector('#size');
    var resSize = document.querySelector('#resSize');
    var resValue = document.querySelector('#resValue');
    
    g = gg();

    // Стоимость
    if((g == 'Нур-Cултан') || (g == 'Темиртау') || (g == 'Балхаш') || (g == 'Караганды')) {
        g = 5200;
        g30 = 110;
        g300 = 104;
    }
    if((g == 'Павлодар')) {
        g = 5850;
        g30 = 137;
        g300 = 130;
    }
    if((g == 'Кокшетау') || (g == 'Кызыл-Орда')) {
        g = 5850;
        g30 = 143;
        g300 = 137;
    }
    if((g == 'Экибастуз') || (g == 'Петропавловск') || (g == 'Костанай')) {
        g = 5850;
        g30 = 137;
        g300 = 130;
    }
    if((g == 'Семей') || (g == 'Усть-Каменогорск')) {
        g = 5200;
        g30 = 137;
        g300 = 130;
    }
    if((g == 'Шымкент') || (g == 'Тараз')) {
        g = 5850;
        g30 = 110;
        g300 = 104;
    }
    if((g == 'Талды-Курган')) {
        g = 5850;
        g30 = 98;
        g300 = 91;
    }
    if((g == 'Актобе')) {
        g = 6500;
        g30 = 156;
        g300 = 143;
    }
    if((g == 'Уральск')) {
        g = 6500;
        g30 = 163;
        g300 = 195;
    }
    if((g == 'Атырау')) {
        g = 7800;
        g30 = 163;
        g300 = 195;
    }
    if((g == 'Актау')) {
        g = 7800;
        g30 = 169;
        g300 = 163;
    }
    if((g == 'Жезказган')) {
        g = 7800;
        g30 = 163;
        g300 = 156;
    }
    if((g == 'Рудный')) {
        g = 6500;
        g30 = 143;
        g300 = 137;
    }
    
    //console.log(g30);
    
    var x = rangeValue.value;
    var xRes = '800';

    if(x <= 30) {
        xRes = g;
    }
    if(x > 30) {
        xRes = ((x - 30) * g30) + g;
    }
    if(x > 300) {
        xRes = ((x - 300) * g300) + (g + (270 * g30));
    }
    
    resSize.innerHTML = rangeValue.value + ' кг';
    resValue.innerHTML = xRes + ' тг';
    
}
function getValueRange2() {
    var rangeValue = document.querySelector('#size2');
    var resSize = document.querySelector('#resSize');
    var resValue = document.querySelector('#resValue');
    
    var g = '';
    var g1000 = ' ';
    var g3000 = ' ';
    g = gg();

    // Стоимость
    if((g == 'Нур-Cултан') || (g == 'Темиртау') || (g == 'Балхаш') || (g == 'Караганды')) {
        g = 107700;
        g1000 = 91;
        g3000 = 65;
    }
    if((g == 'Павлодар')) {
        g = 133840;
        g1000 = 117;
        g3000 = 91;
    }
    if((g == 'Кокшетау') || (g == 'Кызыл-Орда')) {
        g = 140360;
        g1000 = 124;
        g3000 = 98;
    }
    if((g == 'Экибастуз') || (g == 'Петропавловск') || (g == 'Костанай')) {
        g = 133840;
        g1000 = 117;
        g3000 = 91;
    }
    if((g == 'Семей') || (g == 'Усть-Каменогорск')) {
        g = 133190;
        g1000 = 117;
        g3000 = 91;
    }
    if((g == 'Шымкент') || (g == 'Тараз')) {
        g = 108350;
        g1000 = 91;
        g3000 = 65;
    }
    if((g == 'Талды-Курган')) {
        g = 96010;
        g1000 = 78;
        g3000 = 68;
    }
    if((g == 'Актобе')) {
        g = 148720;
        g1000 = 130;
        g3000 = 117;
    }
    if((g == 'Уральск')) {
        g = 187010;
        g1000 = 137;
        g3000 = 124;
    }
    if((g == 'Атырау')) {
        g = 108350;
        g1000 = 91;
        g3000 = 65;
    }
    if((g == 'Актау')) {
        g = 167530;
        g1000 = 150;
        g3000 = 143;
    }
    if((g == 'Жезказган')) {
        g = 161010;
        g1000 = 143;
        g3000 = 117;
    }
    if((g == 'Рудный')) {
        g = 141010;
        g1000 = 124;
        g3000 = 98;
    }
    
    //console.log(g30);
    
    var x = rangeValue.value;
    var xRes = '107700';

    if(x == 1000) {
        xRes = g;
    }
    if(x > 1000) {
        xRes = ((x - 1000) * g1000) + g;
    }
    if(x >= 3000) {
        xRes = ((x - 3000) * g3000) + g + (g1000 * 2000) ;
    }
    
    resSize.innerHTML = rangeValue.value + ' кг';
    resValue.innerHTML = xRes + ' тг';
    
}
// Перезагрузка получение города
setInterval(gg, 1000);

function checkGo() {
    var rangeValue = document.querySelector('.irs');
    rangeValue.style.display = "none";

    $("#size2").ionRangeSlider({
        min: 1000,
        max: 5000,
        from: 1000
    });
    
}

$("#size").ionRangeSlider({
    min: 1,
    max: 1000,
    from: 1
});



