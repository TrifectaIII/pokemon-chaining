import React from 'react';

import {
    Box,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

//  failed to fetch display component
const Failed = (props: {
    tryAgain: () => void,
}): JSX.Element => {

    const classes = useStyles();

    return (
        <Box
            className={classes.root}
            textAlign={'center'}
        >
            <Typography
                variant='h4'
                align='center'
            >
                Failed to fetch data
            </Typography>
            <Typography
                variant='h5'
            >
                Please check your internet connection
            </Typography>
            <Button
                variant='contained'
                size='large'
                onClick={props.tryAgain}
                color='primary'
            >
                Try Again
            </Button>
        </Box>
    );

};

export default Failed;
