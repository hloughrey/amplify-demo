import React, { ReactElement } from 'react';
import loadable from '@loadable/component';

import { Layout, Seo } from '../components';
import {
    StyledContainer,
    StyledMapContainer,
} from '../pages-lib/basic-map/basic-map.styles.ts';

const Map = loadable(() =>
    import('../components').then(modules => modules.Map)
);

export default function BasicMap(): ReactElement {
    return (
        <Layout>
            <Seo title="Basic Map" />
            <StyledContainer>
                <StyledMapContainer>
                    <Map />
                </StyledMapContainer>
            </StyledContainer>
        </Layout>
    );
}
