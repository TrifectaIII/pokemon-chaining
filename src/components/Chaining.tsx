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
import ChainingSelect from './ChainingSelect';
import ChainingResult from './ChainingResult';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

//  chaining display component
const Chaining = (props: {}): JSX.Element => {

    const classes = useStyles();
    // const dispatch = useAppDispatch();

    // const startingPokemon = useAppSelector(selectStartingPokemon);
    // const endingPokemon = useAppSelector(selectEndingPokemon);

    return (
        <Box className={classes.root}>
            <ChainingSelect />
            <ChainingResult />
        </Box>
    );

};

export default Chaining;
