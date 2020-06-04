import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {get} from 'lodash';
import {GeoJSONLayer} from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';
import {NSOLayerProps} from "../../../config/types";
import {CovidSwitch, covidSwitchSelector, layerDataSelector} from "../../../context/mapStateSlice";
import {LayerData, loadLayerData} from "../../../context/layers/layer-data";
import {legendToStops} from "./layer-utils";
import {addPopupData} from '../../../context/tooltipStateSlice';

function NSOLayers() {
    const dispatch=useDispatch();
    const switchData: { [k in CovidSwitch]: boolean } = {
        "deaths": useSelector(covidSwitchSelector('deaths')),
        "recovered": useSelector(covidSwitchSelector('recovered')),
        "active": useSelector(covidSwitchSelector('active'))
    }
    let covidData:Array<any>|undefined=undefined;
    useEffect(()=>{
        fetch('https://disease.sh/v2/countries?yesterday=false&allowNull=false').then(res=>res.json()).then(res=>{
            covidData=res;
            console.log(covidData);
        })
    },[]);
    if(covidData===undefined)
        return null;


 /*   // We use the legend values from the config to define "intervals".
    const fillPaintData: MapboxGL.FillPaint = {
        'fill-opacity': layer.opacity || 0.3,
        'fill-color': {
            property: 'data',
            stops: legendToStops(layer.legend),
            type: 'interval',
        },
    };
    return (
        <GeoJSONLayer
            below="boundaries"
            data={features}
            fillPaint={fillPaintData}
            fillOnClick={(evt: any) => {
                dispatch(
                    addPopupData({
                        []: {
                            data: get(evt.features[0], 'properties.data', 'No Data'),
                            coordinates: evt.lngLat,
                        },
                    }),
                );
            }}
        />
    );*/
    return <p>awd</p>;
}

export default NSOLayers;
