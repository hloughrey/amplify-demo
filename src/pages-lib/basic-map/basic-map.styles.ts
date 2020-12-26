import styled from 'styled-components';

import { PageContainer } from '../../components';

export const StyledPageContainer = styled(PageContainer)`
    display: flex;
    flex-direction: column;
`;

export const StyledMapContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 40px;
    margin: ${({ theme }) => theme.spacing(2, 0)};
`;
