function init() {
    const gostevoy_domCoords = [44.708956, 42.992570]; // Координаты гостевого дома

    let gostevoy_dom_map = new ymaps.Map('gostevoy_dom_map', {
        center: gostevoy_domCoords,
        zoom: 16
    });

    let gostevoy_dom_marker = new ymaps.Placemark(gostevoy_domCoords, {
        hintContent: 'Гостевой дом'
    }, {
        iconLayout: ymaps.templateLayoutFactory.createClass(
            '<div class="ymaps-image">' +
            '<img src="points_imgs/circle_image/gostevoy_dom.png" style="width: 50px; height: 50px;" />' 
        ),
        // отключаем кликабельность
        hasBalloon: false,
        openEmptyBalloon: false,
        clickable: false
    });

    gostevoy_dom_map.geoObjects.add(gostevoy_dom_marker);

    // отключение ненужных контролов
    gostevoy_dom_map.controls.remove('geolocationControl');
    gostevoy_dom_map.controls.remove('searchControl');
    gostevoy_dom_map.controls.remove('trafficControl');
    gostevoy_dom_map.controls.remove('typeSelector');
    gostevoy_dom_map.controls.remove('fullscreenControl');
    gostevoy_dom_map.controls.remove('zoomControl');
    gostevoy_dom_map.controls.remove('rulerControl');
}

ymaps.ready(init);
