var data = {};

data.UA = {
    people: [
                ["Назар", "Артем", "Данила", "Александр", "Степан", "Егор", "Юрий", "Владимир", "Иван", "Алексей", "Кирилл", "Евгений"],
                ["Анастасия",  "Дарья", "Ольга", "Ирина", "Виктория", "Мария"]
            ],
	city: ['Киев', 'Николаев', 'Львов', 'Днепропетровск', 'Одесса', 'Харьков', 'Житомир', 'Кременчуг', 'Павлоград', 'Тернополь'],
	info: ['<span>Заказать</span> ', 'ОМЕГА-3 <span>Лучшая Цена</span>', 'Сейчас на сайте: ', ' чел.',]
};

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
}

function gotools(countryCode) {
    $(".gobutton").html(data[countryCode].info[0]); // Кнопка скролла
    $(".goflag").html(data[countryCode].info[1]); // Надпись быстрой доставки
    $(".goflag").css("backgroundImage", "url(/k_assets/img/flags/"+countryCode+".png"); // Флаг
    $(".gostats").html(data[countryCode].info[2]+getRandomInt(113, 259)+data[countryCode].info[3]);   // Количество посетителей
}

function showbuy(countryCode) {
    if(data[countryCode].city[0] !== undefined) {
        var buybox = true;
        var buybox = true;
        var goshowb = $(".goshowb");
        locSex = (sex != 'random') ?  sex : getRandomInt(0, 1);
        var countP = data[countryCode].people[locSex].length - 1;
        var countC = data[countryCode].city.length - 1;
        randP = getRandomInt(1, countP);
        randC = getRandomInt(1, countC);
        var purCnt = Math.floor(Math.random() * (6 - 3 + 1) + 3);
        if (data[countryCode].purchase) {
            var purCntString = purCnt + ' ' + data[countryCode].purchase[1];
            $(".numbox").text(purCnt);
            $(".gopeople").text(data[countryCode].people[locSex][randP]+" ("+data[countryCode].city[randC]+") "+ data[countryCode].purchase[0] +" "+purCntString);
        } else {
            var purCntString = purCnt + ' ' + declOfNum(purCnt, ['упаковка', 'упаковки', 'упаковок']);
            $(".numbox").text(purCnt);
            $(".gopeople").text(data[countryCode].people[locSex][randP]+" ("+data[countryCode].city[randC]+") заказал(а) "+purCntString);
        }
        goshowb.slideDown();
        setTimeout(function(){ goshowb.slideUp(); }, 6000);
    } else {
        var buybox = false;
    }
}

function showMobile() {

    $(".opabox").eq(i).fadeIn().siblings(".opabox").fadeOut();
    if (i > 2) {
        i = 0;
    } else{
        i++
    }

}

$(document).ready(function() {

    if(data[countryCode] == undefined) {
        countryCode = "RU";
    }

    i = 0;

	gotools(countryCode);
    intervalID = setInterval(function() { showbuy(countryCode); }, 10000);


    // Действие при смене страны
	$('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var countryCode = data.geo_key;
        clearInterval(intervalID);
        gotools(countryCode);
        intervalID = setInterval(function() { showbuy(countryCode); }, 10000);
    });

    
    // Плавный скролл до первой формы
    $('.gobutton').click( function(){ 
        var scroll_el = "form"; 
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    // Активация анимациии для мобильных
    if ($(window).width() < 790) {
        setInterval(function() { showMobile(); }, 6000);
    }

});


