import React, { ReactElement } from 'react';

import { Layout, Seo } from '../components';

export default function NotFoundPage(): ReactElement {
    return (
        <Layout>
            <Seo title="404: Not found" />
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    );
}
