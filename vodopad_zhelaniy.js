function init() {
    const vodopadCoords = [44.746667, 42.926944]; // Реальные координаты Водопада желаний

    let vodopad_zhelaniy_map = new ymaps.Map('vodopad_zhelaniy_map', {
        center: vodopadCoords,
        zoom: 16
    });

    let vodopad_marker = new ymaps.Placemark(vodopadCoords, {
        hintContent: 'Водопад желаний'
    }, {
        iconLayout: ymaps.templateLayoutFactory.createClass(
            '<div class="ymaps-image">' +
            '<img src="points_imgs/circle_image/vodopad_zhelaniy.png" style="width: 50px; height: 50px;" />' 
        )
    });

    vodopad_zhelaniy_map.geoObjects.add(vodopad_marker);

    vodopad_zhelaniy_map.controls.remove('geolocationControl');
    vodopad_zhelaniy_map.controls.remove('searchControl');
    vodopad_zhelaniy_map.controls.remove('trafficControl');
    vodopad_zhelaniy_map.controls.remove('typeSelector');
    vodopad_zhelaniy_map.controls.remove('fullscreenControl');
    vodopad_zhelaniy_map.controls.remove('zoomControl');
    vodopad_zhelaniy_map.controls.remove('rulerControl');
}

ymaps.ready(init);