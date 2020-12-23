/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');
const { ThemeProvider } = require('styled-components');
const { createMuiTheme } = require('@material-ui/core/styles');

exports.wrapRootElement = ({ element }) => {
    const defaultTheme = createMuiTheme();

    return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};
