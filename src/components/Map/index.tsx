import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
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

        if (viewDiv.current) {
            const map = new Map({
                basemap: 'topo-vector',
                ground: 'world-elevation',
            });

        
            if (value.length) {
                const geojsonLayerArr = new Array(value.length);
                value.map((item:any,index) => { 
                    const blob = new Blob([JSON.stringify(item.data)], {
                        type: 'application/json',
                    });
                    const url = URL.createObjectURL(blob);
                    const geojsonLayer = new GeoJSONLayer({
                        url,
                    });
                    const x:any = {
                        type: "simple",
                        symbol: {
                            type: "polygon-3d",
                            symbolLayers: [
                                {
                                    type: "extrude",
                                    size: Number(item.size),
                                    material: {
                                        color: item.color || "#fff",
                                    },
                                },
                            ],
                        }
                    }
                    geojsonLayer.renderer = x;
                    map.layers.add(geojsonLayer);
                })
            }

            // data.forEach((item) => {
            //     const geojsonLayer = new GeoJSONLayer({
            //         url: item.url,
            //     });
            //     geojsonLayer.renderer = {
            //         type: 'simple',
            //         symbol: {
            //             type: 'polygon-3d',
            //             symbolLayers: [
            //                 {
            //                     type: 'extrude',
            //                     size: item.size,
            //                     material: {
            //                         color: item.color,
            //                     },
            //                 },
            //             ],
            //         },
            //     } as any;
            //     map.layers.add(geojsonLayer);
            // });

            const view = new SceneView({
                container: viewDiv.current,
                map: map,
                camera: {
                    position: [106.80155361294294, 10.87203569911929, 150],
                    heading: 0,
                    tilt: 75,
                } as any,
            });

            view.popup.defaultPopupTemplateEnabled = true;
        }
    }, [status]);

    return <StyledMap ref={viewDiv}></StyledMap>;
};

export default UITMap;
