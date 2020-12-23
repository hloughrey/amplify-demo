/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require('react');
const { ThemeProvider } = require('styled-components');
const { createMuiTheme } = require('@material-ui/core/styles');

exports.wrapRootElement = ({ element }) => {
    const defaultTheme = createMuiTheme();

    return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};
