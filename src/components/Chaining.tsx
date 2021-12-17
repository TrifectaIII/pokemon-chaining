import React from 'react';

import {
    Box,
    Typography,
    makeStyles,
} from '@material-ui/core';

import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectPokemon,
    selectStartingPokemon,
    selectEndingPokemon,
    setStarting,
    setEnding,
} from '../state/pokemonSlice';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

//  chaining display component
const Chaining = (props: {}): JSX.Element => {

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

export default Chaining;
