import React from 'react';

import {
    Box,
    Typography,
    makeStyles,
} from '@material-ui/core';

// import {
//     useAppSelector,
//     useAppDispatch,
// } from '../state/hooks';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

//  Loading display component
const Loading = (props: {}): JSX.Element => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography
                variant='h4'
                align='center'
            >
                Loading...
            </Typography>
        </Box>
    );

};

export default Loading;
