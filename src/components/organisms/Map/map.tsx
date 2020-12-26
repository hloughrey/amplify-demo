import React, { ReactElement } from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';

import { StyledMapContainer } from './map.styles';

export function Map(): ReactElement {
    if (typeof window !== 'undefined') {
        return (
            <div>
                <StyledMapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </StyledMapContainer>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
}
