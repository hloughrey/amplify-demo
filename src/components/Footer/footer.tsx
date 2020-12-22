import React, { ReactElement } from 'react';
import { Typography, Container, Link } from '@material-ui/core';

import { useStyles } from './footer.styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                MapAction
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export function Footer(): ReactElement {
    const { footer } = useStyles();

    return (
        <footer className={footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Maybe have some links to relevant resources
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
}
