import React, { PropsWithChildren, ReactElement, Fragment } from 'react';
import Head from 'next/head';

import { TProperties } from './layout.types';
import { StyledWrapper, StyledContent, StyledMain } from './layout.styled';

export function Layout({
    pageTitle,
    children,
}: PropsWithChildren<TProperties>): ReactElement {
    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <StyledWrapper data-testid="layout">
                <StyledMain element="main">
                    <StyledContent>{children}</StyledContent>
                </StyledMain>
            </StyledWrapper>
        </Fragment>
    );
}
