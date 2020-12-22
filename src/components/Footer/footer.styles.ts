import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(3, 0),
        marginTop: theme.spacing(2),
    },
}));
