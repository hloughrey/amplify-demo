import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
`;

export const StyledMain = styled.main`
    flex: 1;
    padding: ${({ theme }) => theme.spacing(2)}px;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.values.sm}px`}) {
        padding-left: ${({ theme }) => theme.spacing(3)}px;
        padding-right: ${({ theme }) => theme.spacing(3)}px;
    }
`;
