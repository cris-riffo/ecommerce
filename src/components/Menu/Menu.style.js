import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        '&> span > a': {
            color: 'white',
        },
    },
});

export default useStyles;