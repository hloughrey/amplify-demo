import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const StyledPageContainer = styled(Container)`
    padding-left: 0;
    padding-right: 0;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.values.md}px`}) {
        max-width: 1200px;
    }
`;
