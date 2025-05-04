function init() {
    const fazanariyCoords = [44.708956, 42.992570]; // Координаты гостевого дома

    let fazanariy_map = new ymaps.Map('fazanariy_map', {
        center: fazanariyCoords,
        zoom: 16
    });

    let fazanariy_marker = new ymaps.Placemark(fazanariyCoords, {
        hintContent: 'Гостевой дом'
    }, {
        iconLayout: ymaps.templateLayoutFactory.createClass(
            '<div class="ymaps-image">' +
            '<img src="points_imgs/circle_image/fazanariy.png" style="width: 50px; height: 50px;" />' 
        ),
        // отключаем кликабельность
        hasBalloon: false,
        openEmptyBalloon: false,
        clickable: false
    });

    fazanariy_map.geoObjects.add(fazanariy_marker);

    // отключение ненужных контролов
    fazanariy_map.controls.remove('geolocationControl');
    fazanariy_map.controls.remove('searchControl');
    fazanariy_map.controls.remove('trafficControl');
    fazanariy_map.controls.remove('typeSelector');
    fazanariy_map.controls.remove('fullscreenControl');
    fazanariy_map.controls.remove('zoomControl');
    fazanariy_map.controls.remove('rulerControl');
}

ymaps.ready(init);
