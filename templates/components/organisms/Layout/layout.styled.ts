import styled from 'styled-components';

import { Section } from '@pb/shared-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledMain = styled(Section)`
    flex-grow: 1;
`;

export const StyledContent = styled.div`
    flex: 1;
    max-width: 128rem;
    margin: auto;
`;
