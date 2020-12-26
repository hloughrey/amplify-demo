import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { MapContainer } from 'react-leaflet';

// export const StyledContainer = styled(Container)`
//     padding-left: 0;
//     padding-right: 0;
//     display: flex;
//     flex-direction: column;
// `;

export const StyledMapContainer = styled(MapContainer)`
    height: 400px;
    width: 100%;
`;
