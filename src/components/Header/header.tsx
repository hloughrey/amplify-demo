import React, { ReactElement } from 'react';
import { Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { StyledAppBar, StyledLink } from './header.styles';
import Logo from '../../images/WhiteLogo.svg';

export function Header(): ReactElement {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <StyledLink href="https://mapaction.org/">
                    <Logo width="150" height="54" />
                </StyledLink>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    );
}
