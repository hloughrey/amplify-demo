import React from 'react';
import { Link } from 'gatsby';
import { Typography, Container } from '@material-ui/core';

import { Layout, Seo } from '../components';

const IndexPage = () => (
    <Layout>
        <Container fixed maxWidth="lg">
            <Seo title="Home" />
            <Typography variant="h4" component="h1" gutterBottom>
                MapAction
            </Typography>
            <p>Welcome to MapActions new Web Map portal</p>
            <p>These are a few examples of maps which we can build.</p>
            <br />
            <Link to="/basic-map/">Go to Basic Map example</Link>
        </Container>
    </Layout>
);

export default IndexPage;
