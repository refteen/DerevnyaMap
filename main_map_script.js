const center = [44.726667, 42.966250];
const voyazhCoords = [44.706667, 43.005556];
const vodopadCoords = [44.746667, 42.926944];
const gostevoy_domCoords = [44.708956, 42.992570];
const fazanariyCoords = [44.803281, 42.821928]
const olenya_fermaCoords = [44.553681, 42.687418]

let field_welcome = document.querySelector('#welcome_field');
let field_voyazh = document.querySelector('#field_voyazh');
let field_vodopad_zhelaniy = document.querySelector('#field_vodopad_zhelaniy');
let map_main = document.querySelector('#map_main');
let voyazh_map = document.querySelector('#voyazh_map');
let vodopad_zhelaniy_map = document.querySelector('#vodopad_zhelaniy_map');
let gostevoy_dom_map = document.querySelector('#gostevoy_dom_map');
let fazanariy_map = document.querySelector('#fazanariy_map');
let olenya_ferma_map = document.querySelector('#olenya_ferma_map');


function showMain() {
    field_welcome.style.display = 'flex';
    field_voyazh.style.display = 'none';
    field_vodopad_zhelaniy.style.display = 'none';
    map_main.style.display = 'block';
    voyazh_map.style.display = 'none';
    vodopad_zhelaniy_map.style.display = 'none';
    gostevoy_dom_map.style.display = 'none'
    fazanariy_map.style.display = 'none'
    olenya_ferma_map.style.display = 'none'
}

function init() {
    let main_map = new ymaps.Map('map_main', {
        center: center,
        zoom: 12
    });

    // Метка Вояж
    let m1_voyazh = new ymaps.Placemark(voyazhCoords, {
        hintContent: '',
        iconContent: 'Вояж' // Текст под меткой
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'points_imgs/circle_image/voyazh.png',
        iconImageSize: [75, 75],
        iconImageOffset: [-30, -30],
        iconContentOffset: [13, 62], // Смещаем текст вниз
        iconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; font-weight: bold; font-family: \'MS Reference Sans Serif\', Verdana, Arial, sans-serif; font-size: 17px; text-shadow: 1px 1px 2px #fff;">$[properties.iconContent]</div>'
        )
    });
    m1_voyazh.events.add('click', function () {
        showMain();
        field_voyazh.style.display = 'flex';
        voyazh_map.style.display = 'block';
        field_welcome.style.display = 'none';
        map_main.style.display = 'none';
        field_voyazh.classList.remove('active');
        setTimeout(() => field_voyazh.classList.add('active'), 10);
    });

    // Метка Водопад желаний
    let m2_vodopad_zhelaniy = new ymaps.Placemark(vodopadCoords, {
        hintContent: '',
        iconContent: 'Водопад желаний'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'points_imgs/circle_image/vodopad_zhelaniy.png',
        iconImageSize: [75, 75],
        iconImageOffset: [-30, -30],
        iconContentOffset: [2, 62], // Смещаем текст вниз
        iconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; font-weight: bold; font-family: \'MS Reference Sans Serif\', Verdana, Arial, sans-serif; font-size: 17px; text-shadow: 1px 1px 2px #fff;">$[properties.iconContent]</div>'
        )
    });

    // Метка Гостевой дом
    let m3_gostevoy_dom = new ymaps.Placemark(gostevoy_domCoords, {
        hintContent: '',
        iconContent: 'Гостевой дом'
    
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'points_imgs/circle_image/gostevoy_dom.png',
        iconImageSize: [75, 75],
        iconImageOffset: [-30, -30],
        iconContentOffset: [2, 62], // Смещаем текст вниз
        iconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; font-weight: bold; font-family: \'MS Reference Sans Serif\', Verdana, Arial, sans-serif; font-size: 17px; text-shadow: 1px 1px 2px #fff;">$[properties.iconContent]</div>'
        )
    });

    // Метка Фазанарий
    let m4_fazanariy = new ymaps.Placemark(fazanariyCoords, {
        hintContent: '',
        iconContent: 'Гостевой дом Фазанарий'
    
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'points_imgs/circle_image/fazanariy.png',
        iconImageSize: [75, 75],
        iconImageOffset: [-30, -30],
        iconContentOffset: [2, 62], // Смещаем текст вниз
        iconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; font-weight: bold; font-family: \'MS Reference Sans Serif\', Verdana, Arial, sans-serif; font-size: 17px; text-shadow: 1px 1px 2px #fff;">$[properties.iconContent]</div>'
        )
    });
    
    // Метка Оленья ферма
    let m5_olenya_ferma = new ymaps.Placemark(olenya_fermaCoords, {
        hintContent: '',
        iconContent: 'Оленья ферма'
    
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'points_imgs/circle_image/olenya_ferma.png',
        iconImageSize: [75, 75],
        iconImageOffset: [-30, -30],
        iconContentOffset: [2, 62], // Смещаем текст вниз
        iconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; font-weight: bold; font-family: \'MS Reference Sans Serif\', Verdana, Arial, sans-serif; font-size: 17px; text-shadow: 1px 1px 2px #fff;">$[properties.iconContent]</div>'
        )
    });
    m2_vodopad_zhelaniy.events.add('click', function () {
        showMain();
        field_vodopad_zhelaniy.style.display = 'flex';
        vodopad_zhelaniy_map.style.display = 'block';
        field_welcome.style.display = 'none';
        map_main.style.display = 'none';
        field_vodopad_zhelaniy.classList.remove('active');
        setTimeout(() => field_vodopad_zhelaniy.classList.add('active'), 10);
    });

