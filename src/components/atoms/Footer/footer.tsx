import React, { ReactElement, Fragment } from 'react';
import { Typography, Link } from '@material-ui/core';

import { PageContainer } from '../../../components';
import { StyledFooter } from './footer.styles';

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
    return (
        <StyledFooter>
            <PageContainer>
                <Fragment>
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
                </Fragment>
            </PageContainer>
        </StyledFooter>
    );
}
