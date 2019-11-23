// Получение города доставки
function getValueInp() {
    var resCity = document.querySelector('#to');
    y = resCity.value;

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
    
    var g = ' ';
    var g30 = ' ';
    var g300 = ' ';
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
// Перезагрузка получение города
setInterval(gg, 1000);




