import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(2),
    },
    foobar: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    logo: {
        flexGrow: 1,
    },
}));
