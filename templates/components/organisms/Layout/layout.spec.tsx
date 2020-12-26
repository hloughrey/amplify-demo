import { ThemeProvider } from 'styled-components';
import React, { PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { defaultTheme } from '@pb/styles';
import { setup } from '@pb/jest-helpers';
import { TProperties } from './layout.types';
import { Layout } from '.';

const mockHead = jest.fn();
jest.mock('next/head', () => {
    return ({ children }: PropsWithChildren<Record<string, unknown>>) => {
        mockHead(children);
        return null;
    };
});

describe(`Layout`, () => {
    const partialProperties = setup<PropsWithChildren<TProperties>>({
        pageTitle: 'I am a page title',
        children: 'some content',
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should output the children', () => {
        const properties = partialProperties();

        render(
            <ThemeProvider theme={defaultTheme}>
                <Layout {...properties} />
            </ThemeProvider>
        );

        expect(screen.getByText('some content')).toBeInTheDocument();
    });

    it('should set the "pageTitle" as the page title', () => {
        const properties = partialProperties();

        render(
            <ThemeProvider theme={defaultTheme}>
                <Layout {...properties} />
            </ThemeProvider>
        );

        expect(mockHead.mock.calls[0][0].type).toEqual('title');
        expect(mockHead.mock.calls[0][0].props.children).toEqual(
            'I am a page title'
        );
    });
});
