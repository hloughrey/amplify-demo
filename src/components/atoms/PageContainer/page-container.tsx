import React, { ReactElement, PropsWithChildren } from 'react';

import { StyledPageContainer } from './page-container.styled';

export function PageContainer({
    children,
    className,
}: PropsWithChildren<null>): ReactElement {
    return (
        <StyledPageContainer className={className} maxWidth="lg">
            {children}
        </StyledPageContainer>
    );
}
