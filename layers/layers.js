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
var format_Composteursindividuels_2 = new ol.format.GeoJSON();
var features_Composteursindividuels_2 = format_Composteursindividuels_2.readFeatures(json_Composteursindividuels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composteursindividuels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Composteursindividuels_2.addFeatures(features_Composteursindividuels_2);
var lyr_Composteursindividuels_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Composteursindividuels_2, 
                style: style_Composteursindividuels_2,
                interactive: true,
    title: 'Composteurs individuels<br />\
    <img src="styles/legend/Composteursindividuels_2_0.png" /> 2012<br />\
    <img src="styles/legend/Composteursindividuels_2_1.png" /> 2013<br />\
    <img src="styles/legend/Composteursindividuels_2_2.png" /> 2014<br />\
    <img src="styles/legend/Composteursindividuels_2_3.png" /> 2015<br />\
    <img src="styles/legend/Composteursindividuels_2_4.png" /> 2016<br />\
    <img src="styles/legend/Composteursindividuels_2_5.png" /> 2017<br />\
    <img src="styles/legend/Composteursindividuels_2_6.png" /> 2018<br />\
    <img src="styles/legend/Composteursindividuels_2_7.png" /> 2019<br />\
    <img src="styles/legend/Composteursindividuels_2_8.png" /> 2020<br />\
    <img src="styles/legend/Composteursindividuels_2_9.png" /> 2021<br />\
    <img src="styles/legend/Composteursindividuels_2_10.png" /> 2022<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_CPThuir_1.setVisible(true);lyr_Composteursindividuels_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CPThuir_1,lyr_Composteursindividuels_2];
lyr_CPThuir_1.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Nbrhabitat': 'Nbrhabitat', });
lyr_Composteursindividuels_2.set('fieldAliases', {'Nom de l\'a': 'Nom de l\'a', 'Adresse de': 'Adresse de', 'Commune': 'Commune', 'Nombre de': 'Nombre de', 'Observatio': 'Observatio', 'Date d\'acq': 'Date d\'acq', 'Ann�e': 'Ann�e', 'Propri�t': 'Propri�t', 'Coordonn��': 'Coordonn��', 'Mail': 'Mail', 'Nombre d_1': 'Nombre d_1', 'superficie': 'superficie', 'Observat_1': 'Observat_1', 'latitude': 'latitude', 'longitude': 'longitude', 'result_lab': 'result_lab', 'result_sco': 'result_sco', 'result_typ': 'result_typ', 'result_id': 'result_id', 'result_hou': 'result_hou', 'result_nam': 'result_nam', 'result_str': 'result_str', 'result_pos': 'result_pos', 'result_cit': 'result_cit', 'result_con': 'result_con', 'result_c_1': 'result_c_1', 'result_old': 'result_old', 'result_o_1': 'result_o_1', 'result_dis': 'result_dis', });
lyr_CPThuir_1.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Nbrhabitat': 'TextEdit', });
lyr_Composteursindividuels_2.set('fieldImages', {'Nom de l\'a': 'TextEdit', 'Adresse de': 'TextEdit', 'Commune': 'TextEdit', 'Nombre de': 'TextEdit', 'Observatio': 'TextEdit', 'Date d\'acq': 'TextEdit', 'Ann�e': 'TextEdit', 'Propri�t': 'TextEdit', 'Coordonn��': 'TextEdit', 'Mail': 'TextEdit', 'Nombre d_1': 'TextEdit', 'superficie': 'TextEdit', 'Observat_1': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'result_lab': 'TextEdit', 'result_sco': 'TextEdit', 'result_typ': 'TextEdit', 'result_id': 'TextEdit', 'result_hou': 'TextEdit', 'result_nam': 'TextEdit', 'result_str': 'TextEdit', 'result_pos': 'TextEdit', 'result_cit': 'TextEdit', 'result_con': 'TextEdit', 'result_c_1': 'TextEdit', 'result_old': 'TextEdit', 'result_o_1': 'TextEdit', 'result_dis': 'TextEdit', });
lyr_CPThuir_1.set('fieldLabels', {'id': 'no label', 'Type': 'no label', 'Nbrhabitat': 'no label', });
lyr_Composteursindividuels_2.set('fieldLabels', {'Nom de l\'a': 'no label', 'Adresse de': 'no label', 'Commune': 'no label', 'Nombre de': 'no label', 'Observatio': 'no label', 'Date d\'acq': 'no label', 'Ann�e': 'no label', 'Propri�t': 'no label', 'Coordonn��': 'no label', 'Mail': 'no label', 'Nombre d_1': 'no label', 'superficie': 'no label', 'Observat_1': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'result_lab': 'no label', 'result_sco': 'no label', 'result_typ': 'no label', 'result_id': 'no label', 'result_hou': 'no label', 'result_nam': 'no label', 'result_str': 'no label', 'result_pos': 'no label', 'result_cit': 'no label', 'result_con': 'no label', 'result_c_1': 'no label', 'result_old': 'no label', 'result_o_1': 'no label', 'result_dis': 'no label', });
lyr_Composteursindividuels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});