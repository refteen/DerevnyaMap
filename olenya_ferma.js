function init() {
    const olenya_fermaCoords = [44.553681, 42.687418]; // Координаты гостевого дома

    let olenya_ferma_map = new ymaps.Map('olenya_ferma_map', {
        center: olenya_fermaCoords,
        zoom: 16
    });

    let olenya_ferma_marker = new ymaps.Placemark(olenya_fermaCoords, {
        hintContent: 'Оленья ферма'
    }, {
        iconLayout: ymaps.templateLayoutFactory.createClass(
            '<div class="ymaps-image">' +
            '<img src="points_imgs/circle_image/olenya_ferma.png" style="width: 50px; height: 50px;" />' 
        ),
        // отключаем кликабельность
        hasBalloon: false,
        openEmptyBalloon: false,
        clickable: false
    });

    olenya_ferma_map.geoObjects.add(olenya_ferma_marker);

    // отключение ненужных контролов
    olenya_ferma_map.controls.remove('geolocationControl');
    olenya_ferma_map.controls.remove('searchControl');
    olenya_ferma_map.controls.remove('trafficControl');
    olenya_ferma_map.controls.remove('typeSelector');
    olenya_ferma_map.controls.remove('fullscreenControl');
    olenya_ferma_map.controls.remove('zoomControl');
    olenya_ferma_map.controls.remove('rulerControl');
}

ymaps.ready(init);
