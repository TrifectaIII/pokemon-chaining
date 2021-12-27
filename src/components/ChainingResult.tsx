import React from 'react';

import {
    Box,
    makeStyles,
} from '@material-ui/core';

// import {
//     useAppSelector,
//     useAppDispatch,
// } from '../state/hooks';
// import {
//     selectPokemon,
//     selectStartingPokemon,
//     selectEndingPokemon,
// } from '../state/pokemonSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

//  chaining display component
const ChainingResult = (props: {}): JSX.Element => {

    const classes = useStyles();
    // const dispatch = useAppDispatch();

    // const startingPokemon = useAppSelector(selectStartingPokemon);
    // const endingPokemon = useAppSelector(selectEndingPokemon);

    return (
        <Box className={classes.root}>
            A Result
        </Box>
    );

};

export default ChainingResult;
