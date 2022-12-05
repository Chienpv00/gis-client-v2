import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import { data } from './data';
import { useEffect, useRef } from 'react';
import { StyledMap } from './styled';

const UITMap = () => {
    const viewDiv = useRef(null);
    useEffect(() => {
        if (viewDiv.current) {      
            const map = new Map({
                basemap: 'topo-vector',
                ground: 'world-elevation',
            });

            data.forEach((item) => {
                const geojsonLayer = new GeoJSONLayer({
                    url: item.url,
                });
                geojsonLayer.renderer = {
                    type: 'simple',
                    symbol: {
                        type: 'polygon-3d',
                        symbolLayers: [
                            {
                                type: 'extrude',
                                size: item.size,
                                material: {
                                    color: item.color,
                                },
                            },
                        ],
                    },
                } as any;
                map.layers.add(geojsonLayer);
            });

            const view = new SceneView({
                container: viewDiv.current,
                map: map,
                camera: {
                    position: [106.80249, 10.86985, 300],
                    heading: 0,
                    tilt: 75,
                } as any,
            });

            view.popup.defaultPopupTemplateEnabled = true;
        }
    }, []);

    return <StyledMap ref={viewDiv}></StyledMap>;
};

export default UITMap;
