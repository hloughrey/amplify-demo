import styled from 'styled-components';

import { PageContainer } from '../../components';

export const StyledPageContainer = styled(PageContainer)`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2)}px;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.values.sm}px`}) {
        padding-left: ${({ theme }) => theme.spacing(3)}px;
        padding-right: ${({ theme }) => theme.spacing(3)}px;
    }
`;

export const StyledMapContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 40px;
    margin: ${({ theme }) => theme.spacing(2, 0)};
`;
