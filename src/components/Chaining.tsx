import React from 'react';

import {
    Box,
    Typography,
    Select,
    MenuItem,
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
    const dispatch = useAppDispatch();

    const pokemon = useAppSelector(selectPokemon)?.
        map((poke) => poke.name).
        map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>);

    return (
        <Box className={classes.root}>
            <Select>
                {pokemon}
            </Select>
        </Box>
    );

};

export default Chaining;
