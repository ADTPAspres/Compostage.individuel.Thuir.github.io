var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CPThuir_1 = new ol.format.GeoJSON();
var features_CPThuir_1 = format_CPThuir_1.readFeatures(json_CPThuir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPThuir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPThuir_1.addFeatures(features_CPThuir_1);
var lyr_CPThuir_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CPThuir_1, 
                style: style_CPThuir_1,
                interactive: true,
    title: 'CP-Thuir<br />\
    <img src="styles/legend/CPThuir_1_0.png" /> Centre<br />\
    <img src="styles/legend/CPThuir_1_1.png" /> HLM<br />\
    <img src="styles/legend/CPThuir_1_2.png" /> Lotissement<br />'
        });
var format_SiteCP_2 = new ol.format.GeoJSON();
var features_SiteCP_2 = format_SiteCP_2.readFeatures(json_SiteCP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteCP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteCP_2.addFeatures(features_SiteCP_2);
var lyr_SiteCP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiteCP_2, 
                style: style_SiteCP_2,
                interactive: true,
                title: '<img src="styles/legend/SiteCP_2.png" /> Site CP'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_CPThuir_1.setVisible(true);lyr_SiteCP_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CPThuir_1,lyr_SiteCP_2];
lyr_CPThuir_1.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Nbrhabitat': 'Nbrhabitat', });
lyr_SiteCP_2.set('fieldAliases', {'id': 'id', });
lyr_CPThuir_1.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Nbrhabitat': 'TextEdit', });
lyr_SiteCP_2.set('fieldImages', {'id': 'TextEdit', });
lyr_CPThuir_1.set('fieldLabels', {'id': 'no label', 'Type': 'no label', 'Nbrhabitat': 'no label', });
lyr_SiteCP_2.set('fieldLabels', {'id': 'no label', });
lyr_SiteCP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});