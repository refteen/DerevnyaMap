function init() {
    const voyazhCoords = [44.706667, 43.005556]; // Координаты Вояж

    let voyazh_map = new ymaps.Map('voyazh_map', {
        center: voyazhCoords,
        zoom: 16
    });

    let voyazh_marker = new ymaps.Placemark(voyazhCoords, {
        hintContent: 'Вояж'
    }, {
        iconLayout: ymaps.templateLayoutFactory.createClass(
            '<div class="ymaps-image">' +
            '<img src="points_imgs/circle_image/voyazh.png" style="width: 50px; height: 50px;" />' 
        )
    });

    voyazh_map.geoObjects.add(voyazh_marker);

    // off ненужных элементов управления
    voyazh_map.controls.remove('geolocationControl');
    voyazh_map.controls.remove('searchControl');
    voyazh_map.controls.remove('trafficControl');
    voyazh_map.controls.remove('typeSelector');
    voyazh_map.controls.remove('fullscreenControl');
    voyazh_map.controls.remove('zoomControl');
    voyazh_map.controls.remove('rulerControl');
}

ymaps.ready(init);