// Элемент тултипа
const tooltip = document.getElementById('tooltip');
const tooltipImg = document.getElementById('tooltip-img');
const tooltipTitle = document.getElementById('tooltip-title');
const tooltipText = document.getElementById('tooltip-text');

function showTooltip(coords, title, text, imgSrc) {
    tooltip.style.left = `${coords[0]}px`;
    tooltip.style.top = `${coords[1]}px`;
    tooltipImg.src = imgSrc;
    tooltipTitle.textContent = title;
    tooltipText.textContent = text;
    tooltip.style.display = 'block';
}

function hideTooltip() {
    tooltip.style.display = 'none';
}


    main_map.geoObjects.add(m1_voyazh);
    main_map.geoObjects.add(m2_vodopad_zhelaniy);
    main_map.geoObjects.add(m3_gostevoy_dom);
    main_map.geoObjects.add(m4_fazanariy);
    main_map.geoObjects.add(m5_olenya_ferma);

    
// Обработка наведения на метку Вояж
m1_voyazh.events.add('mouseenter', (e) => {
    const coords = e.get('pagePixels');
    showTooltip(
        coords,
        'Вояж',
        '3 звезды, ул. Войтика, 39',
        'points_imgs/info_image/voyazh.png'
    );
});
m1_voyazh.events.add('mouseleave', hideTooltip);

// Обработка наведения на метку Водопад желаний
m2_vodopad_zhelaniy.events.add('mouseenter', (e) => {
    const coords = e.get('pagePixels');
    showTooltip(
        coords,
        'Водопад желаний',
        '4 звезды, Красноармейская ул., 618А',
        'points_imgs/info_image/vodopad_zhelaniy.png'
    );
});
m2_vodopad_zhelaniy.events.add('mouseleave', hideTooltip);

// Обработка наведения на метку Гостевой дом
m3_gostevoy_dom.events.add('mouseenter', (e) => {
    const coords = e.get('pagePixels');
    showTooltip(
        coords,
        'Гостевой дом',
        'улица Калинина, 139',
        'points_imgs/info_image/gostevoy_dom.png'
    );
});
m3_gostevoy_dom.events.add('mouseleave', hideTooltip);

// Обработка наведения на метку Фазанарий
m4_fazanariy.events.add('mouseenter', (e) => {
    const coords = e.get('pagePixels');
    showTooltip(
        coords,
        'Гостевой дом Фазанарий',
        'Александровский муниципальный округ, село Северное, Дичферма,  ',
        'points_imgs/info_image/fazanariy.png'
    );
});
m4_fazanariy.events.add('mouseleave', hideTooltip);

// Обработка наведения на метку Оленья ферма
m5_olenya_ferma.events.add('mouseenter', (e) => {
    const coords = e.get('pagePixels');
    showTooltip(
        coords,
        'Оленья ферма',
        'Советская улица, 5, село Крымгиреевское  ',
        'points_imgs/info_image/olenya_ferma.png'
    );
});
m5_olenya_ferma.events.add('mouseleave', hideTooltip);

    // удаление ненужной хуйни с карты
    main_map.controls.remove('geolocationControl');
    main_map.controls.remove('searchControl');
    main_map.controls.remove('trafficControl');
    main_map.controls.remove('typeSelector');
    main_map.controls.remove('fullscreenControl');
    main_map.controls.remove('zoomControl');
    main_map.controls.remove('rulerControl');

    // Фильтрация 
    document.querySelector('#accreditation_filter').addEventListener('change', filterMarkers);
    document.querySelector('#stars_filter').addEventListener('change', filterMarkers);

    function filterMarkers() {
        let accreditation = document.querySelector('#accreditation_filter').value;
        let stars = document.querySelector('#stars_filter').value;

        main_map.geoObjects.removeAll();
        // параметры фильтров
        if (
            (stars === 'all' || stars === '3stars') &&
            (accreditation === 'all' || accreditation === 'accredited')
        ) {
            main_map.geoObjects.add(m1_voyazh); // Вояж**
        }
    
        if (
            (stars === 'all' || stars === '4stars') &&
            (accreditation === 'all' || accreditation === 'not_accredited')
        ) {
            main_map.geoObjects.add(m2_vodopad_zhelaniy); // Водопад**
        }
        if (
            (stars === 'all' || stars === 'all') &&
            (accreditation === 'all' || accreditation === 'not_accredited')
        ) {
            main_map.geoObjects.add(m3_gostevoy_dom); // Гостевой дом**
        }

        if (
            (stars === 'all' || stars === 'all') &&
            (accreditation === 'all' || accreditation === 'not_accredited')
        ) {
            main_map.geoObjects.add(m4_fazanariy); // Фазанарий**
        }

        if (
            (stars === 'all' || stars === 'all') &&
            (accreditation === 'all' || accreditation === 'accredited')
        ) {
            main_map.geoObjects.add(m5_olenya_ferma); // Оленья ферма**
        }
    }
    
}

ymaps.ready(init);