import React, { ReactElement } from 'react';
import { AppBar, Toolbar, Link, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './header.styles';
import Logo from '../../images/WhiteLogo.svg';

export function Header(): ReactElement {
    const { foobar, logo } = useStyles();

    return (
        <AppBar position="static" className={foobar}>
            <Toolbar>
                <Link href="https://mapaction.org/" className={logo}>
                    <Logo width="150" height="54" />
                </Link>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
