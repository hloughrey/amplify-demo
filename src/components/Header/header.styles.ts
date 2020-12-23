import styled from 'styled-components';
import { AppBar, Link } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    padding-top: ${({ theme }) => theme.spacing(2)}px;
    padding-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledLink = styled(Link)`
    flex-grow: 1;
`;
