import React from 'react';

import {
    Box,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';

import {
    useAppDispatch,
} from '../state/hooks';
import {
    fetchPokemonInfoAsync,
} from '../state/pokemonSlice';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

//  failed to fetch display component
const Failed = (props: {}): JSX.Element => {

    const classes = useStyles();
    const dispatch = useAppDispatch();

    return (
        <Box
            className={classes.root}
            textAlign='center'
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
                onClick={() => dispatch(fetchPokemonInfoAsync())}
                color='primary'
            >
                Try Again
            </Button>
        </Box>
    );

};

export default Failed;
