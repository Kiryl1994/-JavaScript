var mercedes = {
    name: 'Mercedes',
    model: 'GL450',
    engine: 4.0,
    year: 2015,
    color: 'black',
    hp: 300,
    forSale: 'true'
}

var bmw = {
    name: 'BMW',
    model: 'X6',
    engine: 3.0,
    year: 2023,
    color: 'white',
    hp: 313,
    forSale: 'false'
}

var audi = {
    name: 'Audi',
    model: 'Q7',
    engine: 3.0,
    year: 2025,
    color: 'blue',
    hp: 249,
    forSale: 'true'
}

// 1. Текущий год
var year = 2025;

// 2. Возраст автомобиля (carAge)
mercedes.carAge = year - mercedes.year;
bmw.carAge = year - bmw.year;
audi.carAge = year - audi.year;
alert('Возораст автомобиля Mercedes - ' + mercedes.carAge)
alert('Возораст автомобиля BMW - ' + bmw.carAge)
alert('Возораст автомобиля Audi - ' + audi.carAge)

// 3. Марки и модели всех авто
var names = 
    mercedes.name + " " + mercedes.model + ", " +
    bmw.name + " " + bmw.model + ", " +
    audi.name + " " + audi.model;
alert('Марка и модель всех авто - ' + names);

// 4. Средний возраст автомобилей
var averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;
alert('Средний возраст автомобилей - ' + averageAge);

// 5. Хотя бы один автомобиль продаётся?
var atLeastOneForSale =
    mercedes.forSale || bmw.forSale || audi.forSale;
alert('Хотя бы один автомобиль продаётся? - ' + atLeastOneForSale);

// 6. Все авто младше 5 лет?
var allYoungerThanFive =
    mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5;
alert('Все авто младше 5 лет? - ' + allYoungerThanFive);


// 7. Хоть один автомобиль имеет менее 250 л.с.?
var atLeastOneHasLittleHp =
    mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250;
alert('Хоть один автомобиль имеет менее 250 л.с.? - ' + atLeastOneHasLittleHp);


var car = bmw;

// 1.Проверка Марки и модели автомобиля
if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!');
} else {
    alert('Это - ' + car.name + ' ' + car.model + '');
}

//2. Возраст автомобиля
if (car.carAge === 0) {
    alert('Новый автомобиль');
} else if (car.carAge <= 3) {
    alert('Свежий автомобиль');
} else if (car.carAge) {
    alert('Лет этому авто: ' + car.carAge);
}

// 4. Расход топлива (тернарный оператор)
var consumption;

if (car.engine > 3.0) {
    alert('Прожорливый автомобиль');
} else {
    alert('Экономичный автомобиль');
}

var russianColor;

switch (car.color) {
    case 'black':
        russianColor = 'черный';
    break;
    case 'silver':
        russianColor = 'серебристый';
    break;
    case 'red':
        russianColor = 'красный';
    break;
    case 'white':
        russianColor = 'белый';
    break;
    case 'gray':
        russianColor = 'серый';
    break;
    case 'blue':
        russianColor = 'синий';
    break;
    default:
        russianColor = 'Невозможно определить цвет автомобиля';
    break;
}

alert(russianColor);

