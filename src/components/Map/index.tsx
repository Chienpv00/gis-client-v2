import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import { loadModules } from 'esri-loader';
import { data } from './data';
import { useEffect, useRef, useState } from 'react';
import { StyledMap } from './styled';

// Define interface
interface IUITMap {
    props?: any;
}

/**
 * Component UITMap
 * @params props: any
 * @returns JSX.Element
 */
const UITMap = ({ props }: IUITMap) => {
    const viewDiv = useRef(null);
    const [value, setValue] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        console.log(value);
        fetch('http://localhost:4000/api/getData')
            .then((res) => res.json())
            .then(
                (result) => {
                    setValue(result);
                    setStatus(true);
                },
                (err) => {}
            );

        loadModules(
            [
                'esri/Map',
                'esri/views/SceneView',
                'esri/layers/GeoJSONLayer',
                'esri/layers/SceneLayer',
                'esri/layers/GraphicsLayer',
                'esri/Graphic',
                'esri/request',
            ],
            {
                css: true,
            }
        ).then(([Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest]) => {
            const geojsonLayer = new GeoJSONLayer({
                url: './data.geojson',
            });
            const map = new Map({
                basemap: 'topo-vector',
                ground: 'world-elevation',
                layers: [geojsonLayer], //end layers
            });

            if (value.length && viewDiv.current) {
                value.map((item: any, index) => {
                    const blob = new Blob([JSON.stringify(item.data)], {
                        type: 'application/json',
                    });
                    const url = URL.createObjectURL(blob);
                    const geojsonLayer = new GeoJSONLayer({
                        url,
                    });
                    const x: any = {
                        type: 'simple',
                        symbol: {
                            type: 'polygon-3d',
                            symbolLayers: [
                                {
                                    type: 'extrude',
                                    size: Number(item.size),
                                    material: {
                                        color: item.color || '#fff',
                                    },
                                },
                            ],
                        },
                    };
                    geojsonLayer.renderer = x;
                    map.layers.add(geojsonLayer);
                });
            }

            const view = new SceneView({
                container: viewDiv.current,
                map: map,
                camera: {
                    position: [106.80155361294294, 10.87203569911929, 150],
                    heading: 155,
                    tilt: 75,
                },
            });

            view.popup.defaultPopupTemplateEnabled = true;
        });
    }, [status]);

    return <StyledMap ref={viewDiv}></StyledMap>;
};

export default UITMap;
